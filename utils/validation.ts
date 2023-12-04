import { FormErrors } from "~/types";


const validateVin = (val: string) => {
    if (!val) {
        return 'VIN è obbligatorio'
    }
    if (val.length !== 17) {
        return 'VIN deve essere lungo 17 caratteri'
    }
    return null
}

const validateYear = (val: string) => {
    if (!val) return 'Anno è obbligatorio';
    if (val.length !== 4 || Number(val) < 2005) return 'Anno deve essere un numero valido dopo il 2005';
    return null;
};
const validateModel = (val: string) => val ? null : 'Valore non valido'
const validateColor = (val: string) => val ? null : 'Colore è obbligatorio'
const validateTrim = (val: string) => val ? null : 'Potenza è obbligatorio'
const validatePrice = (val: string) => val ? null : 'Prezzo è obbligatorio'
const validateCondition = (val: string) => val ? null : 'Condizione è obbligatorio'
const validateMileage = (val: string) => val ? null : 'Kilometri è obbligatorio'
const validatePosition = (val: string) => val ? null : 'La città è obbligatoria'

export const validateForm = (val: any): FormErrors => {

    return {
        vin: validateVin(val.vin),
        year: validateYear(val.year),
        model: validateModel(val.model),
        color: validateColor(val.color),
        trim: validateTrim(val.trim),
        price: validatePrice(val.price.value),
        condition: validateCondition(val.condition),
        position: validatePosition(val.position),
        mileage: validateMileage(val.mileage.value),
    }

};
