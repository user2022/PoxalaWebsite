import Runes from "@/views/Runes";
import Home from "@/views/Home";
import VueRouter from "vue-router";
import Vue from 'vue'
import MyDecks from "../views/MyDecks";
import LocalDeckView from "../views/LocalDeckView";
import PublishedDeckView from "../views/PublishedDeckView";
import Browse from "../views/Browse";
import Abilities from "../views/Abilities";
import RuneMaker from "../views/RuneMaker";
import Discord from "@/views/Discord";
import AbilityHelper from "@/views/Ability Helper.vue";


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/runes', name: 'Runes', component: Runes},
    { path: '/my-decks', name: 'MyDecks', component: MyDecks},
    { path: '/my-decks/deck-view', name: 'LocalDeckView', component: LocalDeckView},
    { path: '/browse', name: 'Browse', component: Browse},
    { path: '/browse/:id', name: 'PublishedDeckView', component: PublishedDeckView},
    { path: '/abilities', name: 'Abilities', component: Abilities},
    { path: '/runemaker', name: 'RuneMaker', component: RuneMaker},
    { path: '/discord', name: 'Discord', component: Discord },
    { path: '/relocation', name: 'Relocation', component: AbilityHelper}
];

const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        linkExactActiveClass: 'is-exact-active',
        linkActiveClass: 'is-active',
        routes
});

Vue.use(VueRouter);

export default router