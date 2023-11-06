<template>
    <MainLayout>
        <div class="text-center">
            <h1>Ben tornato {{ userStore.user.username }}</h1>
            <RouterLink to="/add-car" class="inline-block border rounded-lg p-2 mt-2">Vendi la tua tesla</RouterLink>
        </div>
        <div class="m-3">
            <h1>I tuoi annunci</h1>
            <div v-if="usersListings" v-for="(listing, i) in usersListings.data" :key="i">
                {{ listing.name }}
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
    import MainLayout from '~/layouts/MainLayout.vue';
    import {useUserStore} from '~/stores/user'

    definePageMeta({
        middleware: "auth"
    })

    const userStore = useUserStore()

    let usersListings = ref()
    onBeforeMount(async () => {
        usersListings.value = await useFetch(`/api/cars/findByUser/${userStore.user._id}`)
    })

    
</script>

<style scoped>

</style>