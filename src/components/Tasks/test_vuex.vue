<template>
    <div>
        <h1>Tasks- test-Vuex:</h1>
        <hr />
        message : {{ message }}
        <hr />
        <p>{{ count }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>        
    </div>
</template>

<script>
// import axios from 'axios'
import {Mixin} from '../../mixin'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
//
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
  }
})

//
export default {
    mixins:[Mixin],
    created() {
//console.log( this.sysConst.URL_BASE )
//        this.getTasks();
    },
    data() {
        return {
            message :''
        }
    },
    computed: {
        count () {
            return store.state.count
        }
    },    
    methods: {
        getTasks(){

        },
        increment () {
        store.commit('increment')
        },
        decrement () {
            store.commit('decrement')
        },        
    }
}
</script>

