<template>
    <div>
        <h1>TestVuex_2.vue</h1>
        <p>Count: {{ $store.state.count }}</p>
        <button @click="updateCount">increment</button>
        <hr />
        <TestChild></TestChild>
    </div>
</template>

<!-- -->
<script>
//import axios from 'axios'
import {Mixin} from '../mixin'
import TestChild from '../components/Element/TestChild'

//
export default {
    mixins:[Mixin],
    components: { TestChild },
    created(){
        console.log( "count =" + this.$store.state.count )
        this.updateTask()
//        console.log( this.getTasks )
    },
    methods: {
        updateCount() {
            this.$store.commit("increment");
        },
        updateTask() {
            var items =       [
                { 'id' : 1,  'name' : 'n1'},
                { 'id' : 2 , 'name' : 'n2'},
                { 'id' : 3 , 'name' : 'n3'},
            ]
            this.$store.commit('setTasks',  {'tasks' : items }  )
        },    
    }        
}
</script>
