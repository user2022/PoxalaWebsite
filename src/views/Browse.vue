<template>
    <MainLayout>
        <PageHeader>Published Decks</PageHeader>
        <div class="mt-10">
            <div>
                <div>
                    <label for="search" class="block text-sm font-medium text-gray-700"></label>
                    <div class="mt-1">
                        <input v-model="searchInput" @keyup.enter="sortDecks" @change="sortDecks" type="text" name="search" id="search" :class="this.$searchBox" placeholder="Search by deck name or username">
                    </div>
                </div>

                <div class="flex flex-row mt-3">
                    <div class="mr-4">
                        <FormLabel text="Faction" For="faction" />
                        <select
                            id="faction"
                            name="faction"
                            :class="this.$selectBox"
                            default="none"
                            v-model="selectedFaction"
                            @change="sortDecks"
                        >
                            <option :value="null" name="none">None</option>
                            <option value="Forglar Swamp">Forglar Swamp</option>
                            <option value="Forsaken Wastes">Forsaken Wastes</option>
                            <option value="Ironfist Stronghold">Ironfist Stronghold</option>
                            <option value="Sundered Lands">Sundered Lands</option>
                            <option value="K'thir Forest">K'thir Forest</option>
                            <option value="Underdepths">Underdepths</option>
                            <option value="Savage Tundra">Savage Tundra</option>
                            <option value="Shattered Peaks">Shattered Peaks</option>

                        </select>
                    </div>
                </div>
            </div>
            <template v-if="decks && !loading">
            <div class="mt-10">
                <template v-if="decks.length > 0">
                    <template v-for="(deck, index) in decks">
                        <div :key="index" class="mb-3" @click="$router.push(`/browse/${deck.id}`)" >
                            <MyDeckBoxList :deck="deck" />
                        </div>
                    </template>
                </template>
                <template v-else>
                    <p class="text-red-600 text-sm">No decks match your search</p>
                </template>
            </div>
        </template>
            <template v-else-if="loading">
            <div class="mb-10"></div>
            <template v-for="(skel, index) in skeletons">
                <div :key="index" class="mb-2 border border-gray-200 bg-white shadow rounded-lg p-4 h-24 w-full dark:bg-zinc-700 dark:border-zinc-900">
                    <div class="animate-pulse flex space-x-4">
                        <div class="flex-1 space-y-2 py-1">
                            <div class="flex flex-row items-baseline">
                                <div class="h-8 bg-gray-400 rounded w-1/5"></div>
                                <div class="h-5 bg-gray-400 rounded w-1/6 ml-4"></div>
                            </div>
                            <div class="space-y-2">
                                <div class="h-4 bg-gray-400 rounded w-1/6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <!-- Fetching data -->
        </template>
            <template v-else>
            <p class="text-red-600 text-sm">Error</p>
            <!-- Error -->
        </template>
        </div>
    </MainLayout>
</template>

<script>
import {db} from "../firebaseInit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import MyDeckBoxList from "../components/MyDeckBoxList";
import MainLayout from "@/components/LayoutComponents/MainLayout";
import PageHeader from "@/components/LayoutComponents/PageHeader";
import FormLabel from "@/components/LayoutComponents/FormLabel";

export default {
    name: "Browse",
    components: {FormLabel, PageHeader, MainLayout, MyDeckBoxList},
    data() {
        return {
            decks: [],
            deckHolder: [],
            loading: true,
            skeletons: [0,0,0,0,0,0,0,0,0,0],

            // Form
            searchInput: '',
            viewsValue: null,
            selectedFaction: null
        }
    },
    methods: {
        sortDecks() {
            this.decks = JSON.parse(JSON.stringify(this.deckHolder))

            if (this.searchInput) {
                this.decks = this.decks.filter(deck => {
                    if (deck.name.toLowerCase().includes(this.searchInput.toLowerCase()) || deck.username.toLowerCase().includes(this.searchInput.toLowerCase())) {
                        return deck
                    }
                })
            }


            if (this.viewsValue) {
                this.decks = this.decks.sort((a, b) => {
                    a.views - b.views
                })
            }

            if (this.selectedFaction) {
                this.decks = this.decks.filter(deck => {
                    if (deck.facOne.includes(this.selectedFaction) || deck.facTwo?.includes(this.selectedFaction)) {
                        return deck
                    }
                })
            }
        }

    },
    async mounted() {
        const q = query(collection(db, "decks"), orderBy("views", "desc"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const obj = doc.data();
            const docId = {id: doc.id}
            const merge = {...obj, ...docId}
            this.decks.push(merge)
            this.deckHolder.push(merge)
        });

        this.loading = false;
    },
    metaInfo: {
        title: 'Poxala - Browse Decks'
    }
}
</script>

<style scoped>

</style>