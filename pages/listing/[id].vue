<template>
   <MainLayout>
        <Details :listing="listing" />
   </MainLayout>
</template>

<script setup lang="ts">
    import Details from '~/components/Details.vue';
    import MainLayout from '../../layouts/MainLayout.vue';
    const route = useRoute()
    let listing = ref()
    onBeforeMount(async () => {
        listing.value = await $fetch(`/api/cars/${route.params.id}`)
    })
</script>

<style scoped>

</style>