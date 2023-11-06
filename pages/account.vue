<template>
    <MainLayout>
        <div class="text-center">
            <h1>Ben tornato {{ userStore.user.username }}</h1>
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


</script>

<style scoped>

</style>