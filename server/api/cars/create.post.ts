import CarModel from "~/server/models/Car.model"
import { CarSchema } from "~/server/validations";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { error } = CarSchema.validate(body)
    if (error) {
        throw error

    }

    const car = await CarModel.create(body)

    return car
})