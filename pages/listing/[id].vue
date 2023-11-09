<template>
   <MainLayout>
        <Details :listing="listing" />
   </MainLayout>
</template>

<script setup lang="ts">
    import Details from '~/components/Details.vue';
    import MainLayout from '../../layouts/MainLayout.vue';
    const route = useRoute()
    let listing = ref(await $fetch(`/api/cars/${route.params.id}`) as object)

</script>

<style scoped>

</style>