import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import { ICar } from '~/types'

const schema: mongoose.Schema = new mongoose.Schema(
    {
        year: {
            type: Number,
            required: true
        },
        model: {
            type: String,
            required: true,
        },
        vin: {
            type: String,
            required: true,
            unique: true
        },
        seller: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        images: [String],
        mileage: {
            value: { type: Number, required: true },
            unit: { type: String, required: true, default: 'KM' }
        },
        color: String,
        trim: String,
        condition: String,
        position: {
            type: String,
            required: true
        },
        price: {
            value: { type: Number, required: true },
            unit: { type: String, required: true, default: 'EUR' }
        },
        description: {
            type: String
        }
    },
    { timestamps: true }
)

export default mongoose.model<ICar>("Car", schema)