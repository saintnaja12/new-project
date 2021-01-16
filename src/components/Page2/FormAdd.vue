<template>
    <div id="Form">
        <b-card>
            <h1 v-if="this.id === 0">Form Create Data</h1>
            <h1 v-else>Form Edit Data</h1>
            <b-form @submit.prevent="addDataTable()">
                <b-row>
                    <b-col cols="sm-6">
                        <Name />
                    </b-col>

                    <b-col cols="sm-6">
                        <Lastname />
                    </b-col>

                    <b-col cols="sm-2">
                        <Calendar />
                    </b-col>

                    <b-col cols="sm-10">
                        <Date />
                    </b-col>

                    <b-col cols="12">
                        <Remark />
                    </b-col>

                    <b-col cols="6">
                        <btnSubmit></btnSubmit>
                    </b-col>

                    <b-col cols="6">
                        <btnCancel></btnCancel>
                    </b-col>

                </b-row>
            </b-form>
        </b-card>
    </div>
</template>

<script>

    import Name from './Name'
    import Lastname from './Lastname'
    import Calendar from './Calendar'
    import Date from './Date'
    import Remark from './Remark'

    import btnSubmit from './btnSubmit'
    import btnCancel from './btnCancel'

    export default {
        name: 'Form',
        components:{
            Name,
            Lastname,
            Calendar,
            Date,
            Remark,

            btnSubmit,
            btnCancel
        },
        data() {
            return {
                id:0,  
            }
        },
        methods: {
            addDataTable() {
                let payload = {
                    id: this.id,
                    name: this.name,
                    lastname: this.lastname,
                    remark: this.remark,

                    date: this.date,
                    dateStart: this.dateStart,
                    dateEnd: this.dateEnd
                }
                this.$store.dispatch('addDataTable', payload)
                alert('Success!')

                this.name = ''
                this.lastname = ''
                this.remark = ''

                this.date = ''
                this.dateStart = null
                this.dateEnd = null

                this.$router.push('/')
            },
            showEdit(){

                if(this.getIdEdit > 0) {
                    const found = this.getDataForm.find(e => e.id === this.getIdEdit)

                    this.id = found.id
                    this.name = found.name
                    this.lastname = found.lastname
                    this.date = found.date
                    this.dateStart = found.dateStart
                    this.dateEnd = found.dateEnd
                    this.remark = found.remark
                }
            }
        },
        computed:{
            getDataForm(){
                return this.$store.getters.getDataForm
            },
            getIdEdit(){
                return this.$store.getters.getIdEdit
            },
        },
        mounted(){
            // console.log(this.getIdEdit);
            this.showEdit()
        },
        
    }
</script>

<style>

</style>