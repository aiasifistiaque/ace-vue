import Vue from 'vue';
import Router from 'vue-router';
// import ViewUsers from '@/components/ViewUsers.vue';
// import RegisterComponent from '@/components/RegisterComponent.vue';
// import UserComponent from '@/components/UserComponent.vue';
// import AllUsers from '@/components/AllUsers.vue';
// import LoginComponent from '@/components/LoginComponent.vue';
//import Home from '@/components/Home.vue';
import createQuestion from '@/components/createQuestion.vue';
import Home from '@/components/Home.vue'
import BoRComponent from '@/components/BoRComponent.vue'
import sschome from '@/components/sscHome.vue'
import ExamComponent from '@/components/ExamComponent.vue'
import PracticeComponent from '@/components/PracticeComponent.vue'
import Login from '@/components/LoginComponent.vue'
import Register from '@/components/RegisterComponent.vue'
import profile from '@/components/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/create',
        name: 'createQuestion',
        component: createQuestion
    },
    {
        path: '/ssc',
        name: 'sschome',
        component: sschome
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ssc/:board',
        name: 'BoRComponent',
        component: BoRComponent
    },
    {
        path: '/ssc/:board/:year/:course',
        name: 'ExamComponent',
        props: true,
        component: ExamComponent
    },
    {
        path: '/ssc/practice/:course',
        name: 'PracticeComponent',
        props: true,
        component: PracticeComponent
    },
    {path: '/login', name: 'Login', component: Login},
    {path: '/register', name: 'Register', component: Register},
  ]
})