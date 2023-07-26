<template>
    <main>
        <nav class="bg-gray-800 dark:bg-zinc-900">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <button @click="showMobile" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <!--
                              Icon when menu is closed.

                              Heroicon name: outline/menu

                              Menu open: "hidden", Menu closed: "block"
                            -->
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <!--
                              Icon when menu is open.

                              Heroicon name: outline/x

                              Menu open: "block", Menu closed: "hidden"
                            -->
                            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex-shrink-0 flex items-center">
                            <router-link to="/">
                                <div class="flex flex-row items-center">
                                    <h1 class="cursor-pointer text-white font-bold text-3xl dark:text-red-600">Poxala</h1>
                                    <img style="width: 50px; height: auto; margin-bottom: -15px; margin-left: -10px" src="https://d2aao99y1mip6n.cloudfront.net/images/runes/idols/ej9Cj9Bf1Ae9Ae9AG2AJ8Jj9Aeevxoluxiwfiepf.gif" alt="cinderpede">
                                </div>
                            </router-link>
                        </div>
                        <div class="hidden sm:block sm:ml-6">
                            <div class="flex space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                              <router-link exact-active-class="is-active bg-gray-900 hover:bg-gray-900 text-white dark:bg-red-500 dark:bg-opacity-30 border dark:border-red-500 dark:text-white" to="/" class="border text-gray-300 border-gray-800 dark:border-zinc-900 dark:text-white hover:bg-gray-700 dark:hover:bg-red-500 dark:hover:border-red-500 dark:hover:bg-opacity-30 border-gray-900 dark:hover:border-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Home</router-link>
                              <NavItem text="Deck Builder" url="/runes" />
                              <NavItem text="My Decks" url="/my-decks" />
                              <NavItem text="Browse Decks" url="/browse" />
                              <NavItem text="Abilities" url="/abilities" />
                              <NavItem text="Rune Maker" url="/runemaker" />
                              <NavItem text="Discord xD" url="/discord" />
                                <NavItem text="Relocation" url="/relocation" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-center w-full">

                            <label for="toggleB" class="flex items-center cursor-pointer">
                                <!-- toggle -->
                                <div class="relative">
                                    <!-- input -->
                                    <input type="checkbox" id="toggleB" class="sr-only" :checked="this.$store.getters.getTheme === 'dark' ? true : false" @change="toggleTheme">
                                    <!-- line -->
                                    <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                                    <!-- dot -->
                                    <div class="dot absolute left-1 bottom-1 bg-white w-6 h-6 rounded-full transition"></div>
                                </div>
                                <!-- label -->
                                <div class="ml-3 text-zinc-200 font-medium text-sm">
                                    {{this.$store.getters.getTheme === 'dark' ? 'Dark' : 'Light'}} Mode
                                </div>
                            </label>

                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden" id="mobile-menu" v-if="show">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <router-link exact-active-class="is-active bg-gray-900 hover:bg-gray-900 text-white dark:bg-red-500 dark:bg-opacity-30 border dark:border-red-500 dark:text-white" to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Home</router-link>

                    <router-link active-class="is-active bg-gray-900 hover:bg-gray-900 text-white dark:bg-red-500 dark:bg-opacity-30 border dark:border-red-500 dark:text-white" to="/runes" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Deck Builder</router-link>

                    <router-link active-class="is-active bg-gray-900 hover:bg-gray-900 text-white dark:bg-red-500 dark:bg-opacity-30 border dark:border-red-500 dark:text-white" to="/my-decks" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">My Decks</router-link>

                    <router-link active-class="is-active bg-gray-900 hover:bg-gray-900 text-white dark:bg-red-500 dark:bg-opacity-30 border dark:border-red-500 dark:text-white" to="/browse" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Browse Decks</router-link>

                    <router-link active-class="is-active bg-gray-900 hover:bg-gray-900 text-white dark:bg-red-500 dark:bg-opacity-30 border dark:border-red-500 dark:text-white" to="/abilities" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Abilities</router-link>

                    <router-link active-class="is-active bg-gray-900 hover:bg-gray-900 text-white dark:bg-red-500 dark:bg-opacity-30 border dark:border-red-500 dark:text-white" to="/runemaker" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Rune Maker</router-link>

                  <router-link active-class="is-active bg-gray-900 hover:bg-gray-900 text-white" to="/discord" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Discord xD</router-link>

                    <router-link active-class="is-active bg-gray-900 hover:bg-gray-900 text-white" to="/relocation" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Relocation</router-link>

                </div>
            </div>
        </nav>

    </main>
</template>

<script>
    import NavItem from "@/components/LayoutComponents/NavItem";
    export default {
        name: "NavBar",
      components: {NavItem},
      data() {
            return {
                show: false
            }
        },
        methods: {
            showMobile() {
                this.show = !this.show
            },
            toggleTheme() {
                this.$store.dispatch("toggleTheme");
            }
        }
    }
</script>

<style scoped>
    .logo {
        font-family: Calibri, serif;
    }

    input:checked ~ .dot {
        transform: translateX(100%);
        background-color: #48bb78;
    }

    /* Toggle B */
    input:checked ~ .dot {
        transform: translateX(100%);
        background-color: #48bb78;
    }


</style>