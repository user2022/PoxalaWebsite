<template>
    <MainLayout>
        <PageHeader>My Decks</PageHeader>
        <div class="mt-10">
            <template v-if="decks && typeof decks == 'object'">
                <template v-for="(deck, index) in decks">
                    <div :key="index" class="mb-3" @click="navigateDeck(index)" >
                        <MyDeckBoxList :deck="deck" />
                    </div>
                </template>
            </template>
            <template v-else>
                <p>You have not yet created any decks! Head over to the <router-link to="/runes" class="text-blue-500 cursor-pointer">deck builder</router-link> page to begin creating decks.</p>
            </template>
        </div>
    </MainLayout>
</template>

<script>
import MyDeckBoxList from "../components/MyDeckBoxList";
import MainLayout from "@/components/LayoutComponents/MainLayout";
import PageHeader from "@/components/LayoutComponents/PageHeader";
export default {
    name: "MyDecks",
    components: {PageHeader, MainLayout, MyDeckBoxList},
    data() {
        return {
            decks: []
        }
    },
    methods: {
        async navigateDeck(index) {
            await window.localStorage.setItem('curDeck', index);
            this.$router.push('/my-decks/deck-view');
        }
    },
    mounted() {
        this.decks = window.localStorage.getItem('decks') ? JSON.parse(window.localStorage.getItem('decks')) : []
    },
    metaInfo: {
        title: 'Poxala - My Decks'
    }
}
</script>

<style scoped>

</style>