<template>
    <div class="container">
        <h3>Welcome to your profile</h3><hr>
        <div v-if="loggedin==true">
            <h3>name: {{user.firstname}} </h3>
            <h3>{{user.lastname}}</h3>
            <h4>email: {{user.email}}</h4>
            <button class="btn btn-success" @click="viewsaved()">View Saved Questions</button>
        </div>
        <div v-else>
            <Login></Login>
        </div>
        <div v-if="loggedin==true">
            <div v-for="question in questions" :key="question._id">

                <h3>question: {{question.question}}</h3>
                <p>answer: {{question.answer}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import Login from './LoginComponent.vue'
import { mapGetters } from 'vuex'
export default {

    name:'profle',
    components:{
        Login
    },
    computed: mapGetters(['authtoken','loggedin','loggeduser']),

    data:function(){
        return{
            questions:[],
            questionview:false,
            users:[],
            user:{}
        }
    },
    created(){
        this.fetchUser();
    },
    methods:{
        async fetchUser(){
            await fetch('http://localhost:5000/auth/user/'+this.loggeduser._id,{

                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                    },
                    
                    }).then(res => res.json())
                    .then(res =>{
                        this.users = res
                        this.user = this.users[0]
                        console.log(user)
                        }).catch((err) => {
                        console.log(err);
                    })
                
        },
        async viewsaved(){
            
            console.log(this.user.savedquestions.length)
            var i;
            for(i=0; i<this.user.savedquestions.length; i++){
                await fetch('http://localhost:5000/api/question/saved/'+this.user.savedquestions[i].questionid,{

                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                    },
                    
                    }).then(res => res.json())
                    .then(res =>{
                        this.questions.push(res);
                        this.questionview == true;
                        console.log(this.questions);
                        }).catch((err) => {
                        console.log(err);
                    })
            }
            // await fetch('http://localhost:5000/api/question/viewsaved/'+this.loggeduser._id,{

            //         headers: {
            //             'Content-Type': 'application/json;charset=utf-8',
                        
            //         },
                    
            //     }).then(res => res.json())
            //     .then(res => this.questions = res)
            //     .catch((err) => {
            //         console.log(err);
            //     })
               
        }
        },
    
}
</script>