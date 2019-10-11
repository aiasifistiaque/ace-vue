<template>
    <div class="container">
        <br><br>
        <div v-if="quizSubmitted==false">   

            <h2>Select the correct option:</h2>
            <!-- <p>{{questions}}</p>
            <p>q:{{questions.question}}</p> -->
            <div v-if="loading">
                <h1 class="text-center">LOADING</h1>
            </div>
            <div v-if="loading==false">

                <div v-for="question in questions" v-bind:key="question._id">
                    <div>
                        <h4>{{questions.indexOf(question)+1}}: {{question.question}}</h4>
                        <input type="radio" :id="question.optionone" :name="question.optionone" :value="question.optionone" v-model="selectedAnswer[questions.indexOf(question)]">
                        <label :for="question.optionone"> A: {{question.optionone}}</label>
                        <input type="radio" :id="question.optiontwo" :name="question.optiontwo" :value="question.optiontwo" v-model="selectedAnswer[questions.indexOf(question)]">
                        <label :for="questions.optiontwo"> B: {{question.optiontwo}}</label>
                        <input type="radio" :id="question.optionthree" :name="question.optionthree" :value="question.optionthree" v-model="selectedAnswer[questions.indexOf(question)]">
                        <label :for="question.optionthree"> C: {{question.optionthree}}</label>
                        <input type="radio" :id="question.optionfour" :name="question.optionfour" :value="question.optionfour" v-model="selectedAnswer[questions.indexOf(question)]">
                        <label :for="question.optionfour"> D: {{question.optionfour}}</label><br>
                        <span>Selected answer: {{selectedAnswer[questions.indexOf(question)]}} </span><br>
                        <!-- <span>Correct answer: {{question.answer}}</span> -->
                        
                        <br><br>
                    </div>
                </div>
                <p>check answer: {{checkAnswers}}</p>
                <div v-if="checkAnswers==true">

                    <p>Score: {{score}}</p>
                    <p>{{questions[3]}}</p>
                </div>
                <button class="btn btn-primary" v-on:click="showScore()">Submit Answers</button><br>
            </div>
        </div>
        <div v-if="quizSubmitted==true && viewAnswers==false">
            <h1 class="text-center">Your Score is:</h1>
            <h3 class="text-center">{{score}}/{{totalQuestions}}</h3>
            <div class="text-ceter">  
                <button class="btn btn-success btn-block" v-on:click="viewAnswers=true">View Answers</button>
                <button class="btn btn-primary btn-block" v-on:click="newQuiz()">Take Another Test</button>
            </div>
        </div>
            <div v-if="viewAnswers == true">
                <br>
                <h5>Score: {{score}}/{{totalQuestions}}</h5>
                <div v-for="question in questions" v-bind:key="question.id">
                    <hr>
                    <h6>Question: {{questions.indexOf(question)+1}}</h6><hr>
                    <div v-if="selectedAnswer[questions.indexOf(question)] != question.answer">
                        <span class="badge badge-danger">Wrong Answer</span><h5>Q:  {{question.question}}</h5>
                        
                    </div>
                    <div v-else-if="selectedAnswer[questions.indexOf(question)] == question.answer">
                        <span class="badge badge-success">Correct Answer</span><h5>Q:  {{question.question}}</h5>

                    </div>
                    
                    <div v-if="selectedAnswer[questions.indexOf(question)]==null">
                        <span class="badge badge-warning">
                            ***this question was not answered 
                        </span>
                    </div>
                        <span class="badge badge-success text-bold">
                            **Correct answer: {{question.answer}}
                        </span>
                    <div v-if="question.answer==question.optionone || selectedAnswer[questions.indexOf(question)] == question.optionone">
                        <div v-if="selectedAnswer[questions.indexOf(question)]==question.optionone && question.answer == selectedAnswer[questions.indexOf(question)]">
                            <div class="alert alert-success" role="alert">
                                A: {{question.optionone}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer[questions.indexOf(question)]==question.optionone && question.answer != selectedAnswer[questions.indexOf(question)]">
                            <div class="alert alert-danger" role="alert">
                                A: {{question.optionone}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer[questions.indexOf(question)]!=question.optionone && question.answer == question.optionone">
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
                    <div v-if="question.answer==question.optiontwo || selectedAnswer[questions.indexOf(question)] == question.optiontwo">
                        <div v-if="selectedAnswer[questions.indexOf(question)]==question.optiontwo && question.answer == selectedAnswer[questions.indexOf(question)]">
                            <div class="alert alert-success" role="alert">
                                B: {{question.optiontwo}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer[questions.indexOf(question)]==question.optiontwo && question.answer != selectedAnswer[questions.indexOf(question)]">
                            <div class="alert alert-danger" role="alert">
                                B: {{question.optiontwo}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer[questions.indexOf(question)]!=question.optiontwo && question.answer == question.optiontwo">
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
                    <div v-if="question.answer==question.optionthree || selectedAnswer[questions.indexOf(question)] == question.optionthree">
                        <div v-if="selectedAnswer[questions.indexOf(question)]==question.optionthree && question.answer == selectedAnswer[questions.indexOf(question)]">
                            <div class="alert alert-success" role="alert">
                                C: {{question.optionthree}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer[questions.indexOf(question)]==question.optionthree && question.answer != selectedAnswer[questions.indexOf(question)]">
                            <div class="alert alert-danger" role="alert">
                                C: {{question.optionthree}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer[questions.indexOf(question)]!=question.optionthree && question.answer == question.optionthree">
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
                    <div v-if="question.answer==question.optionfour || selectedAnswer[questions.indexOf(question)] == question.optionfour">
                        <div v-if="selectedAnswer[questions.indexOf(question)]==question.optionfour && question.answer == selectedAnswer[questions.indexOf(question)]">
                            <div class="alert alert-success" role="alert">
                                D: {{question.optionfour}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer[questions.indexOf(question)]==question.optionfour && question.answer != selectedAnswer[questions.indexOf(question)]">
                            <div class="alert alert-danger" role="alert">
                                D: {{question.optionfour}}
                            </div>
                        </div>
                        <div v-else-if="selectedAnswer[questions.indexOf(question)]!=question.optionfour && question.answer == question.optionfour">
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
                <button class="btn btn-link" v-on:click="viewAnswers=false">Go back</button>
                <button class="btn btn-success" v-on:click="newQuiz()">Take a new test</button><br><br>
            </div>
    </div>    
</template>

<script>
export default {
    name:'ExamComponent',
    data:function(){
        return{
            questions:[],
            selectedAnswer:[],
            loading:'',
            i:'',
            score:'',
            checkAnswers:'',
            q:'',
            a:'',
            totalQuestions:'',
            quizSubmitted:'',
            viewAnswers:'',
            board:'',
            year:'',
            course:''
        }
    },
    props:{
        //course: String
    },
    created(){
        this.board = this.$route.params.board;
        this.year = this.$route.params.year;
        this.course = this.$route.params.course;
        console.log('the course is'+this.course)
        this.fetch_questions();
        this.loading = true;
        this.checkAnswers = true;
        this.quizSubmitted = false;
        this.totalQuestions = 0;
        
    },
    methods:{
        fetch_questions(){
            fetch('http://localhost:5000/api/question/'+this.board+'/'+this.year+'/'+this.course)
                .then(res => res.json())
                .then(res => {
                    this.questions = res;
                    this.loading = false;
                    this.totalQuestions = this.questions.length;
                    this.viewAnswers = false;
                    
            })
        },
        newQuiz(){
            this.quizSubmitted = false;
            this.loading = true;
            this.totalQuestions = 0;
            this.viewAnswers = false;
            this.fetch_questions();
        },
        showScore(){
            this.score = 0;
            //this.checkAnswers = false;
            let j = 0;
            this.quizSubmitted = true;
            //console.log(this.selectedAnswer.length);
            for(j=0;j<this.selectedAnswer.length;j++){
                // console.log(this.selectedAnswer[j]);
                // console.log(this.questions[j].answer);
                if(this.selectedAnswer[j]==this.questions[j].answer){
                    this.score++;
                }
            }
                //console.log(this.questions);
            // for(this.question in this.questions){
            //     if(this.question.answer==this.selectedAnswer[this.question.id]){
            //         console.log(this.score);
            //         console.log(this.question.id);
            //         this.score = this.score + 10;
            //     }
            },
        viewAnswerFunction(){
            this.viewAnswers = true;
        }
        }
    }
</script>

