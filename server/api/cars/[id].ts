import CarModel from "~/server/models/Car.model"
import { CarSchema } from "~/server/validations";

export default defineEventHandler(async (event) => {

    const id = event.context.params?.id;

    try {
        let listing = await CarModel.findById(id);
        return listing;
    } catch (e: any) {
        throw createError({
            message: e.message,
        });
    }
})

