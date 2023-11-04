import UserModel from "~/server/models/User.model";


export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    await UserModel.create(body)
    return { message: 'user created' }
})

{

}