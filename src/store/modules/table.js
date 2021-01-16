
const actions = {
    addDataTable({ commit }, payload){
        commit("ADD_DATA_TABLE", {payload})
    },
    postIdEdit({commit}, payload){
        commit("POST_ID_EDIT", {payload})
    },
    
}

const mutations = {
    ADD_DATA_TABLE(state, {payload}){
        payload.id = state.dataForm.length+1
        state.dataForm.push(payload)

    },
    POST_ID_EDIT(state, {payload}){
        state.id = payload
    }
}

const state = {
    dataForm:[],
    id: 0
}

const getters = {
    getDataForm: state => {
        return state.dataForm
    },
    getIdEdit: state => {
        return state.id
    }
}




export default {
    state,
    getters,
    mutations,
    actions
}