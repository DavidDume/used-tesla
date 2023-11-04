import CarModel from "~/server/models/Car.model"
import { CarSchema } from "~/server/validations";

export default defineEventHandler(async (event) => {

    const id = event.context.params?.id;

    try {
        await CarModel.findByIdAndDelete(id);
        return { message: "car deleted" };
    } catch (e: any) {
        throw createError({
            message: e.message,
        });
    }
})

