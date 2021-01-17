<template>
    <div>
        <b-form-group label="Lastname:" label-cols="sm-2" label-align="left">
            <b-form-input type="text" v-model="lastname" @input="$emit('lastnameInput', lastname)" required id="lastname">
            </b-form-input>
        </b-form-group>
    </div>
</template>

<script>
export default {
    name: 'Lastname',
    data(){
        return {
            lastname:''
        }
    },
    props:['lastnameEdit'],
    methods:{
        edit(){
            this.lastname = this.lastnameEdit
            console.log(this.lastname);
        }
    },
    mounted(){
        this.edit()
    }
}
</script>

<style>

</style>