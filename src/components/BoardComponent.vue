<template>
    <div class="container">
        <div class="form-group">
            <label for="BoardSelect">Select a board</label>
            <select class="form-control" id="BoardSelect" v-model="boardselect">
                <option>dhaka</option>
                <option>cumilla</option>
                <option>barishal</option>
                <option>rajshahi</option>
                <option>chattogram</option>
            </select>
        </div>
        <div class="form-group">
            <label for="YearSelect">Select year</label>
            <select class="form-control" id="YearSelect" v-model="yearselect">
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
            </select>
        </div>
        <button class="btn btn-primary" @click="search">Search</button>
        <hr>
        
        <div v-if="exams.length==0">
            <h3>no exams found</h3>
        </div>
        <div v-else>

            <div v-for="exam in exams" :key="exam">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h6 class="card-title">{{board}} board, {{year}}</h6>
                        <p>{{exam}}</p>
                        <router-link :to="{ name: 'ExamComponent', params:{ board:board, year:year, course: exam }, props:['bengali second paper'] }">Give Exam</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'boardcomponent',
    data:function(){
        return{
            boardselect:'',
            yearselect:'',
            board:'',
            year:'',
            exams:[]
        }
    },
    async created(){

    },
    methods:{
        async search(){
            this.year = this.yearselect;
            this.board = this.boardselect;
            this.findquestions();
        },

        async findquestions(){
            console.log('find question protocol initiated')
            await fetch('http://localhost:5000/api/question/'+this.board+'/'+this.year,{
                headers: {
                            'Content-Type': 'application/json;charset=utf-8',
                        },
            })
                .then(res => res.json())
                .then(res => {
                    this.exams = res;
                    console.log(this.exams);
                    console.log(this.exams.length);
                    //this.loading = false;
            })
        }
    }
    
}
</script>