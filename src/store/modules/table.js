
const actions = {
    addDataTable({ commit }, payload){
        console.log(payload);
        commit("ADD_DATA_TABLE", {payload})
    }
}

const mutations = {
    ADD_DATA_TABLE(state, {payload}){
        state.dataForm.push(payload)
    }
}

const state = {
    dataForm:[]
}

const getters = {
    getDataForm: state => {
        return state.dataForm
    }
}




export default {
    state,
    getters,
    mutations,
    actions
}