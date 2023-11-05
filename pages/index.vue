<template>
    <MainLayout>
        <div>
            <h1 v-if="listings" v-for="car in listings.data">{{ car.name }}</h1>
        </div>
    </MainLayout>

</template>

<script setup lang="ts">
    import MainLayout from '~/layouts/MainLayout.vue';

    /* definePageMeta({
        middleware: "auth"
    }) */
    
    let listings = ref()

    onBeforeMount(async() => {
        listings.value = await useFetch('/api/cars/')
        console.log(listings.value.data);
        
    })
    
</script>

<style scoped>

</style>