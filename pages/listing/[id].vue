<template>
   <MainLayout>
        {{ listing }}
   </MainLayout>
</template>

<script setup lang="ts">
    import MainLayout from '../../layouts/MainLayout.vue';
    const route = useRoute()
    let listing = ref()
    onBeforeMount(async () => {
        listing.value = await $fetch(`/api/cars/${route.params.id}`)
    })
</script>

<style scoped>

</style>