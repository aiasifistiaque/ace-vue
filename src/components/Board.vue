<template>
    <div class="container">
        <h3>catagory: {{catagory}}</h3>
        <div v-if="catagory=='board'">
            <boardcomponent></boardcomponent>
        </div>
    </div>
</template>
<script>
import boardcomponent from './BoardComponent.vue';
export default {
    name:'Board',
    data:function(){
        return{
            catagory:''
        }
    },
    components:{
        boardcomponent
    },
    created(){
        this.catagory = this.$route.params.board;
    }
}
</script>