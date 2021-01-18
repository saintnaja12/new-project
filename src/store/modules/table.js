// import moment from 'moment'

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

            // if(payload.date != ''){
            //     payload.date = moment(payload.date).format('L')
            //     payload.date.toString()
            //     console.log(payload.date);
            // }
            // else if(payload.dateStart != '' && payload.dateEnd != ''){
            //     payload.dateStart = moment(payload.dateStart).format('L')
            //     payload.dateEnd = moment(payload.dateEnd).format('L')
            // }
            
            state.dataForm.push(payload) 
        }
        
    },
    POST_ID_EDIT(state, {payload}){
        state.id = payload
    },
    EDIT_DATA_TABLE(state, {payload}){

        // if(payload.date != ''){
        //     payload.date = moment(payload.date).format('L')
        // }
        // else if(payload.dateStart != '' && payload.dateEnd != ''){
        //     payload.dateStart = moment(payload.dateStart).format('L')
        //     payload.dateEnd = moment(payload.dateEnd).format('L')
        // }

        state.dataForm.splice(payload.id -1)

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