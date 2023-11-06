<template>
    <MainLayout>
        <div class="pl-8">
            <h1 class="text-2xl">Inserisci informazioni</h1>
            <form @submit.prevent="handleFormSubmit">
                <div>
                    <label for="vin" class="block">VIN</label>
                    <input type="text" v-model="formData.vin" name="vin" id="vin" class="border rounded-lg">
                </div>
                <div class="flex items-center flex-wrap">
                    <div class="pr-2">
                        <label for="year" class="block">Anno</label>
                        <input type="text" v-model="formData.year"  id="year" name="year" class="border rounded-lg">
                    </div>
                    <div class="pr-2">
                        <label for="model" class="block">Modello</label>
                        <input type="text" v-model="formData.model" id="model" name="model" class="border rounded-lg">
                    </div>
                    <div class="pr-2">
                        <label for="name" class="block">Marca</label>
                        <input type="text" v-model="formData.name" id="name" name="name" class="border rounded-lg">
                    </div>
                    <div class="pr-2">
                        <label for="km" class="block">Kilometri</label>
                        <input type="text" v-model="formData.mileage.value"  id="km" name="km" class="border rounded-lg">
                    </div>
                    <div class="pr-2">
                        <label for="position" class="block">Posizione</label>
                        <input type="text" v-model="formData.position"  id="position" name="position" class="border rounded-lg">
                    </div>
                    <div class="pr-2">
                        <label for="price" class="block">Prezzo</label>
                        <input type="text" v-model="formData.price.value"  id="price" name="price" class="border rounded-lg">
                    </div>
                </div>
                <button type="submit" class="border p-2 rounded-lg my-2">Inserisci</button>
            </form>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
    import MainLayout from '~/layouts/MainLayout.vue';
    import {useUserStore} from '~/stores/user'

    import {useListingsStore} from '~/stores/cars'

    definePageMeta({
        middleware: "auth"
    })

    const userStore = useUserStore()
    const listingsStore = useListingsStore()

    const formData = ref({
        vin: '',
        name: '',
        year: '',
        model: '',
        mileage: {
            value: '',
            unit: 'KM'
        },
        seller: userStore.user._id,
        position: '',
        price: {
            value: '',
            unit: 'EUR'
        }
    })

    const handleFormSubmit = async () => {
        console.log('Hello');
        
        await listingsStore.addCar(formData.value)
        
    }
</script>

<style scoped>

</style>