<template>
    <div class="container">
        <div v-if="loggedin==false">
            <Login></Login>
        </div>
        <div v-else>
            <div v-if="category == 'board'">
                <boardcomponent></boardcomponent>
            </div>
            <div v-if="category == 'random'">
                <randomcomponent></randomcomponent>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Login from './LoginComponent.vue'
import randomcomponent from './RandomComponent.vue'
import boardcomponent from './BoardComponent.vue'
export default {
    name:'BoRComponent',
    data:function(){
        return{
            category:''
        }
    },
    computed: mapGetters(['authtoken','loggedin','loggeduser']),
    components:{
        boardcomponent,
        randomcomponent,
        Login
    },
    created(){
        this.category = this.$route.params.board;
        console.log(this.category)
    }
}
</script>