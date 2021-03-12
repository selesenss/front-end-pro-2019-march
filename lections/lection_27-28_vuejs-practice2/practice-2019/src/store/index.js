import Vue from 'vue';
import Vuex from 'vuex';
import Coin from '@/services/CoinSchema';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        x: 100,
        list: [-1, 1, -6, 7, -9, 8],
        coins: []
    },
    actions: {
        initCoins({ commit }) {
            commit('updateCoins', {
                coins: [
                    new Coin('C1', 1, 'https://dema.com.ua/image/159_1.png'),
                    new Coin('C2', 5, 'https://dema.com.ua/image/035_1.png'),
                    new Coin('C3', 25, 'https://dema.com.ua/image/051_1.png')
                ]
            })
        },
        changeCoin({ state, commit }, payload) {
            let oldState = state;
            oldState.coins[payload.index].sum += payload.amount;
            commit('updateCoins', {
                coins: oldState.coins
            })
        },
        generateRandomList({ commit }) {
            // state.x += value
            setTimeout(() => {
                let list = [];
                list.length = 10;
                for (let i = 0; i < list.length; i++) {
                    list[i] = Math.floor(Math.random() * 20 - 10);
                }

                // state.list = state.list.concat(list)
                commit('redefineList', {
                    key: 'list',
                    list
                })
            }, 1500)
        },
    },
    mutations: {
        changeCoin(state, payload) {
            state.coins[payload.index].sum += payload.amount;
        },
        updateCoins(state, payload) {
            state.coins = payload.coins;
            // Vue.set(state, 'coins', payload.coins)
        },
        redefineList(state, payload) {
            state[payload.key] = payload.list;
        },
        updateX(state, value) {
            state.x += value;
        },
        updateXSuper(state, payload) {
            state.x += payload.value;
        }
    },
    getters: {
        getPositiveElems(state) {
            return state.list.filter(item => item > 0);
        },
        getNegativeElems(state) {
            return state.list.filter(item => item <= 0);
        },
        coins(state) {
            return state.coins;
        },
        bags(state) {
            return state.coins.map(item => {
                return {
                    sum: item.sum,
                    isFull: item.isFull
                }
            });
        }
    }
})