//
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//
export default new Vuex.Store({
    state: {
        products: [
            { id: 1, name: "Hoge", stock: 0 },
            { id: 2, name: "Fuga", stock: 3 },
            { id: 3, name: "Piyo", stock: 0 },
        ],
        tasks:[],
        count: 5,
    },
    getters: {
        depletedProducts: state => {
            return state.products
        },
        getTasks: state => {
            return state.tasks
        }
    }, 
    mutations: {
        increment(state) {
            state.count++
        },
        setTasks(state, payload) {
            state.tasks = payload.tasks
        }
    },
})

