<template>
    <MainLayout>
        <PageHeader>Deck Builder</PageHeader>

        <!-- Filter Section -->
        <div class="mt-8">
            <label for="search" class="block text-sm font-medium text-gray-700"></label>
            <div class="mt-1">
                <input v-model="searchInput" @keyup.enter="sortRunes" @change="sortRunes" type="text" name="search" id="search" :class="this.$searchBox" placeholder="Search">
            </div>
        </div>
        <div class="flex flex-row flex-wrap mt-6">

            <div class="mr-4 mb-2">
              <FormLabel text="Card Type" For="type" />
                <select
                        id="type"
                        name="type"
                        :class="this.$selectBox"
                        v-model="cardValue"
                >
                    <template v-for="(type, index) in cardTypes">
                        <option :value="type" :key="index">{{type}}</option>
                    </template>
                </select>
            </div>

            <div class="mr-4 mb-2">
              <FormLabel text="Faction" For="faction" />
                <select
                    id="faction"
                    name="faction"
                    :class="this.$selectBox"
                    default="none"
                    v-model="selectedFaction"
                    @change="sortRunes"
                >
                    <option :value="null" name="none">None</option>
                    <option value="Forglar Swamp">Forglar Swamp</option>
                    <option value="Forsaken Wastes">Forsaken Wastes</option>
                    <option value="Ironfist Stronghold">Ironfist Stronghold</option>
                    <option value="Sundered Lands">Sundered Lands</option>
                    <option value="K'thir Forest">K'thir Forest</option>
                    <option value="Underdepths">Underdepths</option>
                    <option value="Savage Tundra">Savage Tundra</option>
                    <option value="Shattered Peaks">Shattered Peaks</option>

                </select>
            </div>

            <div class="mr-4 mb-2">
                <FormLabel text="Rarity" For="rarity" />
                <select
                    id="rarity"
                    name="rarity"
                    :class="this.$selectBox"
                    default="none"
                    v-model="selectedRarity"
                    @change="sortRunes"
                >
                    <option :value="null" name="none">None</option>
                    <option value="COMMON">Common</option>
                    <option value="UNCOMMON">Uncommon</option>
                    <option value="RARE">Rare</option>
                    <option value="EXOTIC">Exotic</option>
                    <option value="LIMITED">Limited</option>
                    <option value="LEGENDARY">Legendary</option>

                </select>
            </div>

            <div class="mr-4 mb-2">
                <FormLabel text="Abilities" For="abilities" />
                <select
                    id="abilities"
                    name="abilities"
                    :class="this.$selectBox"
                    default="none"
                    v-model="selectedAbility"
                    @change="sortRunes"
                >
                    <option :value="null" name="none">None</option>
                    <template v-for="(ability, index) in abilities">
                        <option :value="ability.name" :key="index">{{ability.name}}</option>
                    </template>
                </select>
            </div>
            <div class="mr-4 mb-2">
                <FormLabel text="Races" For="races" />
                <select
                    id="races"
                    name="races"
                    :class="this.$selectBox"
                    default="none"
                    v-model="selectedRace"
                    @change="sortRunes"
                >
                    <option :value="null" name="none">None</option>
                    <template v-for="(race, index) in races">
                        <option :value="race" :key="index">{{race}}</option>
                    </template>
                </select>
            </div>
            <div class="mr-4 mb-2">
                <FormLabel text="Classes" For="classes" />
                <select
                    id="classes"
                    name="classes"
                    :class="this.$selectBox"
                    default="none"
                    v-model="selectedClass"
                    @change="sortRunes"
                >
                    <option :value="null" name="none">None</option>
                    <template v-for="(clas, index) in classes">
                        <option :value="clas" :key="index">{{clas}}</option>
                    </template>
                </select>
            </div>

            <div class="mr-4 mb-2">
                <FormLabel text="Nora Cost" For="noraCost" />
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 flex items-center">
                        <label for="symbol" class="sr-only">Symbol</label>


                        <select v-model="selectedNoraSign" id="symbol" name="symbol" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-l-md border-right-0 dark:border-r-0 dark:border-r-transparent dark:rounded-l-lg dark:focus:border-zinc-600 dark:focus:ring-zinc-600 dark:bg-zinc-700 dark:border-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400">
                            <option value="greater">Greater than</option>
                            <option value="less">Less than</option>
                        </select>
                    </div>
                    <input v-model="selectedNora" max="100" min="0" @keyup.enter="sortRunes" @change="sortRunes" type="number" name="noraCost" id="noraCost" class="mr-4 focus:ring-indigo-500 focus:border-indigo-500 block w-48 pl-32 sm:text-sm border-gray-300 rounded-md dark:focus:border-zinc-600 dark:focus:ring-zinc-600 dark:bg-zinc-700 dark:border-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400" placeholder="Cost">
                </div>
            </div>

            <div class="mr-4 mb-2">
                <FormLabel text="Speed" For="speed" />
                <select
                    id="speed"
                    name="speed"
                    :class="this.$selectBox"
                    default="none"
                    v-model="selectedSpeed"
                    @change="sortRunes"
                >
                    <option :value="null" name="none">None</option>
                    <option :value="4" name="none">4</option>
                    <option :value="5" name="none">5</option>
                    <option :value="6" name="none">6</option>
                    <option :value="7" name="none">7</option>
                    <option :value="8" name="none">8</option>

                </select>
            </div>

            <div class="mr-4 mb-2">
                <FormLabel text="Conditions" For="conditions" />
                <select
                    id="conditions"
                    name="conditions"
                    :class="this.$selectBox"
                    default="none"
                    v-model="selectedCondition"
                    @change="sortRunes"
                >
                    <option :value="null" name="none">None</option>
                    <template v-for="(condition, index) in conditions">
                        <option :value="condition.key" :key="index">{{condition.name}}</option>
                    </template>

                </select>
            </div>
        </div>

        <DeckHolder v-if="!$store.state.hideDeck" />
        <SaveModal v-if="$store.state.showSave" />
        <div @click="$store.dispatch('hideDeck', false)" class="fixed right-0 bg-indigo-600 border-indigo-800 shadow text-white bottom-20 p-3 z-40 opacity-80 cursor-pointer rounded-l-md dark:bg-red-500/50 dark:hover:bg-red-500/80 dark:border-red-500" v-if="$store.state.hideDeck">
            <p><i class="pi pi-angle-double-left mr-2"></i><span>Show Deck Builder</span></p>
        </div>

        <!-- Runes sec -->
        <div class="mt-10">
            <div class="flex md:flex-row sm:flex-col flex-col lg:flex-row xl:flex-row 2xl:flex-row">
                <div class="mr-4 mb-4">
                    <RuneDisplay />
                </div>
                <template v-if="!loading">
                    <template v-if="error">
                        <p class="text-red-500">There was an error fetching the runes, please try refreshing the page</p>
                    </template>
                    <template v-else>
                        <div class="mb-4" v-if="cardValue === 'Champs'">
                            <RuneList header="Champions" :runes="runes.champs" :key="cardValue" type="champ" />
                        </div>
                        <div class="mb-4" v-else-if="cardValue === 'Spells'">
                            <RuneList header="Spells" :runes="runes.spells" :key="cardValue" type="spell" />
                        </div>
                        <div class="mb-4" v-else-if="cardValue === 'Equips'">
                            <RuneList header="Equipment" :runes="runes.equips" :key="cardValue" type="equip" />
                        </div>
                        <div class="mb-4" v-else-if="cardValue === 'Relics'">
                            <RuneList header="Relics" :runes="runes.relics" :key="cardValue" type="relic" />
                        </div>
                    </template>
                </template>
                <template v-else>
                    <div>
                        <h1 class="text-3xl font-bold mb-2 text-gray-700 dark:text-zinc-200">Champions</h1>
                        <div class="flex flex-row justify-start flex-wrap">
                            <template v-for="(item, index) in loadHolder">
                                <div class="m-1" :key="index">
                                    <div style="width: 85px; min-height: 97px;" :class="`bg-[#252525] shadow-md cursor-pointer rounded-lg animate-pulse dark:bg-zinc-500`"></div>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </MainLayout>
</template>

<script>
    // import jsonAbilities from "../assets/json/abilities.json"
    import jsonRaces from '../assets/json/races.json'
    import jsonClasses from '../assets/json/classes.json'
    import jsonConditions from '../assets/json/conditions.json'
    import RuneDisplay from "../components/RuneDisplay";
    import RuneList from "../components/RuneList";
    import DeckHolder from "../components/DeckHolder";
    import SaveModal from "../components/SaveModal";
    import axios from 'axios';
    import MainLayout from "@/components/LayoutComponents/MainLayout";
    import PageHeader from "@/components/LayoutComponents/PageHeader";
    import FormLabel from "@/components/LayoutComponents/FormLabel";

    export default {
        name: "Runes",
        components: {FormLabel, PageHeader, MainLayout, SaveModal, DeckHolder, RuneList, RuneDisplay},
        data: () => {
            return {
                runeBase: [],
                runes: [],
                reset: {},
                abilities: [],
                conditions: jsonConditions.conditions.sort((a, b) => a.name.localeCompare(b.name)),
                classes: jsonClasses,
                races: jsonRaces,

                selectClass: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-green-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:focus:border-zinc-600 dark:focus:ring-zinc-600 dark:bg-zinc-700 dark:border-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400",

                error: false,
                loading: true,
                loadHolder: [].length = 70,

                cardTypes: ['Champs', 'Spells', 'Equips', 'Relics'],
                cardValue: 'Champs',

                // Form stuff
                searchInput: '',

                selectedFaction: null,
                selectedAbility: null,
                selectedRace: null,
                selectedClass: null,

                selectedNoraSign: 'greater',
                selectedNora: '',

                selectedSpeed: null,
                selectedRarity: null,
                selectedCondition: null,
            }
        },
        methods: {
            sortRunes() {
                this.$store.dispatch('changePage', 0)
                this.runes = JSON.parse(JSON.stringify(this.runeBase))


                if (this.selectedAbility) {
                    let filterOne = this.runes.champs.filter(champ => {
                        for (let i = 0; i < champ.startingAbilities.length; i++) {
                            if (champ.startingAbilities[i].name == this.selectedAbility) {
                                return champ
                            }
                        }
                    })

                    let filterTwo = this.runes.champs.filter(champ => {
                        for (let i = 0; i < champ.abilitySets.length; i++) {
                            for (let x = 0; x < champ.abilitySets[i].abilities.length; x++) {
                                if (champ.abilitySets[i].abilities[x].name == this.selectedAbility) {
                                    return champ
                                }
                            }
                        }
                    })

                    this.runes.champs = filterOne.concat(filterTwo);
                }

                if (this.selectedRace) {
                    this.runes.champs = this.runes.champs.filter(champ => {
                        if (champ.races.includes(this.selectedRace)) {
                            return champ
                        }
                    })
                }

                if (this.selectedClass) {
                    this.runes.champs = this.runes.champs.filter(champ => {
                        if (champ.classes.includes(this.selectedClass)) {
                            return champ
                        }
                    })
                }

                if (this.selectedNora) {
                    if (this.selectedNoraSign == 'greater') {
                        this.runes.champs = this.runes.champs.filter(champ => {
                            if (champ.noraCost > this.selectedNora) {
                                return champ
                            }
                        })

                        this.runes.spells = this.runes.spells.filter(spell => {
                            if (spell.noraCost > this.selectedNora) {
                                return spell
                            }
                        })

                        this.runes.equips = this.runes.equips.filter(equip => {
                            if (equip.noraCost > this.selectedNora) {
                                return equip
                            }
                        })

                        this.runes.relics = this.runes.relics.filter(relic => {
                            if (relic.noraCost > this.selectedNora) {
                                return relic
                            }
                        })
                    } else {
                        this.runes.champs = this.runes.champs.filter(champ => {
                            if (champ.noraCost < this.selectedNora) {
                                return champ
                            }
                        })

                        this.runes.spells = this.runes.spells.filter(spell => {
                            if (spell.noraCost < this.selectedNora) {
                                return spell
                            }
                        })

                        this.runes.equips = this.runes.equips.filter(equip => {
                            if (equip.noraCost < this.selectedNora) {
                                return equip
                            }
                        })

                        this.runes.relics = this.runes.relics.filter(relic => {
                            if (relic.noraCost < this.selectedNora) {
                                return relic
                            }
                        })
                    }

                }

                if (this.selectedSpeed) {
                    this.runes.champs = this.runes.champs.filter(champ => {
                        if (champ.speed == this.selectedSpeed) {
                            return champ
                        }
                    })
                }

                if (this.selectedFaction) {
                    this.runes.champs = this.runes.champs.filter(champ => {
                        if (champ.factions.includes(this.selectedFaction)) {
                            return champ
                        }
                    })

                    this.runes.spells = this.runes.spells.filter(spell => {
                        if (spell.factions.includes(this.selectedFaction)) {
                            return spell
                        }
                    })

                    this.runes.equips = this.runes.equips.filter(equip => {
                        if (equip.factions.includes(this.selectedFaction)) {
                            return equip
                        }
                    })

                    this.runes.relics = this.runes.relics.filter(relic => {
                        if (relic.factions.includes(this.selectedFaction)) {
                            return relic
                        }
                    })
                }

                if (this.selectedRarity) {
                    this.runes.champs = this.runes.champs.filter(champ => {
                        if (champ.rarity == this.selectedRarity) {
                            return champ
                        }
                    })

                    this.runes.spells = this.runes.spells.filter(spell => {
                        if (spell.rarity == this.selectedRarity) {
                            return spell
                        }
                    })

                    this.runes.equips = this.runes.equips.filter(equip => {
                        if (equip.rarity == this.selectedRarity) {
                            return equip
                        }
                    })

                    this.runes.relics = this.runes.relics.filter(relic => {
                        if (relic.rarity == this.selectedRarity) {
                            return relic
                        }
                    })
                }

                if (this.searchInput) {
                    this.runes.champs = this.runes.champs.filter(champ => {
                        if (champ.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
                            return champ
                        }
                    })

                    this.runes.spells = this.runes.spells.filter(spell => {
                        if (spell.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
                            return spell
                        }
                    })

                    this.runes.equips = this.runes.equips.filter(equip => {
                        if (equip.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
                            return equip
                        }
                    })

                    this.runes.relics = this.runes.relics.filter(relic => {
                        if (relic.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
                            return relic
                        }
                    })
                }

                if (this.selectedCondition) {
                    let filterOne = this.runes.champs.filter(champ => {
                        for (let i = 0; i < champ.startingAbilities.length; i++) {
                            if (champ.startingAbilities[i].shortDescription.toLowerCase().includes(`value=${this.selectedCondition.toLowerCase()}`)) {
                                return champ
                            }
                        }
                    })

                    let filterTwo = this.runes.champs.filter(champ => {
                        for (let i = 0; i < champ.abilitySets.length; i++) {
                            for (let x = 0; x < champ.abilitySets[i].abilities.length; x++) {
                                if (champ.abilitySets[i].abilities[x].shortDescription.toLowerCase().includes(`value=${this.selectedCondition.toLowerCase()}`)) {
                                    return champ
                                }
                            }
                        }
                    })

                    this.runes.champs = filterOne.concat(filterTwo);

                    this.runes.spells = this.runes.spells.filter(spell => {
                        if (spell.description.toLowerCase().includes(`value=${this.selectedCondition.toLowerCase()}`)) {
                            return spell
                        }
                    })

                    this.runes.equips = this.runes.equips.filter(equip => {
                        if (equip.description.toLowerCase().includes(`value=${this.selectedCondition.toLowerCase()}`)) {
                            return equip
                        }
                    })

                    this.runes.relics = this.runes.relics.filter(relic => {
                        if (relic.description.toLowerCase().includes(`value=${this.selectedCondition.toLowerCase()}`)) {
                            return relic
                        }
                    })
                }

            }
        },
        computed: {
            getInput() {
                return this.searchInput
            }
        },
        async mounted() {
            this.$store.dispatch('resetSelectedRune')

            const runesResponse = await axios.get('https://us-central1-poxala-fa4ce.cloudfunctions.net/getRunes')
            const abilitiesResponse = await axios.get('https://us-central1-poxala-fa4ce.cloudfunctions.net/getChampionAbilities')

            this.loading = false;

            if (runesResponse.status === 200 && abilitiesResponse.status === 200) {
                this.runes = runesResponse.data.data
                this.runeBase = runesResponse.data.data

                this.abilities = abilitiesResponse.data.data
                //usedAbilities.sort((a, b) => a.name.localeCompare(b.name))

            } else {
                this.error = true
            }
        },
        metaInfo: {
            title: 'Poxala - Runes'
        }
    }

    /*
    https://www.poxnora.com/api/feed.do?t=json
https://www.poxnora.com/api/feed.do?t=json&r=mechanics
https://www.poxnora.com/api/feed.do?t=json&r=conditions
     */
</script>

<style scoped>

</style>