<template>
    <MainLayout>
        <template v-if="curDeck">
            <div class="flex flex-row justify-between items-center">
                <PageHeader>{{curDeck.name}}</PageHeader>
            </div>
            <!-- Rune display sec -->
            <div class="flex flex-row mt-10">
                <div class="mb-4 mr-4">
                    <RuneDisplay />
                </div>
                <div>
                    <h1 class="text-3xl font-bold mb-2 text-gray-700 dark:text-zinc-200">Deck View</h1>
                    <DeckView :deck="curDeck.deck" />
                    <div class="mt-4">
                        <div class="flex flex-row justify-around">
                            <FactionDeckData :deck="curDeck.deck" />
                            <TypeDeckData :deck="curDeck.deck" />
                        </div>


                        <hr class="mb-2 mt-2 dark:border-zinc-900"/>
                        <template v-if="curDeck.published">
                            <div class="mt-4 mb-2 flex flex-row items-center cursor-default">
                                <i class="pi pi-check-circle text-green-500 mr-2"></i><p class="text-green-500 text-xs dark:text-zinc-300"> This deck has been published</p>
                            </div>
                        </template>
                        <template v-else>
                            <p class="text-xs text-gray-600 dark:text-zinc-300">This deck is not currently published and can only be seen by you. To publish your deck press the button below.</p>
                            <button v-if="!loading" @click="publishDeck" class="pt-2 pb-2 pl-3 pr-3 rounded-md bg-green-600 hover:bg-green-700 text-green-50 mt-2">Publish</button>
                            <button v-else class="pt-2 pb-2 pl-3 pr-3 rounded-md bg-green-600 hover:bg-green-700 text-green-50 mt-2">
                                <svg class="animate-spin h-5 w-5 mr-3 text-white inline" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Processing</span>
                            </button>
                            <p class="text-xs text-red-600 mt-1">{{errorMsg}}</p>

                        </template>
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
import RuneDisplay from "../components/RuneDisplay";
import DeckView from "../components/DeckView";
import FactionDeckData from "../components/FactionDeckData";

import {functions} from "../firebaseInit";
import {httpsCallable} from "firebase/functions"
import TypeDeckData from "../components/TypeDeckData";
import MainLayout from "@/components/LayoutComponents/MainLayout";
import PageHeader from "@/components/LayoutComponents/PageHeader";


export default {
    name: "LocalDeckView",
    components: {PageHeader, MainLayout, TypeDeckData, FactionDeckData, DeckView, RuneDisplay},
    data() {
        return {
            curDeck: null,
            deckIndex: null,

            loading: false,
            errorMsg: ''
        }
    },
    methods: {
        async publishDeck() {
           try {
               this.loading = true;

               if (this.curDeck) {

                   const test = httpsCallable(functions, 'submitData');
                   const response = await test(this.curDeck)

                   if (response.data.success) {
                       // SUCCESS
                       let thisDeckIndex = window.localStorage.getItem('curDeck') ? JSON.parse(window.localStorage.getItem('curDeck')) : null
                       let allDecks = window.localStorage.getItem('decks') ? JSON.parse(window.localStorage.getItem('decks')) : null
                       allDecks[thisDeckIndex].published = true;

                       localStorage.setItem('decks', JSON.stringify(allDecks))

                       await this.$router.push(`/browse/${response.data.id}`)


                   } else {
                       this.errorMsg = response.data.message
                   }

                   this.loading = false
               }

           } catch(err) {
               console.log(err)
               this.errorMsg = 'There was an error processing this request'
           }
        },
    },
    mounted() {
        this.deckIndex = window.localStorage.getItem('curDeck') ? JSON.parse(window.localStorage.getItem('curDeck')) : null
        this.curDeck = window.localStorage.getItem('decks') ? JSON.parse(window.localStorage.getItem('decks'))[this.deckIndex] : null
        this.$store.dispatch('resetSelectedRune')
        // const test = this.curDeck.deck.map(card => {
        //     return {
        //         id: card.id,
        //         type: card.type
        //     }
        // })
        // console.log(test)
    },
    metaInfo: {
        title: 'Poxala - My Deck'
    }
}
</script>

<style scoped>

</style>