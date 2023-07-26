<template>
    <div>
        <div class="flex flex-row justify-center">
            <div v-if="common" class="rounded-md bg-yellow-300 text-gray-800 pl-2 pr-2 pt-0.5 pb-0.5 ml-1 mr-1">{{common}}</div>
            <div v-if="uncommon" class="rounded-md bg-red-500 text-gray-800 pl-2 pr-2 pt-0.5 pb-0.5 ml-1 mr-1">{{uncommon}}</div>
            <div v-if="rare" class="rounded-md bg-blue-400 text-gray-800 pl-2 pr-2 pt-0.5 pb-0.5 ml-1 mr-1">{{rare}}</div>
            <div v-if="exotic" class="rounded-md bg-purple-500 text-gray-800 pl-2 pr-2 pt-0.5 pb-0.5 ml-1 mr-1">{{exotic}}</div>
            <div v-if="legendary" class="rounded-md bg-green-500 text-gray-800 pl-2 pr-2 pt-0.5 pb-0.5 ml-1 mr-1">{{legendary}}</div>
            <div v-if="limited" class="rounded-md bg-gray-400 text-gray-800 pl-2 pr-2 pt-0.5 pb-0.5 ml-1 mr-1">{{limited}}</div>
        </div>
        <p class="text-center mt-1 text-sm uppercase dark:text-zinc-300">Rarity Count</p>
    </div>
</template>

<script>
export default {
    name: "TypeDeckData",
    props: ['deck'],
    data() {
        return {
            common: 0,
            uncommon: 0,
            rare: 0,
            exotic: 0,
            legendary: 0,
            limited: 0
        }
    },
    mounted() {
        this.deck.forEach(rune => {
            switch (rune.rarity) {
                case 'COMMON':
                    this.common = this.common + 1
                    break;
                case 'UNCOMMON':
                    this.uncommon = this.uncommon + 1
                    break;
                case 'RARE':
                    this.rare = this.rare + 1
                    break;
                case 'EXOTIC':
                    this.exotic = this.exotic + 1
                    break
                case 'LEGENDARY':
                    this.legendary = this.legendary + 1
                    break
                case 'LIMITED':
                    this.limited = this.limited + 1
                    break;
            }
        })


    }
}
</script>

<style scoped>

</style>