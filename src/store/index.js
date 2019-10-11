import Vuex from 'vuex';
import Vue from 'vue';
import users from './modules/users';
import auth from './modules/authmodule';
import createPersistedState from 'vuex-persistedstate';

//Load Vuex
Vue.use(Vuex);



//Create Store
export default new Vuex.Store({
    modules: {
        users,
        auth
    },
    plugins: [createPersistedState()]
});
