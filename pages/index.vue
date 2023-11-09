<template>
    <MainLayout>
        <div>
            <Loading v-if="isLoading" />
            <div v-else class="md:mx-48 mx-4">
                <div  class="grid lg:grid-cols-4 gap-2">
                    <div v-for="car in listings.data" >
                        <RouterLink :to="`/listing/${car._id}`">
                            <Listing :mileage="car.mileage.value"
                            :name="car.name"
                            :model="car.model"
                            :position="car.position"
                            :created="car.createdAt"
                            :price="car.price.value"
                            >
                            
                            </Listing>
                        </RouterLink>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        

    </MainLayout>

</template>

<script setup lang="ts">
    import MainLayout from '~/layouts/MainLayout.vue';
    import Loading from '~/components/Loading.vue';
    //import {useListingsStore} from '~/stores/user'
    import { ICar } from '~/types'
    import Listing from '~/components/Listing.vue';
    /* definePageMeta({
        middleware: "auth"
    }) */
    
    let isLoading = ref(true)

    let listings = ref()
    
    onBeforeMount(async() => {
        listings.value = await useFetch<ICar>('/api/cars/')  
    
        isLoading.value = false
    })
    
</script>

<style scoped>

</style>