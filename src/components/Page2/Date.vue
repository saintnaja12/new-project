<template>
    <div>
        <b-form-group 
            v-if="dateOption == `Range` && dateEdit == ''" 
            label-cols="sm-2" 
            label-align="left">
            <b-row>
                <b-col cols="sm-6">
                    <b-form-group 
                        label="Date range start:" 
                        label-align="left"
                    >
                        <b-form-datepicker 
                            id="dateStart" 
                            v-model="dateStart" 
                            class="mb-2" 
                            required
                            :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }"
                            :hide-header="false" 
                            @input="$emit('startInput', dateStart)"
                        >
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>
                <b-col cols="sm-6">
                    <b-form-group label="Date range end:" label-align="left">
                        <b-form-datepicker 
                            id="dateEnd" 
                            v-model="dateEnd" 
                            class="mb-2" 
                            required
                            :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }"
                            :hide-header="false"
                            :min="dateStart" 
                            @input="$emit('endInput', dateEnd)"
                        >
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form-group>

        <b-form-group 
            v-else 
            label="Date:" 
            label-cols="sm-2" 
            label-align="left"
        >
            <b-form-datepicker 
                id="date" 
                v-model="date" 
                class="mb-2" 
                required 
                data-date-language="th"
                :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }"
                :hide-header="false" 
                @input="$emit('dateInput', date)"
                >
            </b-form-datepicker>
        </b-form-group>
    </div>
</template>

<script>
export default {
    name: 'Date',
    data(){
        return {
            date: '',
            dateStart: '',
            dateEnd: '',
        }
    },
    props:[
        'dateOption',
        'dateEdit',
        'startEdit', 
        'endEdit', 
    ],
    methods:{
        edit(){
            this.date = this.dateEdit
            this.dateStart = this.startEdit
            this.dateEnd = this.endEdit
        },
    },
    mounted(){
        this.edit()
    },
}
</script>

<style>

</style>