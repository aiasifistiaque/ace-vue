<template>
    <div>
        <div class="container">
            <input type="text" v-model="board" placeholder="Name of board">
            <input type="text" v-model="year" placeholder="year">
            <input type="text" v-model="subject" placeholder="subject">
            <input type="medium" v-model="medium" placeholder="medium">
        </div>
        <br>
        <div class="container">
            <h3>Enter the questions here</h3>

            <div>
                <hr>
                
                <div >

                    <form @submit.prevent="handleSubmit">
                        <textarea type="text" class="form-control" v-model="question" placeholder="question" rows="3" required></textarea><br>
                        <input type="text" class="form-control" v-model="optionone" placeholder="option one" required>
                        <input type="text" class="form-control" v-model="optiontwo" placeholder="option two" required>
                        <input type="text" class="form-control" v-model="optionthree" placeholder="option three" required>
                        <input type="text" class="form-control" v-model="optionfour" placeholder="option four" required><br>
                        <input type="text" class="form-control" v-model="answer" placeholder="answer" required>
                        <br>
                        <button type="submit" class="btn btn-primary">save question</button>
                    </form>
                </div>
                
                
            </div>

            <hr>
        </div>
    </div>
</template>
<script>
export default {
    name: 'createQuestion',
    data:function(){
        return{
            board:'',
            year:'',
            subject:'',
            medium:'',
            questions:'',
            question:'',
            optionone:'',
            optiontwo:'',
            optionthree:'',
            optionfour:'',
            answer:'',
            formindex:''
            
        }
    },
    created(){

    },
    methods:{
        async handleSubmit(){
            // this.questions[e] = this.question;
            // console.log(this.questions);
            // console.log("event index is "+e);
            console.log('form submit initiated');
            // console.log(this.question);
            await fetch('http://localhost:5000/api/question',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({question: this.question,
                                  optionone: this.optionone,
                                  optiontwo: this.optiontwo,
                                  optionthree: this.optionthree,
                                  optionfour: this.optionfour,
                                  answer: this.answer,
                                  course: this.subject,
                                  board: this.board,
                                  year: this.year,
                                  medium: this.medium
                                })
        }).then(res => res.json())
        .catch((err)=> console.log(err))

        this.question = this.optionone = this.optiontwo = this.optionfour = this.optionthree = this.answer = '';
        }
        
    }
}
</script>