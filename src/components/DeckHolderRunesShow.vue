<template>
    <div v-if="greater ? index > upTo : index < upTo" class="relative del-hover">
        <div @click="$store.dispatch('deleteRune', index)"
             class="del-btn absolute cursor-pointer -top-0.5 -right-0.5 z-20 bg-red-700 border border-black pt-0.5 pb-0.5 pl-1 pr-1 overflow-visible text-xs rounded-full"
             v-if="rune">
            <i class="pi pi-times"></i>
        </div>
        <div :class="`w-14 bg-gray-100 border-gray-200 dark:bg-zinc-500 dark:border-zinc-900 rounded-md mr-1 ml-1 mb-2 overflow-hidden ${!rune && 'border' || rune.type == 'champ' && 'bg-gray-900 border-3 border-red-700 dark:border-red-700' || rune.type == 'spell' && 'bg-blue-400 border-3 border-blue-400 dark:border-blue-400' || rune.type == 'relic' && 'bg-green-300 border-3 border-green-300 dark:border-green-300' || rune.type == 'equip' && 'bg-purple-600 border-3 border-purple-600 dark:border-purple-600'}`" style="height: 70px">
            <template v-if="rune">
                <div class="cursor-pointer" @click="$store.dispatch('setSelectedRune', {rune: rune, type: rune.type})">
                    <RuneSmallerDisplay :rune="rune" />
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import RuneSmallerDisplay from "@/components/RuneSmallerDisplay";
export default {
    name: "DeckHolderRunesShow",
    components: {RuneSmallerDisplay},
    props: ['index', 'rune', 'upTo', 'greater']
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