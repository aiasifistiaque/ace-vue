const state = {
    users:[
       
    ]
};

const getters = {
    allUsers: state => state.users
}; 

const actions = {
     async fetchUsers({ commit }){
        await fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(res => {
                commit('setUsers', res); 
        })
    },
};

const mutations = {
    setUsers: (state, users) => ( state.users = users )
};

export default{
    state,
    getters,
    actions,
    mutations
}