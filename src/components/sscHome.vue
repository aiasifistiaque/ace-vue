<template>
    <div class="container">
        <h3>Welcome to ssc home</h3><hr>
        <router-link class="btn-btn-primary" :to="{ name:'BoRComponent', params:{ board:'board' } }">Solve Board Questions</router-link>
        <br>
        <router-link class="btn-btn-primary" :to="{ name:'BoRComponent', params:{ board:'random' } }">Solve Random Questions</router-link>
        <br>
        <router-link class="btn-btn-primary" :to="{ name:'BoRComponent', params:{ board:'school' } }">Solve School Questions</router-link>
    </div>
</template>
<script>
export default {
    name:'sschome',
    data:function(){
        return{

        }
    }
}
</script>