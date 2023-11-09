import { defineStore } from 'pinia'
import { ICar } from '~/types'

export const useListingsStore = defineStore('listings', {
    state: () => ({
        cars: [] as ICar[]
    }),
    actions: {
        async getAllCars() {
            const { data, error } = await useFetch<ICar[]>('/api/cars/')

            if (error.value) {
                // Handle error (for example, you could set an error state in your store)
                console.error('Failed to fetch cars:', error.value)
                return
            }

            if (data.value) {
                // Assign the data to `this.cars`
                this.cars = data.value
            }
        },
        async addCar(data: object) {
            try {
                const car = await $fetch('/api/cars/create', {
                    method: 'POST',
                    body: data
                })
                return car
            } catch (e) {
                throw e
            }
        }
    }
})
