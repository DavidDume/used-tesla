import CarModel from "~/server/models/Car.model"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body);

    await CarModel.create(body)
    return { message: 'Car created' }
})