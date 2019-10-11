const state = {
    authtoken:'',
    loggeduser:{},
    loggedin: false
}

const getters = {
    authtoken: state => state.authtoken,
    loggedin: state => state.loggedin,
    loggeduser: state => state.loggeduser
}

const actions = {
    async authlogout({ commit }){
        commit('setloginfo', false);
        commit('setToken', null);
        commit('setUser', {});
    },

    async fetchToken({ commit }, user){
        console.log('fetch token protocol initiated')
        console.log(user)
        await fetch('http://localhost:5000/auth/login',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({email: user.email,
                                  password: user.password
                                })
        }).then(res => res.json())
          .then(res => {
                commit('setUser', res.user);
                commit('setToken', res.token);
                commit('setloginfo', true);
                console.log(res.user.firstname);
        }).catch((err) => {
            console.log(err);
            commit('setloginfo', false);
            commit('setToken', null);
            commit('setUser', {});
        })
    },
}

const mutations = {
    setToken: (state, token) => ( state.authtoken = token ),
    setloginfo: (state, loginfo) => ( state.loggedin = loginfo ),
    setUser: (state, user) => ( state.loggeduser = user )
}

export default{
    state,
    getters,
    actions,
    mutations
}