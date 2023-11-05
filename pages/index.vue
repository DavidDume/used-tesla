<template>
    <div>
        Bentornato {{ (data?.user as any).username }}
    </div>

    <button @click="handleLogout">LOGOUT</button>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: "auth"
    })
    
    const {data, signOut} = useAuth()

    const handleLogout = async() => {
        await signOut()
    }
</script>

<style scoped>

</style>