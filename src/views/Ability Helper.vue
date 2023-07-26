<template>
    <MainLayout>
        <div class="flex flex-col justify-center items-center">
            <template v-for="(image, index) in images">
                <div :key="index" >

                    <h1 class="text-3xl font-bold tracking-wide text-gray-800 dark:text-red-600">{{image.name}}</h1>
                    <img :src="image.url" :alt="image.name" class="rounded-md mt-2 mb-2" style="max-width: 600px" />
                </div>
            </template>
            <p class="mt-6 text-amber-500">Credit to GabrielQ</p>
        </div>
    </MainLayout>
</template>

<script>
import MainLayout from "@/components/LayoutComponents/MainLayout.vue";

export default {
    name: "Ability Helper",
    components: {MainLayout},
    data() {
        return {
            images: [{name: 'Manic', url: 'https://cdn.discordapp.com/attachments/1003391812905476176/1018525744508452996/Manic.png'}, {name: 'Pounce/beset', url: 'https://cdn.discordapp.com/attachments/1003391812905476176/1018525745007579177/Pouncerelocate.png'}, {name: 'Knockback', url:'https://cdn.discordapp.com/attachments/1003391812905476176/1018525743946403840/KB.png'}]
        }
    }
}
</script>

<style scoped>

</style>