<template>
    <div>
        <!-- <Header></Header> -->
        <div class="container">
            <h3>Register here</h3><hr>
            <br>
            <router-link to="/" class="btn btn-primary btn-block">Back home</router-link>
            <hr>
            <div>  
                <div class="form-group-row">
                    <label for="name" class="col-sm-2 col-form-label">First Name</label>
                    <div class="col-sm-10">
                        <input type="text" name="name" v-model="user.firstname" class="form-control" required>
                    </div>
                </div>
                <div class="form-group-row">
                    <label for="name" class="col-sm-2 col-form-label">Last Name</label>
                    <div class="col-sm-10">
                        <input type="text" name="name" v-model="user.lastname" class="form-control" required>
                    </div>
                </div>
                <!-- <div class="form-group-row">
                    <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-10">
                        <input type="phone" v-model="user.phone" name="email" class="form-control" required>
                    </div>
                </div> -->
                <div class="form-group-row">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" v-model="user.email" name="email" class="form-control" required>
                    </div>
                </div>
                <div class="form-group-row">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" v-model="user.password" name="password" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="submit" v-on:click="formSubmitted()" class="btn btn-primary">Register</button>
                    </div>
                </div>
            </div>
        </div>
        <h5>auth: {{authtoken}}</h5>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Register',
    data: function(){
        return{
            user:{
                firstname:'',
                lastname:'',
                email:'',
                password:''
            }
        }
    },
    components:{
     
    },
    created(){

    },
    computed: mapGetters(['authtoken','loggedin']),

    props:{

    },

    methods:{
            formSubmitted(){
            console.log(this.user.name);
            fetch('http://localhost:5000/auth/register',{
                method: 'POST',
                headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                body: JSON.stringify({firstname:this.user.firstname,
                                      lastname:this.user.lastname,  
                                      //phone:this.user.phone,
                                      email:this.user.email,
                                      password:this.user.password
                                    })
            }).then((res) => res.json())

                .then(this.$router.push('Login') )
                .catch((err)=>console.log(err))
        }
    }
    
}
</script>