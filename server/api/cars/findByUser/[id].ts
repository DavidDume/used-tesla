import CarModel from "~/server/models/Car.model"

export default defineEventHandler(async (event) => {

    const id = event.context.params?.id;
    return await CarModel.find({ seller: id })

})