import CarModel from "~/server/models/Car.model"
import { CarSchema } from "~/server/validations";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const id = event.context.params?.id;

    const { error } = CarSchema.validate(body)
    if (error) {
        throw error

    }

    try {
        await CarModel.findByIdAndUpdate(id, body);
        return { message: "car updated" };
    } catch (e: any) {
        throw createError({
            message: e.message,
        });
    }
})

