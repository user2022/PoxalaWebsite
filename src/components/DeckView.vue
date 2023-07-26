<template>
    <div>
        <div class="shadow-md rounded-md p-4 mr-20 bg-white dark:bg-zinc-700">
            <div class="flex flex-row sm:flex-wrap md:flex-wrap lg:flex-nowrap flex-wrap">
                <template v-for="(rune, index) in deck" >
                    <div v-if="index < 15" :key="index" class="my-tooltip-cont">
                        <div @click="$store.dispatch('setSelectedRune', {rune: rune, type: rune.type})" :id="`tip${rune.hash}${rune.id}`" :class="`cursor-pointer w-16 bg-gray-100 border-gray-200 rounded-md mr-1 ml-1 mb-2 overflow-hidden ${!rune && 'border' || rune.type == 'champ' && 'bg-gray-900 border-3 border-red-700' || rune.type == 'spell' && 'bg-blue-600 border-3 border-blue-600' || rune.type == 'relic' && 'bg-green-600 border-3 border-green-600' || rune.type == 'equip' && 'bg-purple-700 border-3 border-purple-700'}`" style="height: 78px">
                            <RuneSmallerDisplay :rune="rune" />
                        </div>
                        <div class="my-tooltip">
                            <p class="text-sm text-white">Name: <span :class="`font-bold ${rune.rarity == 'UNCOMMON' && 'text-red-600' || rune.rarity == 'EXOTIC' && 'text-purple-400' || rune.rarity == 'COMMON' && 'text-yellow-500' || rune.rarity == 'LEGENDARY' && 'text-green-400' || rune.rarity == 'RARE' && 'text-blue-400' || rune.rarity == 'LIMITED' && 'text-gray-300'}`">{{rune.name}}</span></p>
                            <p class="text-sm text-white">Nora Cost: <span class="text-blue-300 font-bold">{{rune.noraCost}}</span></p>
                        </div>
                    </div>
                </template>
            </div>
            <div class="flex flex-row sm:flex-wrap md:flex-wrap lg:flex-nowrap flex-wrap">
                <template v-for="(rune, index) in deck" >
                    <div v-if="index > 14" :key="index" class="my-tooltip-cont">
                        <div @click="$store.dispatch('setSelectedRune', {rune: rune, type: rune.type})" :id="`tip${rune.hash}${rune.id}`" :class="`cursor-pointer w-16 bg-gray-100 sm:mb-2 border-gray-200 rounded-md mr-1 ml-1 overflow-hidden ${!rune && 'border' || rune.type == 'champ' && 'bg-gray-900 border-3 border-red-700' || rune.type == 'spell' && 'bg-blue-600 border-3 border-blue-600' || rune.type == 'relic' && 'bg-green-600 border-3 border-green-600' || rune.type == 'equip' && 'bg-purple-700 border-3 border-purple-700'}`" style="height: 78px">
                            <RuneSmallerDisplay :rune="rune" />
                        </div>
                        <div class="my-tooltip">
                            <p class="text-sm text-white">Name: <span :class="`font-bold ${rune.rarity == 'UNCOMMON' && 'text-red-600' || rune.rarity == 'EXOTIC' && 'text-purple-400' || rune.rarity == 'COMMON' && 'text-yellow-500' || rune.rarity == 'LEGENDARY' && 'text-green-400' || rune.rarity == 'RARE' && 'text-blue-400' || rune.rarity == 'LIMITED' && 'text-gray-300'}`">{{rune.name}}</span></p>
                            <p class="text-sm text-white">Nora Cost: <span class="text-blue-300 font-bold">{{rune.noraCost}}</span></p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import RuneSmallerDisplay from "./RuneSmallerDisplay";
export default {
    name: "DeckView",
    components: {RuneSmallerDisplay},
    props: ['deck']
}
</script>

<style scoped>
.my-tooltip-cont {
    position: relative;
}

.my-tooltip-cont:hover .my-tooltip {
    visibility: visible;
    opacity: 1;
}

.my-tooltip {
    position: absolute;
    padding: 6px 10px;
    background-color: rgba(24, 24, 24, 0.88);
    visibility: hidden;
    width: auto;
    min-width: 150px;
    max-width: 210px;
    border-radius: 6px;
    z-index: 10;
    bottom: 105%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
}

.my-tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(24, 24, 24, 0.88) transparent transparent transparent;
}

</style>