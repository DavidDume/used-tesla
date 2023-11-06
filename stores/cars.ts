import { defineStore } from 'pinia'
import { ICar } from '~/types'

export const useListingsStore = defineStore('listings', {
    state: () => ({
        cars: {} as ICar
    }),
    actions: {
        async getAllCars() {
            this.cars = await useFetch<ICar>('/api/cars/')
        },
        async addCar(data: object) {
            try {
                await $fetch('/api/cars/create', {
                    method: 'POST',
                    body: data
                })
                return { message: 'Success' }
            } catch (e) {
                throw e
            }

        }
    }

})