<template>
    <div class="my-tooltip-cont relative plus-btn-parent">
        <div @click="addRune" class="plus-btn absolute cursor-pointer -top-0.5 -right-0.5 z-20 bg-green-600 border border-black pt-1 pb-1 pl-1.5 pr-1.5 overflow-visible text-xs rounded-full">
            <i class="pi pi-plus" style="margin-top: 2px; font-size: 14px"></i>
        </div>
        <img @click="selectRune" :id="`tip${rune.hash}${rune.id}`" :src="`https://d2aao99y1mip6n.cloudfront.net/images/runes/med/${rune.hash}.jpg`" style="width: 85px; min-height: 97px; background-color: #252525; " alt="" :class="`shadow-md cursor-pointer rounded-lg border-3 ${rune.rarity == 'UNCOMMON' && 'border-red-700' || rune.rarity == 'EXOTIC' && 'border-purple-700' || rune.rarity == 'COMMON' && 'border-yellow-500' || rune.rarity == 'LEGENDARY' && 'border-green-600' || rune.rarity == 'RARE' && 'border-blue-400' || rune.rarity == 'LIMITED' && 'border-gray-500'}`">
        <div class="my-tooltip">
            <p class="text-sm text-white">Name: <span :class="`font-bold ${rune.rarity == 'UNCOMMON' && 'text-red-600' || rune.rarity == 'EXOTIC' && 'text-purple-400' || rune.rarity == 'COMMON' && 'text-yellow-500' || rune.rarity == 'LEGENDARY' && 'text-green-400' || rune.rarity == 'RARE' && 'text-blue-400' || rune.rarity == 'LIMITED' && 'text-gray-300'}`">{{rune.name}}</span></p>
            <p class="text-sm text-white">Nora Cost: <span class="text-blue-300 font-bold">{{rune.noraCost}}</span></p>
        </div>
    </div>
</template>

<script>

export default {
    name: "RuneSmall",
    props: ['rune', 'type'],
    methods: {
        selectRune() {
            this.$store.dispatch('setSelectedRune', {rune: this.rune, type: this.type})
        },
        addRune() {
            this.rune.type = this.type;
            this.$store.dispatch('addRune', this.rune)
        }
    },

}
</script>

<style scoped>
    .small-img {
        width: 40px;
    }

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

    .plus-btn {
        display: none;
    }

    .plus-btn-parent:hover .plus-btn {
        display: block;
    }
</style>