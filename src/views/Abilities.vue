<template>
    <MainLayout>
        <PageHeader>Abilities</PageHeader>

        <template v-if="!error">

            <div class="mt-8">
                <label for="search" class="block text-sm font-medium text-gray-700"></label>
                <div class="mt-1">
                    <input v-model="searchInput" @keyup.enter="sortAbilities" @change="sortAbilities" type="text" name="search" id="search" :class="this.$searchBox" placeholder="Search">
                </div>

                <div class="mr-4 mb-2 mt-3">
                    <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                            <input v-model="abilityDisplay" @change="sortAbilities" id="aDisplay" name="aDisplay" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded dark:focus:ring-zinc-900 dark:text-zinc-200 dark:border-zinc-900 dark:bg-zinc-600 dark:hover:bg-zinc-600 dark:focus:bg-zinc-700 dark:focus:border-zinc-900">
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="aDisplay" class="font-medium text-gray-700 dark:text-zinc-300">Show abilities that are not currently used</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col mt-5">
                <template v-if="!loading">
                    <template v-for="(ability, index) in abilities">
                        <div :key="index">
                            <AbilityDisplay :ability="ability" />
                        </div>

                    </template>
                </template>
                <template v-if="loading">
                    <p class="dark:text-zinc-300">Loading...</p>
                </template>

            </div>
        </template>
        <template v-else>
            <div class="mt-6">
                <p class="text-red-600">There was an error fetching the data... please try again</p>
            </div>
        </template>
    </MainLayout>
</template>

<script>
import AbilityDisplay from "../components/AbilityDisplay";

import {httpsCallable} from "firebase/functions";
import {functions} from "../firebaseInit";
import MainLayout from "@/components/LayoutComponents/MainLayout";
import PageHeader from "@/components/LayoutComponents/PageHeader";

export default {
    name: "Abilities",
    components: {PageHeader, MainLayout, AbilityDisplay},
    data: () => {
        return {
            abilities: [],
            baseAbilities: [],

            searchInput: '',
            abilityDisplay: false,

            usedAbilities: [],

            runes: [],

            loading: true,
            error: false
        }
    },
    methods: {
        async sortAbilities() {
            this.abilities = JSON.parse(JSON.stringify(this.baseAbilities))

            if (this.abilityDisplay == true) {
                this.loading = true

                const abilities = httpsCallable(functions, 'getNonAbilities')
                const {data} = await abilities();

                if (data.success) {
                    this.abilities = data.data
                }

                this.loading = false;
            }

            if (this.searchInput) {
                this.abilities = this.abilities.filter(ability => {
                    if (ability.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
                        return ability
                    }
                })
            }

            // const found = poxData.some(el => JSON.stringify(el) === JSON.stringify(rune))

        }
    },
    async mounted() {
        const abilities = httpsCallable(functions, 'getAbilities')
        const {data} = await abilities();

        if (data.success) {
            this.abilities = data.data
            this.baseAbilities = data.data
        } else {
            this.error = true
        }

        this.loading = false

    },
    metaInfo: {
        title: 'Poxala - Abilities'
    }

}
</script>

<style scoped>

</style>