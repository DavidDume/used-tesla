<template>
    <div class="md:mx-32 mx-2">
        <div class="md:flex">
            <div class="md:w-8/12">
                <div>
                    <img src="https://picsum.photos/500/300" alt="">
                    <!--HERE THE SMALL IMAGES PREVIEWS-->
                </div>
                <div class="my-6">
                    <h2>Descrizione</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At dolorum magnam delectus velit commodi unde, cumque consequatur expedita, optio ducimus assumenda, vel excepturi iure dignissimos qui nulla recusandae magni quaerat.</p>
                </div>
            </div>
            <div class="md:w-4/12">
                <ul>
                    <li v-for="tag in tags" class="border p-2 mb-2 md:ml-2">
                        <h3 class="uppercase text-sm">{{tag.title}}</h3>
                        <h2 class="text-lg">{{ tag.value || 'Non specificato'}}</h2>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import dayjs from 'dayjs';
    const props = defineProps({
        listing: Object
    })
    const dt = dayjs(props.listing?.createdAt).format("DD/MM/YYYY");
    const tags = ref( [
        {
            value: props.listing?.model,
            title: 'modello'
        },
        {
            value: props.listing?.position,
            title: 'posizione'
        },
        {
            value: dt,
            title: 'postato il'
        },
        {
            value: props.listing?.mileage.value,
            title: 'kilometri'
        },
        {
            value: props.listing?.price.value,
            title: 'prezzo'
        },
        {
            value: props.listing?.vin,
            title: 'vin #'
        },
        {
            value: props.listing?.year,
            title: 'anno'
        },
    ])

</script>

<style scoped>

</style>