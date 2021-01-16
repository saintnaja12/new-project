<template>
    <div>
        <b-form-group label="Lastname:" label-cols="sm-2" label-align="left">
            <b-form-input type="text" v-model="lastname" required id="lastname">
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
    }
}
</script>

<style>

</style>