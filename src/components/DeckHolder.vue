<template>
    <div class="shadow-md rounded-md p-2 fixed z-40 bottom-5 left-2/4 bg-zinc-100/50 dark:bg-zinc-600/50" style="width: 976px; height: auto;transform: translateX(-50%);">
        <div class="flex flex-row">
            <div>
                <div class="flex flex-row md:flex-nowrap sm:flex-wrap">
                    <template v-for="(rune, index) in $store.state.currentDeck" >
                        <DeckHolderRunesShow :key="index" :index="index" :rune="rune" :up-to="15" :greater="false" />
                    </template>
                </div>
                <div class="flex flex-row md:flex-nowrap sm:flex-wrap">
                    <template v-for="(rune, index) in $store.state.currentDeck" >
                        <DeckHolderRunesShow :key="index" :index="index" :rune="rune" :up-to="14" :greater="true" />
                    </template>
                </div>
            </div>
        </div>
        <div class="mt-1 flex flex-row justify-between">
            <div class="flex flex-row items-center">
                <div class="mr-4">
                    <label for="selectedDeck" class="block text-sm font-medium text-gray-700"></label>
                    <select v-model="selectedDeck" @change="$store.dispatch('changeSelectedDeck', selectedDeck)" id="selectedDeck" name="selectedDeck" :class="this.$selectBox">
                        <option name="none" :value="null">None</option>
                        <template v-for="(deck, index) in curDecks">
                            <option :key="index" :value="deck.deck">{{deck.name}}</option>
                        </template>
                    </select>
                </div>

                <button class="pl-2.5 pr-2.5 pt-1 pb-1 bg-green-600 text-white rounded-md mr-2 border border-green-700 dark:bg-red-500/25 dark:hover:bg-red-500/50 dark:border-red-500 dark:text-white" @click="saveDeck">Save</button>
                <button class="pl-2.5 pr-2.5 pt-1 pb-1 bg-indigo-600 text-white rounded-md mr-2 border border-indigo-700 dark:bg-violet-900/40 dark:border-violet-500 dark:hover:bg-violet-900/70" @click="$store.dispatch('resetDeck')">Reset</button>
                <button class="pl-2.5 pr-2.5 pt-1 pb-1 bg-gray-600 text-white rounded-md mr-2" @click="$store.dispatch('hideDeck', true)">Hide</button>

            </div>
            <DeckHolderFactionCount />
        </div>



    </div>
</template>

<script>
import DeckHolderFactionCount from "./DeckHolderFactionCount";
import DeckHolderRunesShow from "@/components/DeckHolderRunesShow";
export default {
    name: "DeckHolder",
    components: {DeckHolderRunesShow, DeckHolderFactionCount},
    data: () => {
        return {
            curDecks: [],
            selectedDeck: null
        }
    },
    methods: {
        saveDeck() {
            let isDeckFull = 1;

            this.$store.state.currentDeck.forEach(slot => {
                if (!slot) {
                    isDeckFull = 0;
                    this.$store.dispatch('setErr', {value: true, msg: 'Your deck is incomplete and cannot be saved. Only completed decks can be saved.'})
                    return;
                }
            })

            if (isDeckFull == 1) {
                this.$store.dispatch('setShowSave', true)
            }
        }
    },
    mounted() {
        this.curDecks = window.localStorage.getItem('decks') ? JSON.parse(window.localStorage.getItem('decks')) : []
    }
}
</script>

<style scoped>
    .del-btn {
        display: none;
    }

    .del-hover:hover .del-btn {
        display: block;
    }
</style>