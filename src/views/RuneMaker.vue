<template>
    <MainLayout>
        <PageHeader>Rune Maker (Not Complete)</PageHeader>
        <div class="mt-8">
            <h1 class="text-lg">Select a Preset Rune</h1>
            <label for="type" class="block text-sm font-medium text-gray-700">
                Select a Rune
            </label>
            <select
                id="type"
                name="type"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                v-model="rune"
            >
                <template v-for="(champ, index) in runes.champs">
                    <option :value="champ" :key="index">{{champ.name}}</option>
                </template>
            </select>

        </div>

        <div class="form-sec mt-8">
            <h1 class="text-lg">Front Cover Information</h1>
            <div class="form">
                <label for="search" class="block text-sm font-medium text-gray-700"></label>
                <div class="mt-1">
                    <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="rune.name">
                </div>
            </div>

        </div>
        <div class="bg-gray-200 border border-gray-300 rounded-lg mt-8 h-96">
            <div class="mt-8 flex flex-row">
                <div class="front-container relative">
                    <div class="absolute w-72 h-80 bg-gray-900 inset-6"></div>
                    <RuneFront :rune="rune" />
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script>
import RuneFront from "../components/RuneFront";
import {httpsCallable} from "firebase/functions";
import {functions} from "../firebaseInit";
import MainLayout from "@/components/LayoutComponents/MainLayout";
import PageHeader from "@/components/LayoutComponents/PageHeader";
export default {
    name: "RuneMaker",
    components: {PageHeader, MainLayout, RuneFront},
    data() {
        return {
            rune: {
                name: 'Placeholder',
                damage: 0,
                defense: 0,
                noraCost: 0,
                speed: 0,
                maxRng: 0,
                minRng: 0,
                hitPoints: 0,
                factions: ['Forsaken Wastes'],
                rarity: 'COMMON',
                hash: ''
            },

            runes: [],
            runeBase: [],
            error: false,
            loading: true
        }
    },
    async mounted() {
        this.$store.dispatch('resetSelectedRune')

        const runes = httpsCallable(functions, 'getRunes')
        const {data} = await runes().catch(err => {
            console.log(err)
        });

        this.loading = false;

        if (data.success) {
            this.runes = data.data
            this.runeBase = data.data
        } else {
            this.error = true
        }

        console.log(this.runes.champs)
    },
    metaInfo: {
        title: 'Poxala - Runes'
    }
}
</script>

<style scoped>

</style>