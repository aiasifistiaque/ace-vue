<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/#/ssc">ACE</a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item" v-if="loggedin==true">
                        <a class="nav-link" href="/#/profile">profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <a class="nav-link" v-if="loggedin==false" href="/#/login" tabindex="-1">Login</a>
                <a class="nav-link" v-if="loggedin==false" href="/#/register" tabindex="-1">Register</a>
                
                <p v-if="loggedin==true" class="nav-item">Welcome | {{loggeduser.firstname}} </p>
                <button v-if="loggedin==true" class="btn btn-link" @click="logoutButton">logout</button>


                <!-- <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> -->
            </div>
        </nav>
        <br>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'headernav',
    computed: mapGetters(['loggedin','loggeduser']),
    methods:{
        ...mapActions(["authlogout"]),
        logoutButton(){
            this.authlogout();
        }
    }
    
}
</script>