<template>
    <div class="p-4 border rounded-lg hover:cursor-pointer hover:scale-105">
        <div class="flex items-center justify-between">
            <h1 class="uppercase text-xl">{{ props.name }}</h1>
            <div>
                <h6>Prezzo</h6>
                <h3>{{ props.price }}</h3>
            </div>
        </div>
        
        <div class="my-6">
            <img src="https://picsum.photos/500/300" class="cover" alt="">
        </div>
        <div class="grid grid-cols-2 gap-1">
            <div class="border pl-2 py-1 bg-gray-200" v-for="tag in tags">
                <h4 class="text-sm capitalize">{{ tag.title }}</h4>
                <h3 class="text-md">{{tag.value || 'Non Specificato' }}</h3>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
    import dayjs from 'dayjs';

    const props = defineProps({
        mileage: Number,
        name: String,
        model: String,
        position: String,
        created: String,
        price: Number
    })

    
    const dt = dayjs(props.created).format("DD/MM/YYYY");

    const tags = ref( [
        {
            value: props.model,
            title: 'modello'
        },
        {
            value: props.position,
            title: 'posizione'
        },
        {
            value: dt,
            title: 'postato il'
        },
        {
            value: props.mileage,
            title: 'kilometri'
        },
    ])
</script>

<style scoped>

</style>