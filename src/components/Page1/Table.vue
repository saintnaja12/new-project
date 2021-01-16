<template>
    <div id="Table">
        <b-table class="mt-5" responsive bordered striped hover :items="getDataForm" :filter="searchDataTable" :fields="fields">
            <template #cell(actions)="row">
                <b-button size="sm" @click="editDataForm(row.item)" variant="warning">
                    <b-icon icon="pencil-square"></b-icon>
                </b-button>
            </template>
        </b-table>
        <!-- {{searchDataTable}} -->
    </div>
</template>

<script>
// import Search from './Search'

export default {
    name: 'Table',
    components:{
        // Search
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
        }
    },
    methods:{
        editDataForm(item){
            this.$store.dispatch('postIdEdit', item.id)
            this.$router.push('/Form')
        },
    }
}
</script>

<style>

</style>