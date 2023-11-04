import CarModel from "~/server/models/Car.model"

export default defineEventHandler(async (event) => {
    return await CarModel.find().populate('cars')
})