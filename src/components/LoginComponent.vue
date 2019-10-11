<template>
    <div>
        <!-- <Header></Header> -->
        <div class="container">
            <h3>Login here</h3>
            <hr>
            <div v-if="loginClicked == true && loggedin==false" class="alert alert-danger" role="alert">
                **{{loginerrormessage}}**
            </div>
            <form @submit.prevent="handleSubmit">
                <input type="email" class="form-control" v-model="email" placeholder="Enter Your email id" required>
                <br>
                <input type="password" class="form-control" v-model="password" placeholder="Enter your password" required>
                <br>
                <button type="submit" class="btn btn-primary btn-block">Log In</button>
            </form>
            <p>Do not have an acount?</p>
            <router-link class="nav-link" :to="{ name: 'Register' }">Register </router-link>
            <hr>

            <p>logged in info: {{loggedin}}</p>
            <h4>auth token: {{authtoken}}</h4>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Login',
    data: function(){
        return{
            email:'',
            submittedEmail:'',
            password:'',
            submittedPassword:'',
            showloginerrormessage:false,
            loginerrormessage:'wrong username/password',
            msg:'no message',
            loginClicked:false
        }
    },
    components:{
        
    },
    computed: mapGetters(['authtoken','loggedin','loggeduser']),
    created(){

    },
    updated(){
        if (this.loggedin ==true){
            this.$router.push('ssc');
        }
    },
    methods:{
        ...mapActions(["fetchToken"]),
        handleSubmit(){
            this.loginClicked = true;
            let user = {email:this.email, password:this.password};
            this.submittedEmail = this.email;
            this.submittedPassword = this.password;
            console.log(user);
            this.fetchToken(user)
            this.email = this.password = '';
            console.log(this.loggeduser);
        }
    }
}
</script>