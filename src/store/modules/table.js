
const actions = {
    addDataTable({ commit }, payload){
        commit("ADD_DATA_TABLE", {payload})
    },
    postIdEdit({commit}, payload){
        commit("POST_ID_EDIT", {payload})
    },
    editDataTable({commit}, payload){
        commit("EDIT_DATA_TABLE", {payload})
    }
}

const mutations = {
    ADD_DATA_TABLE(state, {payload}){
        if (payload.id == 0){
            payload.id = state.dataForm.length+1
            state.dataForm.push(payload) 
        }
        
    },
    POST_ID_EDIT(state, {payload}){
        state.id = payload
    },
    EDIT_DATA_TABLE(state, {payload}){
        state.dataForm.splice(payload, 1)
        state.dataForm[payload.id] = {
            id: payload.id,
            name: payload.name,
            lastname: payload.lastname,
            date: payload.date,
            dateStart: payload.dateStart,
            dateEnd: payload.dateEnd,
            remark: payload.remark
        }
    }
    
}

const state = {
    dataForm:[],
    dataEdit:[],
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