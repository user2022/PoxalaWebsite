<template>
    <MainLayout>
        <template v-if="deck && !loading">
            <div class="flex flex-row justify-between items-center">
                <div>
                    <PageHeader>{{deck.name}}</PageHeader>
                    <p class="text-gray-700 text-sm mt-3 dark:text-white">Created by <span class="font-bold">{{deck.username}}</span></p>
                </div>
                <div class="flex flex-col justify-center">
                    <i class="pi pi-eye text-gray-700 mx-auto dark:text-zinc-200" style="font-size: 1.5rem"></i>
                    <p class="text-center text-gray-600 text-xs dark:text-zinc-300">{{deck.views}} views</p>
                </div>
            </div>
            <!-- Rune display sec -->
            <div class="flex flex-row mt-10 flex-wrap">
                <div class="mb-4 mr-4">
                    <RuneDisplay />
                </div>
                <div>
                    <h1 class="text-3xl font-bold mb-2 text-gray-700 dark:text-zinc-200">Deck View</h1>
                    <DeckView :deck="deck.deck" />
                    <div class="mt-4 flex flex-row justify-around">
                        <FactionDeckData :deck="deck.deck" />
                        <TypeDeckData :deck="deck.deck" />
                    </div>
                    <hr class="mb-2 mt-2 dark:bg-zinc-900 dark:border-zinc-900"/>
                </div>
            </div>
        </template>
        <template v-else-if="loading">
            <div class="animate-pulse">
                <div class="flex flex-row justify-between items-center">
                    <div>
                        <div class="h-8 bg-gray-400 rounded w-60"></div>
                        <div class="h-4 bg-gray-400 rounded w-32 mt-4"></div>
                    </div>
                    <div class="flex flex-col justify-center">
                        <div class="h-8 w-8 rounded-full bg-gray-400"></div>
                    </div>
                </div>

                <div class="flex flex-row mt-10">
                    <div class="mb-4 mr-4">
<!--                        <div class="bg-gray-400 mt-3 rounded w-96" style="height: 500px"></div>-->
                        <RuneDisplay />
                    </div>
                    <div>
                        <div class="h-7 bg-gray-400 mt-3 rounded w-52"></div>
                        <div class="shadow-md rounded-md p-4 mr-20 bg-white mt-3 flex flex-row flex-wrap dark:bg-zinc-700" style="maxWidth: 1112px; width: 1112px">
                            <template v-for="(skel, index) in skeleton">
                                <div :key="index" class="w-16 bg-gray-400 rounded-md mr-1 ml-1 mb-2 dark:bg-zinc-400" style="height: 86px"></div>
                            </template>

                        </div>
                        <div class="mt-4 flex justify-around">
                            <div class="h-7 bg-gray-400 rounded w-32 mt-4"></div>
                            <div class="h-7 bg-gray-400 rounded w-32 mt-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </template>


        <template v-else>
            <p class="text-red-600 text-sm">There was an error collecting the data for your deck</p>
        </template>
    </MainLayout>
</template>

<script>
import DeckView from "../components/DeckView";
import RuneDisplay from "../components/RuneDisplay";
import FactionDeckData from "../components/FactionDeckData";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import {db} from "../firebaseInit";
import TypeDeckData from "../components/TypeDeckData";
import MainLayout from "@/components/LayoutComponents/MainLayout";
import PageHeader from "@/components/LayoutComponents/PageHeader";

export default {
    name: "PublishedDeckView",
    components: {PageHeader, MainLayout, TypeDeckData, FactionDeckData, RuneDisplay, DeckView},
    data() {
        return {
            deck: false,
            loading: true,
            skeleton: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
    },
    async mounted() {
        this.$store.dispatch('resetSelectedRune')
        const docRef = doc(db, "decks", this.$route.params.id)
        const docSnap = await getDoc(docRef);

        this.deck = docSnap.data()

        // Update view count
        await updateDoc(docRef, {
            views: this.deck.views + 1
        });

        this.loading = false;
    },
    metaInfo: {
        title: 'Poxala - Browse Deck'
    }
}
</script>

<style scoped>

</style>