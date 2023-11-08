import CarModel from "~/server/models/Car.model"
import { CarSchema } from "~/server/validations";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body);

    const { error } = CarSchema.validate(body)
    if (error) {
        throw error

    }
    await CarModel.create(body)
    return { message: 'Car created' }
})