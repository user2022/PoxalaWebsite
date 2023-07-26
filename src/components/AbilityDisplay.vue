<template>
    <div class="shadow-lg rounded-md p-3 mb-2.5 mt-2.5 border border-gray-200 bg-white dark:bg-zinc-700 dark:border-zinc-900">
        <div class="flex flex-row items-center">
            <div>
                <img class="rounded-md shadow-sm" style="width: 52px; height: 52px; min-width: 52px" :src="`https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${ability.icon_name}.gif`" :alt="ability.name">
            </div>
            <div class="ml-6 w-full relative">
                <p class="absolute right-0 top-0 text-xs font-bold" style="color: #27272a">ID {{ability.ability_id}}</p>
                <h2 class="font-bold dark:text-white">{{ability.name}} <span class="text-sm font-normal">{{ability.level ? ' - rank ' + ability.level : ''}}</span></h2>
                <p class="text-sm dark:text-zinc-200" v-html="ability.long_description"></p>
                <hr class="mt-2 mb-2 dark:border-zinc-900"/>
                <p class="text-xs"><span class="font-bold text-red-600">Cooldown:</span> <span class="dark:text-zinc-300">{{ability.cooldown}}</span></p>
                <p class="text-xs"><span class="font-bold text-green-600">AP Cost:</span> <span class="dark:text-zinc-300">{{ability.ap_cost}}</span></p>
                <p class="text-xs"><span class="font-bold text-blue-600">Nora Cost:</span> <span class="dark:text-zinc-300">{{ability.cost}}</span></p>

            </div>
        </div>
    </div>
</template>

<script>
// https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_eater_fire.gif

export default {
    props: ['ability'],
    name: "AbilityDisplay",
}
</script>

<style scoped>

</style>