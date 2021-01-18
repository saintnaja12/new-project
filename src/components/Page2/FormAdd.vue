<template>
    <div id="Form">
        <b-card>
            <h1 v-if="form.id == 0">Form Create Data</h1>
            <h1 v-else>Form Edit Data</h1>
            <b-form>
                <b-row>
                    <b-col cols="sm-6">
                        <Name 
                            @nameInput="nameGet" 
                            @resetData="resetData" 
                            :nameEdit="form.name" 
                        />
                    </b-col>

                    <b-col cols="sm-6">
                        <Lastname 
                            @lastnameInput="lastnameGet" 
                            :lastnameEdit="form.lastname"
                        />
                    </b-col>

                    <b-col cols="sm-2">
                        <Calendar 
                            @selectedDate="getSelectedDated" 
                            :dateEdit="form.date"
                            :startEdit="form.dateStart"
                            :endEdit="form.dateEnd"
                        />
                    </b-col>

                    <b-col cols="sm-10">
                        <Date 
                            :dateOption="selectedDate" 
                            @dateInput="dateGet" 
                            @startInput="startGet" 
                            @endInput="endGet"
                            :dateEdit="form.date"
                            :startEdit="form.dateStart"
                            :endEdit="form.dateEnd"
                        />
                    </b-col>

                    <b-col cols="12">
                        <Remark 
                            @remarkInput="remarkGet" 
                            :remarkEdit="form.remark"
                        />
                    </b-col>

                    <b-col cols="6">
                        <btnSubmit
                            :formCommit="form"
                        ></btnSubmit>
                    </b-col>

                    <b-col cols="6">
                        <btnCancel
                            @getResetData="resetData"
                        ></btnCancel>
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
                selectedDate: '', 
                
                form:{
                    id:0, 
                    name: '',
                    lastname: '',
                    date: '',
                    dateStart: '',
                    dateEnd: '',
                    remark: ''
                },
                
            }
        },
        methods: {
            // commit all 
            getSelectedDated(selectedParam){
                this.selectedDate = selectedParam
            },
            nameGet(nameParam){
                this.form.name = nameParam
            },
            lastnameGet(lastnameParam){
                this.form.lastname = lastnameParam
            },
            dateGet(dateParam){
                this.form.date = dateParam
            },
            startGet(startParam){
                this.form.dateStart = startParam
            },
            endGet(endParam){
                this.form.dateEnd = endParam
            },
            remarkGet(remarkParam){
                this.form.remark = remarkParam
            },

            resetData(){
                return this.form
            },

            showEdit(){
                if(this.getIdEdit > 0) {
                    const found = this.getDataForm.find(e => e.id === this.getIdEdit)
                    this.form.id = found.id
                    this.form.name = found.name
                    this.form.lastname = found.lastname
                    this.form.date = found.date
                    this.form.dateStart = found.dateStart
                    this.form.dateEnd = found.dateEnd
                    this.form.remark = found.remark
                }
            },
        },
        computed:{
            getDataForm(){
                return this.$store.getters.getDataForm
            },
            getIdEdit(){
                return this.$store.getters.getIdEdit
            },
        },
        created(){
            this.showEdit()
        }
        
    }
</script>

<style>

</style>