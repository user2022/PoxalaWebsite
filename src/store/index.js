import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedRune: null,
        currentDeck: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        factionCount: [],
        showSave: false,
        showErr: false,
        errMsg: '',
        hideDeck: false,
        curPage: 0,

        theme: {}
    },
     getters: {
         getSelectedRune(state) {
             return state.selectedRune
         },
         getCurrentDeck(state) {
             return state.currentDeck
         },
         getShowSave(state) {
             return state.showSave
         },

         getTheme(state) {
             return state.theme
         }
     },
    actions: {
        setSelectedRune({commit}, {rune, type}) {
            commit('SET_RUNE', {rune, type});
        },
        resetSelectedRune({commit}) {
            commit('RESET_SELECTED_RUNE');
        },
        setShowSave({commit}, value) {
            commit('SHOW_SAVE', value)
        },
        setErr({commit}, {value, msg}) {
            commit('SET_ERR', {value, msg})
        },
        addRune({commit}, value) {
            commit('ADD_RUNE', value)
        },
        deleteRune({commit}, value) {
            commit('DELETE_RUNE', value)
        },
        resetDeck({commit}) {
            commit('RESET_DECK');
        },
        hideDeck({commit}, value) {
            commit('HIDE_DECK', value)
        },
        changeSelectedDeck({commit}, value) {
            commit('CHANGE_DECK', value)
        },
        changePage({commit}, value) {
            commit('CHANGE_PAGE', value)
        },

        initTheme({ commit }) {
            const cachedTheme = localStorage.theme ? localStorage.theme : false;
            const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (cachedTheme) commit('SET_THEME', cachedTheme)
            else if (userPrefersDark) commit('SET_THEME', 'dark')
            else commit('SET_THEME', 'light')
        },
        toggleTheme({ commit }) {
            switch (localStorage.theme) {
                case 'light':
                    commit('SET_THEME', 'dark')
                    break;
                default:
                    commit('SET_THEME', 'light')
                    break;
            }
        }
    },
    mutations: {
        SET_RUNE(state, {rune, type}) {
            state.selectedRune = rune;
            state.selectedRune.type = type;
        },
        RESET_SELECTED_RUNE(state) {
            state.selectedRune = null;
        },
        SHOW_SAVE(state, value) {
            state.showSave = value;
        },
        SET_ERR(state, {value, msg}) {
            state.showErr = value;
            state.errMsg = msg;
        },
        ADD_RUNE(state, value) {
            let counter = 0;

            for (let i = 0; i < state.currentDeck.length; i++) {

                if (state.currentDeck[i].name == value.name) {
                    counter = counter + 1
                }

                if (counter == value.deckLimit) {
                    console.log('Max runes set')
                    break;
                } else if (!state.currentDeck[i]) {
                    value.factions.forEach(item => {
                        state.factionCount.push(item)
                    })

                    state.currentDeck.splice(i, 1, value)

                    const order = {champ: 1, spell: 2, relic: 3, equip: 4}

                    state.currentDeck.sort((a, b) => {
                        if(a.name < b.name) { return -1; }
                        if(a.name > b.name) { return 1; }
                        return 0;
                    }).sort((a, b) => {
                        return order[a.type] - order[b.type]
                    })


                    break;
                }
            }
        },
        DELETE_RUNE(state, value) {
            state.currentDeck[value].factions.forEach(val => {
                const index = state.factionCount.indexOf(val)
                state.factionCount.splice(index, 1)
            })

            state.currentDeck.splice(value, 1)
            state.currentDeck.push(0);
        },
        RESET_DECK(state) {
            state.currentDeck = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            state.factionCount = []
        },
        HIDE_DECK(state, value) {
            state.hideDeck = value;
        },
        CHANGE_DECK(state, value) {
            if (value == null) {
                state.currentDeck = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            } else {
                state.currentDeck = value;
            }

            state.factionCount = []
        },
        CHANGE_PAGE(state, value) {
            state.curPage = value;
        },
        SET_THEME(state, theme) {
            state.theme = theme;
            localStorage.theme = theme;
        }
    }
})
