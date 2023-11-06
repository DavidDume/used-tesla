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
    images: string[],
    mileage: object,
    autopilot: string,
    location: string,
    price: object
}