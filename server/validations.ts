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

export const UserSchema = joi.object({
    username: joi.string().min(3).required(),
    email: joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
    }),
    password: joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .min(8)
        .messages({
            "string.pattern.base": `Password should be between 3 to 30 characters and contain letters or numbers only`,
            "string.empty": `Password cannot be empty`,
            "any.required": `Password is required`,
        }),
})