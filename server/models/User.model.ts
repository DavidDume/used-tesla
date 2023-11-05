import mongoose from 'mongoose'

export interface UserDocument extends Document {
    email: string,
    username: string,
    password: string
}

const schema: mongoose.Schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            length: [8, 'Password must be at least 8 characters long']

        },
    },
    { timestamps: true }
)

export default mongoose.model<UserDocument>("User", schema)