import joi from 'joi'

export const CarSchema = joi.object({
    name: joi.string().min(3).required(),
    year: joi.number().required(),
    model: joi.string().min(3).required(),
    vin: joi.string().min(17).max(17).required(),

    images: joi.array(),
    mileage: joi.object({
        value: joi.number().required(),
        unit: joi.string().required()
    }),
    autopilot: joi.string(),
    location: joi.string().min(3).required(),
    price: joi.object({
        value: joi.number().required(),
        unit: joi.string().required()
    }),
})