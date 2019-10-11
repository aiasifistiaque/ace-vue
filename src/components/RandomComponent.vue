<template>
    <div class="container">
        <div class="form-group">
            <label for="BoardSelect">Select a Course</label>
            <select class="form-control" id="COurseSelect" v-model="courseSelect">
                <option>bengali second paper</option>                
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
                        <!-- <h6 class="card-title">{{board}} board, {{year}}</h6> -->
                        <p>{{exam}}</p>
                        <router-link :to="{ name: 'PracticeComponent', params:{ course: exam }, props:['bengali second paper'] }">Give Exam</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'randomcomponent',
    data:function(){
        return{
            boardselect:'',
            yearselect:'',
            courseSelect:'',
            course:'',
            board:'',
            year:'',
            exams:[]
        }
    },
    async created(){

    },
    methods:{
        async search(){
            this.course = this.courseSelect;
            this.findquestions();
        },

        async findquestions(){
            console.log('find question protocol initiated')
            await fetch('http://localhost:5000/api/question/'+this.course,{
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