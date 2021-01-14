<template>
    <div id="Form">
        <b-card>
            <h1>Form Add Data</h1>
            <b-form @submit.prevent="addDataTable()">
                <b-row>
                    <b-col cols="sm-6">
                        <b-form-group label="Name:" label-cols="sm-2" label-align="left">
                            <b-form-input type="text" v-model="name" required id="name">
                            </b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col cols="sm-6">
                        <b-form-group label="Lastname:" label-cols="sm-2" label-align="left">
                            <b-form-input type="text" v-model="lastname" required id="lastname">
                            </b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col cols="sm-6">
                        <b-form-group label="Calendar:" label-cols="sm-2" label-align="left">
                            <b-form-select v-model="selected" :options="selectDate" ></b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col cols="sm-6">
                        <b-form-group v-if="selected == `Date`" label="Date:" label-cols="sm-2" label-align="left">
                            <b-form-datepicker id="date" v-model="date" class="mb-2" required data-date-language="th">
                            </b-form-datepicker>
                        </b-form-group>
                        <b-form-group v-else label-cols="sm-2" label-align="left" inline>
                            <b-form-group label="Date range start:" label-align="left">
                                <b-form-datepicker id="dateStart" v-model="dateStart" class="mb-2" required>
                                </b-form-datepicker>
                            </b-form-group>
                            <b-form-group label="Date range end:" label-align="left">
                                <b-form-datepicker id="dateEnd" v-model="dateEnd" class="mb-2" required>
                                </b-form-datepicker>
                            </b-form-group>  
                        </b-form-group>
                    </b-col>

                    <b-col cols="12">
                        <b-form-group label="Remark:" label-cols="sm-1" label-align="left">
                            <b-form-textarea type="text" v-model="remark" required rows="3" max-rows="6" id="remark">
                            </b-form-textarea>
                        </b-form-group>
                    </b-col>

                </b-row>

                <b-button type="submit" variant="success mr-5">Create</b-button>
                <b-button type="button" variant="danger ml-5">Cancel</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                name: '',
                lastname: '',
                remark: '',

                date: '',
                dateStart: '',
                dateEnd: '',

                selected: 'Date',
                selectDate: [
                    { value: 'Date', text: 'Date'},
                    { value: 'Range', text: 'Range'},
                ],   
            }
        },
        methods:{
            addDataTable(){
                let payload = {
                    name: this.name,
                    lastname: this.lastname,
                    remark: this.remark,

                    date: this.date,
                    dateStart: this.dateStart,
                    dateEnd: this.dateEnd
                }
                this.$store.dispatch('addDataTable', payload)
                alert('Success!')
                console.log(payload);                
            }
        }
    }
</script>

<style>

</style>