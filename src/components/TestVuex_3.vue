<template>
    <div>
        <h1>TestVuex_3.vue</h1>
        <p>Count: {{ $store.state.count }}</p>
        <button @click="updateCount">increment</button>
        <hr />
        <TestChild></TestChild>
    </div>
</template>

<!-- -->
<script>
import axios from 'axios'
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
            var url = this.sysConst.URL_BASE +'/api/test_tasks'
//console.log(url)
            axios.get(url).then(res =>  {
                this.tasks = res.data
                this.$store.commit('setTasks',  {'tasks' : this.tasks }  )
            })                        
        },    
    }        
}
</script>
