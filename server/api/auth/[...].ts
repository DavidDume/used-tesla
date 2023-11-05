import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import UserModel from '~/server/models/User.model'

import bcrypt from "bcrypt"

export default NuxtAuthHandler({
    // The secret used to encrypt the JWT.
    secret: useRuntimeConfig().AUTH_SECRET,

    pages: {
        signIn: '/login'
    },

    providers: [
        // @ts-expect-error
        CredentialsProvider.default({
            // The name to display on the sign-in form.
            name: 'Credentials',

            credentials: {},

            // The authorize function is called when a user attempts to sign in.
            async authorize(credentials: { username: string, password: string }) {
                // fetch user from database
                const user = await UserModel.findOne({ username: credentials.username })

                if (!user) {
                    throw createError({
                        statusCode: 401,
                        statusMessage: 'Unauthorized'
                    })
                }

                const isValid = await bcrypt.compare(credentials.password, user.password)

                if (!isValid) {
                    throw createError({
                        statusCode: 401,
                        statusMessage: 'Unauthorized'
                    })
                }
                return { ...user.toObject(), password: undefined }
            }
        })
    ],

    session: {
        strategy: 'jwt'
    },


    callbacks: {
        // When a JWT token is created or updated, this callback is fired.

        async jwt({ token, user, account }) {
            if (user) {
                token = {
                    ...token,
                    ...user
                }
            }
            return token
        },

        // When a session is created or updated, this callback is fired.
        async session({ session, token }) {
            session.user = {
                ...token,
                ...session.user
            }
            return session
        }
    }
})
