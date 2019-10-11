<template>
    <div class="container">
        <h3>Random Question</h3>
        <hr>
        <h4>Session Marks: {{sessionMarks}}/{{questionCount}}</h4>
        <div v-if="loading">
            <div>
                <h2>Loading...</h2>
            </div>
        </div>
        <div v-if="loading==false">
            <h4>Question: {{question.question}}</h4><hr>
            <div v-if="submitClicked==false">
                <input type="radio" :id="question.optionone" :name="question.optionone" :value="question.optionone" v-model="selectedAnswer">
                <label :for="question.optionone"> A: {{question.optionone}}</label><br>
                <input type="radio" :id="question.optiontwo" :name="question.optiontwo" :value="question.optiontwo" v-model="selectedAnswer">
                <label :for="questions.optiontwo"> B: {{question.optiontwo}}</label><br>
                <input type="radio" :id="question.optionthree" :name="question.optionthree" :value="question.optionthree" v-model="selectedAnswer">
                <label :for="question.optionthree"> C: {{question.optionthree}}</label><br>
                <input type="radio" :id="question.optionfour" :name="question.optionfour" :value="question.optionfour" v-model="selectedAnswer">
                <label :for="question.optionfour"> D: {{question.optionfour}}</label><br>
                <span>Selected answer: {{selectedAnswer}} </span><br>
            </div>
            <div v-else>
                    <div v-if="selectedAnswer!= question.answer">
                        <span class="badge badge-danger">Wrong Answer</span>
                        
                    </div>
                    <div v-else-if="selectedAnswer == question.answer">
                        <span class="badge badge-success">Correct Answer</span>

                    </div>
                    
                    <div v-if="selectedAnswer == null">
                        <span class="badge badge-warning">
                            ***this question was not answered 
                        </span>
                    </div>
                        <span class="badge badge-success text-bold">
                            **Correct answer: {{question.answer}}
                        </span>
                    <div v-if="question.answer==question.optionone || selectedAnswer == question.optionone">
                        <div v-if="selectedAnswer==question.optionone && question.answer == selectedAnswer">
                            <div class="alert alert-success" role="alert">
                                A: {{question.optionone}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer==question.optionone && question.answer != selectedAnswer">
                            <div class="alert alert-danger" role="alert">
                                A: {{question.optionone}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer!=question.optionone && question.answer == question.optionone">
                            <div class="alert alert-success" role="alert">
                                A: {{question.optionone}}
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div>
                            A: {{question.optionone}}
                        </div>
                    </div>
                    <div v-if="question.answer==question.optiontwo || selectedAnswer == question.optiontwo">
                        <div v-if="selectedAnswer==question.optiontwo && question.answer == selectedAnswer">
                            <div class="alert alert-success" role="alert">
                                B: {{question.optiontwo}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer==question.optiontwo && question.answer != selectedAnswer">
                            <div class="alert alert-danger" role="alert">
                                B: {{question.optiontwo}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer!=question.optiontwo && question.answer == question.optiontwo">
                            <div class="alert alert-success" role="alert">
                                B: {{question.optiontwo}}
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div>
                            B: {{question.optiontwo}}
                        </div>
                    </div>
                    <div v-if="question.answer==question.optionthree || selectedAnswer == question.optionthree">
                        <div v-if="selectedAnswer==question.optionthree && question.answer == selectedAnswer">
                            <div class="alert alert-success" role="alert">
                                C: {{question.optionthree}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer==question.optionthree && question.answer != selectedAnswer">
                            <div class="alert alert-danger" role="alert">
                                C: {{question.optionthree}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer!=question.optionthree && question.answer == question.optionthree">
                            <div class="alert alert-success" role="alert">
                                C: {{question.optionthree}}
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div>
                            C: {{question.optionthree}}
                        </div>
                    </div>
                    <div v-if="question.answer==question.optionfour || selectedAnswer == question.optionfour">
                        <div v-if="selectedAnswer==question.optionfour && question.answer == selectedAnswer">
                            <div class="alert alert-success" role="alert">
                                D: {{question.optionfour}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer==question.optionfour && question.answer != selectedAnswer">
                            <div class="alert alert-danger" role="alert">
                                D: {{question.optionfour}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer!=question.optionfour && question.answer == question.optionfour">
                            <div class="alert alert-success" role="alert">
                                D: {{question.optionfour}}
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div>
                            D: {{question.optionfour}}
                        </div>
                    </div>
            </div>
            <div v-if="savingQuestion==false">

                <div v-if="submitClicked==false">
                    <button class="btn btn-primary btn-block" v-on:click="submitButton()">Submit</button><br>
                    <!-- <button class="btn btn-primary btn-block">View Answer</button>     -->
                </div>
                <div v-else>
                    <button class="btn btn-primary btn-block" v-on:click="nextQuestionButton()">NextQuestion</button><br>
                </div>
                <button class="btn btn-primary btn-block" v-on:click="saveQuestionButton(question._id)">Save Question</button>
            </div>
            <div v-else>
                <p>Saving Question.....</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {
        data:function(){
            return{
                loading:'',
                question:{
                },
                questions:[],
                questionArray:[],
                selectedAnswer:'',
                correct:'',
                submitClicked:'',
                sessionMarks:'',
                questionCount:'',
                savingQuestion:'',
                saveData:{},
                course:'',
                url:''
            }
        },
        computed: mapGetters(['authtoken','loggedin','loggeduser']),

        created() {
            this.course = this.$route.params.course;
            this.sessionMarks = 0;
            this.questionCount = 0;
            this.loading = true;
            this.savingQuestion = false;
            this.fetchQuestion();
        },
        methods:{
            async fetchQuestion(){
                console.log('question fetch initiated')
                console.log(this.course)
                this.url = 'http://localhost:5000/api/question/practice/'+this.course
                console.log(this.url)
                this.submitClicked = false;
                await fetch(this.url,{
                headers: {
                            'Content-Type': 'application/json;charset=utf-8',
                        },
                })
                    .then(res => res.json())
                    .then(res => {
                        this.questions = res;
                        this.loading = false;
                        console.log(this.questions)
                        console.log(this.loading)
                        this.question = this.questions[0]
                        console.log(this.question.question)
                        //this.totalQuestions = this.questions.length;
                        //this.viewAnswers = false;
                    
            })
            },
            submitButton(){
                this.submitClicked = true;
                this.questionCount++;
                if(this.selectedAnswer == this.question.answer){
                    this.correct = true;
                    this.sessionMarks++;
                }else{
                    this.correct = false;
                }
            },
            nextQuestionButton(){
                this.loading = true;
                this.question={};
                this.fetchQuestion();
                this.submitClicked = false;
                this.correct = false;
                this.selectedAnswer = null;
            },
            async saveQuestionButton(questionid){
                this.savingQuestion = true;
                this.saveData.studentid = this.loggeduser._id;
                this.saveData.questionid = this.question.id;
                
                await fetch('http://localhost:5000/api/question/save',{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({id: this.loggeduser._id,
                                        questionid: questionid
                                        })
                }).then(console.log('patching successful'))
                .then(this.savingQuestion = false)
                .catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>