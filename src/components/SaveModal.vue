<template>
    <div>
        <div class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <ModalMain>
                    <div class="sm:flex sm:items-start">
                        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10 dark:bg-red-600/40">

                            <i class="pi pi-save h-6 w-6 text-green-600 text-lg -mt-1 ml-1.5 dark:text-red-400"></i>
                        </div>
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <ModalHeader>
                                Save Deck
                            </ModalHeader>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500 dark:text-zinc-200">
                                    Fill out the form then press save to save your deck
                                </p>
                            </div>
                            <div class="mt-4">
                                <FormLabel text="Name" For="name" />
                                <div class="mt-1">
                                    <input maxlength="30" minlength="3" v-model="name" type="text" name="name" id="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:focus:border-zinc-500 dark:focus:ring-zinc-500 dark:bg-zinc-600 dark:border-zinc-900 dark:text-zinc-200 dark:placeholder-zinc-400" placeholder="Deck name">
                                </div>
                            </div>
                            <div class="mt-2">
                                <FormLabel text="Faction One" For="facOne" />
                                <select v-model="facOne" id="facOne" name="facOne" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:focus:border-zinc-500 dark:focus:ring-zinc-500 dark:bg-zinc-600 dark:border-zinc-900 dark:text-zinc-200 dark:placeholder-zinc-400">
                                    <option value="Forsaken Wastes">Forsaken Wastes</option>
                                    <option value="Sundered Lands">Sundered Lands</option>
                                    <option value="Ironfist Stronghold">Ironfist Stronghold</option>
                                    <option value="Underdepths">Underdepths</option>
                                    <option value="K'thir Forest">K'thir Forest</option>
                                    <option value="Forglar Swamp">Forglar Swamp</option>
                                    <option value="Savage Tundra">Savage Tundra</option>
                                    <option value="Shattered Peaks">Shattered Peaks</option>
                                </select>
                            </div>
                            <div class="mt-2">
                                <FormLabel For="facTwo" text="Faction Two" />
                                <select v-model="facTwo" id="facTwe" name="facTwo" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:focus:border-zinc-500 dark:focus:ring-zinc-500 dark:bg-zinc-600 dark:border-zinc-900 dark:text-zinc-200 dark:placeholder-zinc-400">
                                    <option :value="null">None</option>
                                    <option value="Forsaken Wastes">Forsaken Wastes</option>
                                    <option value="Sundered Lands">Sundered Lands</option>
                                    <option value="Ironfist Stronghold">Ironfist Stronghold</option>
                                    <option value="Underdepths">Underdepths</option>
                                    <option value="K'thir Forest">K'thir Forest</option>
                                    <option value="Forglar Swampo">Forglar Swamp</option>
                                    <option value="Savage Tundra">Savage Tundra</option>
                                    <option value="Shattered Peaks">Shattered Peaks</option>
                                </select>
                            </div>
                            <div class="mt-2">
                                <FormLabel For="username" text="Username" />
                                <div class="mt-1">
                                    <input maxlength="20" minlength="3" v-model="username" type="text" name="username" id="username" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:focus:border-zinc-500 dark:focus:ring-zinc-500 dark:bg-zinc-600 dark:border-zinc-900 dark:text-zinc-200 dark:placeholder-zinc-400" placeholder="Poxala">
                                </div>
                            </div>
                            <p class=" mt-2 text-red-600 text-xs">{{errorMsg}}</p>
                        </div>
                    </div>
                    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <PrimaryButton :on-click="saveDeck" text="Save" />
                        <SecondaryButton :on-click="cancel" text="Cancel" />
                    </div>
                </ModalMain>
            </div>
        </div>
    </div>
</template>

<script>
import FormLabel from "@/components/LayoutComponents/FormLabel";
import PrimaryButton from "@/components/LayoutComponents/PrimaryButton";
import SecondaryButton from "@/components/LayoutComponents/SecondaryButton";
import ModalMain from "@/components/LayoutComponents/ModalMain";
import ModalHeader from "@/components/LayoutComponents/ModalHeader";
export default {
    name: "SaveModal",
    components: {ModalHeader, ModalMain, SecondaryButton, PrimaryButton, FormLabel},
    data() {
        return {
            name: '',
            facOne: 'Forsaken Wastes',
            facTwo: null,
            username: '',

            errorMsg: ''
        }
    },
    methods: {
        saveDeck() {
            if (!this.name || !this.username) {
                this.errorMsg = 'Please enter a name and (or) username'
            } else if (this.name.length < 3 || this.name.length > 20 || this.username.length < 3 || this.username.length > 20) {
                this.errorMsg = 'Your name and/or username must be between 3-20 characters in length'
            } else if (!this.name.match(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/) || !this.username.match(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)) {
                this.errorMsg = 'You have used illegal characters. Only spaces, letters, and numbers are accepted!'
            } else {
                const curDeck = {name: this.name, username: this.username, deck: this.$store.state.currentDeck, facOne: this.facOne, facTwo: this.facTwo, published: false}

                if (window.localStorage.getItem('decks')) {
                    const getExistingDecks = JSON.parse(window.localStorage.getItem('decks'))
                    getExistingDecks.push(curDeck)
                    window.localStorage.setItem('decks', JSON.stringify(getExistingDecks.reverse()))

                } else {
                    let decks = []
                    decks.push(curDeck)
                    window.localStorage.setItem('decks', JSON.stringify(decks))
                }

                this.$store.dispatch('setShowSave', false)
                this.$store.dispatch('resetDeck')

                this.$router.push('my-decks')
            }
        },
        cancel() {
            this.$store.dispatch('setShowSave', false)
        }
    }
}
</script>

<style scoped>

</style>