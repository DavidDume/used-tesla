import UserModel from "~/server/models/User.model"
import { UserSchema } from "~/server/validations"

import bcrypt from "bcrypt"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { error } = UserSchema.validate(body)
    if (error) {
        throw error
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(body.password, salt)

    await UserModel.create({ ...body, password: hashedPassword })
    return { message: 'User created' }
})