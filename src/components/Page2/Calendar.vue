<template>
    <div>
        <b-form-group label="Calendar:" label-cols="sm-2" label-align="left">
            <b-form-select v-model="selected" :options="selectDate" ></b-form-select>
        </b-form-group>
    </div>
</template>

<script>
export default {
    name:'Calendar',
    data(){
        return{
            selected: 'Date',
            selectDate: [{
                    value: 'Date',
                    text: 'Date'
                },
                {
                    value: 'Range',
                    text: 'Range'
                },
            ],
        }
    },     
}
</script>

<style>

</style>