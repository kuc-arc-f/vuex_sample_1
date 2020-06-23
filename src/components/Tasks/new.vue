<template lang="html">
    <div class="container">
            <div class="form-group">
                <label for="TopicTitle">タイトル</label>
                <input type="text" class="form-control" id="title"
                 v-model="title" required="required" />
            </div>
            <div class="form-group">
                <label for="TopicContent">content</label>
                <textarea class="form-control" id="content" rows="3" v-model="content"></textarea>
            </div>
            <button v-on:click="createTask">Save</button>
    </div>
</template>

<script>
import {Mixin} from '../../mixin'
import axios from 'axios'

//
export default {
    mixins:[Mixin],
    created() {
// console.log( this.sysConst.URL_BASE )
    },
    data() {
        return {
            title:'',
            content:'',
            database : null
        }
    },
    methods: {
        createTask: function() {
            var url =  this.sysConst.URL_BASE +'/api/cross_task/create_task'
// console.log(url)            
            var task = {
                'title': this.title,
                'content': this.content,
            };   
            axios.post( url , task ).then(res => {
                console.log(res.data );
                this.$router.push('/tasks')
            });                     
        },
    }
}
</script>
