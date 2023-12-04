<template>
    <MainLayout>
        <div class="mx-72">
            <h1 class="text-2xl">Inserisci informazioni</h1>
            
            <form @submit.prevent="handleFormSubmit">
                <div class="my-6">
                    <label for="vin" class="block">VIN #</label>
                    <input type="text" v-model="formData.vin" name="vin" id="vin" class="border rounded-lg w-4/12 py-1" :class="errors.vin ? 'border-red-500' : ''">
                    <span v-if="errors.vin" class="text-red-500 block">{{ errors.vin }}</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <div class="pr-2 py-4">
                        <label for="year" class="block">Anno</label>
                        <input type="text" v-model="formData.year"  id="year" name="year" class="border rounded-lg w-full py-1" :class="errors.year ? 'border-red-500' : ''">
                        <span v-if="errors.year" class="text-red-500 block">{{ errors.year }}</span>
                    </div>
                    <div class="pr-2 py-4">
                        <label for="model" class="block">Modello</label>
                        <select type="text" v-model="formData.model" id="model" name="model" class="border rounded-lg w-full py-1" :class="errors.model ? 'border-red-500' : ''">
                            <option disabled value="">Seleziona Modello</option>
                            <option :value="model" v-for="model in models">{{ model }}</option>
                        </select>
                        <span v-if="errors.model" class="text-red-500 block">{{ errors.model }}</span>
                    </div>
                    <div class="pr-2 py-4">
                        <label for="color" class="block">Colore</label>
                        <input type="text" v-model="formData.color" id="color" name="color" class="border rounded-lg w-full py-1" :class="errors.color ? 'border-red-500' : ''">
                        <span v-if="errors.color" class="text-red-500 block">{{ errors.color }}</span>
                    </div>
                    <div class="pr-2 py-4">
                        <label for="trim" class="block">Potenza</label>
                        <select type="text" v-model="formData.trim" id="trim" name="trim" class="border rounded-lg w-full py-1" :class="errors.trim ? 'border-red-500' : ''">
                            <option disabled value="">Seleziona Potenza</option>
                            <option :value="trim" v-for="trim in trims">{{ trim }}</option>
                        </select>
                        <span v-if="errors.trim" class="text-red-500 block">{{ errors.trim }}</span>
                    </div>
                    <div class="pr-2 py-4">
                        <label for="condition" class="block">Condizione</label>
                        <select type="text" v-model="formData.condition"  id="condition" name="condition" class="border rounded-lg w-full py-1" :class="errors.condition ? 'border-red-500' : ''">
                            <option disabled value="">Seleziona Condizione</option>
                            <option :value="condition" v-for="condition in conditions">{{ condition }}</option>
                        </select>
                        <span v-if="errors.condition" class="text-red-500 block">{{ errors.condition }}</span>
                    </div>
                </div>
                    

                <div class="grid grid-cols-1 md:grid-cols-3">
                    <div class="pr-2 py-4">
                        <label for="km" class="block">Kilometri</label>
                        <input type="text" v-model="formData.mileage.value"  id="km" name="km" class="border rounded-lg w-full py-1" :class="errors.mileage ? 'border-red-500' : ''">
                        <span v-if="errors.mileage" class="text-red-500 block">{{ errors.mileage }}</span>
                    </div>
                    <div class="pr-2 py-4">
                        <label for="position" class="block">Citta</label>
                        <input type="text" v-model="formData.position"  id="position" name="position" class="border rounded-lg w-full py-1" :class="errors.position ? 'border-red-500' : ''">
                        <span v-if="errors.position" class="text-red-500 block">{{ errors.position }}</span>
                    </div>
                    <div class="pr-2 py-4">
                        <label for="price" class="block">Prezzo</label>
                        <input type="text" v-model="formData.price.value"  id="price" name="price" class="border rounded-lg w-full py-1" :class="errors.price ? 'border-red-500' : ''">
                        <span v-if="errors.price" class="text-red-500 block">{{ errors.price }}</span>
                    </div>
                </div>
                <label for="description">Descrizione</label>
                <textarea class="border block w-full" v-model="formData.description" name="description" id="" rows="5"></textarea>   

                <button type="submit" class="border p-2 rounded-lg my-2">Inserisci</button>
            </form>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
    import MainLayout from '~/layouts/MainLayout.vue';
    import {useUserStore} from '~/stores/user'

    import {validateForm} from '~/utils/validation'
    import { FormErrors } from '~/types/index';

    import {useListingsStore} from '~/stores/cars'
    import { ICar } from '~/types';

    definePageMeta({
        middleware: "auth"
    })

    const models = ref(['Model 3', 'Model Y', 'Model X', 'Model S', 'Roadster', 'Roadster Sport'])
    const trims = ref(['40', '53kWh', '60', '60D', '70', '70D', '75', '75D', '85', '85D', '90', '90D', '100D', 'Long Range', 'Long Range (Raven)', 'Long Range AWD Performance', 'Long Range Performance (Raven)', 'Long Range Plus', 'Long Range RWD', 'Mid-Range', 'Plaid', 'P85', 'P85+', 'P85D', 'P85DL', 'P90', 'P90D', 'P90DL', 'P100D', 'P100DL', 'Performance', 'Standard Range', 'Standard Range (Raven)', 'Standard-Range-Plus'])
    const conditions = ref(['Eccellente', 'Molto Buona', 'Buona', 'Pessima'])

    const userStore = useUserStore()
    const listingsStore = useListingsStore()

    const formData = ref({
        vin: null,
        year: '',
        model: '',
        mileage: {
            value: '',
            unit: 'KM'
        },
        seller: userStore.user._id,
        position: '',
        condition: '',
        color: '',
        trim: '',
        description: '',
        price: {
            value: '',
            unit: 'EUR'
        }
    })

    const errors = ref<FormErrors>({
        vin: null,
        year: null,
        model: null,
        color: null,
        trim: null,
        price: null,
        condition: null,
        position: null,
        mileage: null,
    })
    
    const handleFormSubmit = async () => {
        errors.value = validateForm(formData.value);
        
        const isFormValid = !Object.values(errors.value).some(error => error !== null);

        if(isFormValid) {
            const newCar = await listingsStore.addCar(formData.value) as ICar
          
            navigateTo(`/listing/${newCar._id}`)
        }
        

    }
</script>

<style scoped>

</style>