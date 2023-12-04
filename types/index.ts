export interface IUser extends Document {
    _id?: string,
    email: string,
    username: string,
    password: string
}

export interface ICar {
    _id?: string;
    name: string,
    year: number,
    model: string,
    vin: string,
    seller: IUser,
    images?: string[],
    mileage: object,
    autopilot: string,
    position: string,
    color: string,
    trim: string,
    condition: string,
    price: object,
    description?: string
}

export type FormErrors = {
    vin: string | null,
    year: string | null,
    model: string | null,
    color: string | null,
    condition: string | null,
    price: string | null,
    mileage: string | null,
    trim: string | null,
    position: string | null,
}
