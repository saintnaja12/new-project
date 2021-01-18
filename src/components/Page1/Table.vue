<template>
    <div id="Table">
        <b-table 
            class="mt-5" 
            responsive 
            bordered 
            striped 
            hover 
            :items="getDataForm" 
            :filter="searchDataTable" 
            :fields="fields"
        >
            <template #cell(date)="data">
              <span v-if="data.value != ''">{{formatDate(data.value)}}</span> 
            </template>
            <template #cell(dateStart)="data">
               <span v-if="data.value != ''">{{formatDate(data.value)}}</span> 
            </template>
            <template #cell(dateEnd)="data">
               <span v-if="data.value != ''">{{formatDate(data.value)}}</span> 
            </template>

            <template 
                #cell(actions)="row"
            >
                <b-button 
                    size="sm" 
                    @click="editDataForm(row.item)" 
                    variant="warning"
                >
                    <b-icon icon="pencil-square"></b-icon>
                </b-button>
            </template>
        </b-table>
        <!-- {{searchDataTable}} -->
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'Table',
    components:{
    },
    props: ['searchDataTable'],
    data() {
        return {
            fields:[
                {
                    key: 'name',                    
                },
                {
                    key: 'lastname'
                },
                {
                    key: 'date'
                },
                {
                    key: 'dateStart'
                },
                {
                    key: 'dateEnd'
                },
                {
                    key: 'remark'
                },
                {
                    key: 'actions'
                },
            ]
        }
    },
    computed:{
        getDataForm(){
            return this.$store.getters.getDataForm
        },
    },
    methods:{
        editDataForm(item){
            this.$store.dispatch('postIdEdit', item.id)
            this.$router.push('/Form')
        },
        formatDate(value){
            return moment(value).format('L')
        }
    },

}
</script>

<style>

</style>