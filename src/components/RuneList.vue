<template>
    <div>
        <h1 class="text-3xl font-bold mb-2 text-gray-700 dark:text-zinc-200">{{header}}</h1>

        <div class="flex flex-row justify-start flex-wrap" v-if="runes.length > 0">
            <template v-for="(rune, index) in runes.slice($store.state.curPage * perPage, ($store.state.curPage * perPage) + perPage)">
                <div :key="index" class="m-1">
                    <RuneSmall :rune="rune" :type="type"/>
                </div>
            </template>
        </div>
        <div class="mt-12 ml-12" v-else>
            <h1 class="text-2xl text-red-700 font-bold text-center">No runes match your search</h1>
        </div>
        <!-- Pagination -->
        <template v-if="runes.length > perPage">
            <div class="px-4 py-3 flex items-center justify-between border-b border-gray-200 sm:px-6 dark:border-zinc-900">
                <div class="flex-1 flex justify-between sm:hidden">
                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Previous
                    </a>
                    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Next
                    </a>
                </div>
                <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm text-gray-700 dark:text-zinc-200">
                            Showing
                            <span class="font-medium">{{$store.state.curPage * perPage}}</span>
                            to
                            <span class="font-medium">{{($store.state.curPage * perPage) + perPage}}</span>
                            of
                            <span class="font-medium">{{runes.length}}</span>
                            results
                        </p>
                    </div>
                    <div>
                        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <a @click="toStart" class="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-zinc-700 dark:text-zinc-200 dark:border-zinc-900">
                                <span class="sr-only">Previous</span>
                                <!-- Heroicon name: solid/chevron-left -->
                                <i class="pi pi-angle-double-left pl-1 pr-1" style="font-size: 1rem"></i>
                            </a>
                            <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                            <a @click="changePage(-3)" v-if="$store.state.curPage - 3 >(0 - 1)" class="cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 dark:border-zinc-900">
                                {{$store.state.curPage-2}}
                            </a>
                            <a @click="changePage(-2)" v-if="$store.state.curPage - 2 > (0 - 1)" class="cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 dark:border-zinc-900">
                                {{$store.state.curPage-1}}
                            </a>
                            <a @click="changePage(-1)" v-if="$store.state.curPage - 1 > (0 - 1)" class=" cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 dark:border-zinc-900">
                                {{$store.state.curPage}} <!-- $store.state.curPage-1 -->
                            </a>
                            <span class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-red-500/25 dark:border-red-500 dark:text-white">
                            {{$store.state.curPage+1}}
                         </span>
                            <a @click="changePage(1)" v-if="$store.state.curPage + 1 < runes.length / perPage" class="cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 dark:border-zinc-900">
                                {{$store.state.curPage+2}}
                            </a>
                            <a @click="changePage(2)" v-if="$store.state.curPage + 2 < runes.length / perPage" class="cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 dark:border-zinc-900">
                                {{$store.state.curPage+3}}
                            </a>
                            <a @click="changePage(3)" v-if="$store.state.curPage + 3 < runes.length / perPage" class="cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 dark:border-zinc-900">
                                {{$store.state.curPage+4}}
                            </a>
                            <a @click="toEnd" class="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-zinc-700 dark:text-zinc-200 dark:border-zinc-900">
                                <span class="sr-only">Next</span>
                                <!-- Heroicon name: solid/chevron-right -->
                                <i class="pi pi-angle-double-right pl-1 pr-1" style="font-size: 1rem"></i>

                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </template>

    </div>
</template>

<script>
import RuneSmall from "./RuneSmall";

export default {
    name: "RuneList",
    components: {RuneSmall},
    props: ['runes', 'header', 'type'],
    data() {
        return {
            perPage: 70,
            curPage: 0
        }
    },
    methods: {
        changePage(num) {
            this.$store.dispatch('changePage', this.$store.state.curPage + num)
        },
        toEnd() {
            this.$store.dispatch('changePage', Math.floor(this.runes.length / this.perPage))
        },
        toStart() {
            this.$store.dispatch('changePage', 0)
        },
    },
    destroyed() {
        this.$store.dispatch('changePage', 0)
    },
    created() {
        if (this.$store.state.curPage > Math.floor(this.runes.length / this.perPage)) {
            this.$store.dispatch('changePage', 0)
        }
    },
}
</script>

<style scoped>

</style>