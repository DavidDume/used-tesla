<template>
    <MainLayout>
        <Loading v-if="isLoading" />
        <div v-else>
            <h1 v-for="car in listings.data">{{ car.name }}</h1>
        </div>
    </MainLayout>

</template>

<script setup lang="ts">
    import MainLayout from '~/layouts/MainLayout.vue';
    import Loading from '~/components/Loading.vue';
    import { ICar } from '~/types'
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