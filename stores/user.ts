import { object } from 'joi'
import { defineStore } from 'pinia'
import { IUser } from '~/types'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {} as IUser
    }),
    actions: {
        async getUser() {
            try {
                const { data } = useAuth()
                this.user = data?.value?.user as IUser
            } catch (e) {
                throw e
            }
        },
        logout() {
            const { signOut } = useAuth()
            signOut()
        }
    }

})