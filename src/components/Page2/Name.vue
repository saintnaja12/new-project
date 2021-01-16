<template>
    <div>
        <b-form-group label="Name:" label-cols="sm-2" label-align="left">
            <b-form-input type="text" v-model="name" required id="name">
            </b-form-input>
        </b-form-group>
    </div>
</template>

<script>
export default {
    name:'Name',
    data(){
        return{
            name:''
        }
    }
}
</script>

<style>

</style>