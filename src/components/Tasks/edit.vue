<template lang="html">
    <div class="container">
            <div class="form-group">
                <label for="TopicTitle">タイトル</label>
                <input type="text" class="form-control" id="title" v-model="title" >
            </div>
            <div class="form-group">
                <label for="TopicContent">content</label>
                <textarea class="form-control" id="content" rows="3" v-model="content"></textarea>
            </div>
            <button v-on:click="updateTask">投稿</button>
            <hr />
            <button v-on:click="deleteTask">[ delete ]</button>
    </div>
</template>

<script>
import {Mixin} from '../../mixin'
import axios from 'axios'

export default {
    mixins:[Mixin],
    created() {
        //console.log( this.sysConst.URL_BASE )
    },
    data() {
        return {
            title:'',
            content:''
        }
    },
    mounted: function() {
        this.getItem();
    },
    methods: {
        getItem: function() {
            var task = {
                "id" :  this.$route.params.id,
            };
            var url = this.sysConst.URL_BASE +'/api/cross_task/get_item'
//console.log(url)            
            axios.post( url  ,task).then(res => {
                this.item = res.data;
                this.title = this.item.title;
                this.content = this.item.content;
// console.log(this.item  );                
            });            
        },
        updateTask: function () {
            var task = {
                "id" :  this.$route.params.id,
                'title': this.title,
                'content': this.content
            };
            var url = this.sysConst.URL_BASE +'/api/cross_task/update_post'
// console.log(url)            
            axios.post(url ,task).then(res => {
                console.log(res.data.id );
                console.log(res.data.title);
                console.log(res.data.content);
                this.$router.push('/tasks')
            });            
        },
        deleteTask: function () {
            var task = {
                "id" : this.$route.params.id,
            };
            var url = this.sysConst.URL_BASE +'/api/cross_task/delete_task'
            axios.post(url ,task).then(res => {
                console.log(res.data.id );
                this.$router.push('/tasks')
            });
            
        }
    }
}
</script>
