<template>
    <div>
        <h1 class="text-3xl font-bold mb-2 text-gray-700 dark:text-zinc-200">Rune Details</h1>
        <!-- Rune Display -->
        <div class="p-6 border border-gray-300 rounded-lg w-96 bg-white dark:bg-zinc-700 dark:border-zinc-900" style="height: 550px">
            <template v-if="!$store.state.selectedRune">
                <h2 class="text-gray-200 font-bold text-6xl text-center mt-20 dark:text-zinc-500">Select a Rune</h2>
            </template>
            <template v-else>
                <RuneFlip :rune="$store.state.selectedRune" :key="$store.state.selectedRune.name" />
            </template>
        </div>
    </div>
</template>

<script>
import RuneFlip from "@/components/RuneFlip";

export default {
    name: "RuneDisplay",
    components: { RuneFlip},
    mounted() {

    }
}
</script>

<style scoped>

</style>