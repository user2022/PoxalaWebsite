<template>
    <div class="pt-4 pb-4 pl-6 pr-6 border border-gray-200 bg-white shadow rounded-lg relative overflow-hidden cursor-pointer dark:bg-zinc-700 dark:border-zinc-900">
        <div class="flex flex-row items-center relative">
            <div>
                <h1 class="text-gray-800 dark:text-white"><span class="text-lg font-bold">{{deck.name}} </span> <span class="text-sm">({{deck.facOne}}{{deck.facTwo ? ', ' + deck.facTwo : ''}})</span></h1>
                <h3 class="mt-2 text-sm text-gray-700 dark:text-zinc-200">Created by <span class="font-bold">{{deck.username}}</span></h3>
            </div>
            <div class="flex justify-center ml-12">
               <FactionDeckData :deck="deck.deck" />
            </div>
            <div class="absolute right-0" v-if="deck.views || deck.views === 0">
                <div class="flex flex-col items-center justify-center">
                    <i class="pi pi-eye text-gray-700 mx-auto dark:text-zinc-200" style="font-size: 1.5rem"></i>
                    <p class="text-center text-gray-600 text-xs dark:text-zinc-200">{{deck.views}} views</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FactionDeckData from "./FactionDeckData";
export default {
    name: "MyDeckBoxList",
    components: {FactionDeckData},
    props: ['deck'],
    data() {
        return {
            fw: 0,
            sp: 0,
            sl: 0,
            kf: 0,
            ud: 0,
            is: 0,
            st: 0,
            fs: 0,

        }
    },
    mounted() {
        this.deck.deck.forEach(rune => {
            if (rune.factions.includes('Forsaken Wastes')) {
                this.fw = this.fw + 1
            } else if (rune.factions.includes('SunderedLands')) {
                this.sl = this.sl + 1
            } else if (rune.factions.includes('Ironfist Stronghold')) {
                this.is = this.is + 1
            } else if (rune.factions.includes('Underdepths')) {
                this.ud = this.ud + 1
            } else if (rune.factions.includes("K'thir Forest")) {
                this.kf = this.kf + 1
            } else if (rune.factions.includes('Forglar Swamp')) {
                this.fs = this.fs + 1
            } else if (rune.factions.includes('Savage Tundra')) {
                this.st = this.st + 1
            } else if (rune.factions.includes('Shattered Peaks')) {
                this.sp = this.sp + 1
            }
        })
    }
}
</script>

<style scoped>

</style>