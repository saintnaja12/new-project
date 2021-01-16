<template>
    <div>
        <b-form-group label="Remark:" label-cols="sm-1" label-align="left">
            <b-form-textarea type="text" v-model="remark" required rows="3" max-rows="6" id="remark">
            </b-form-textarea>
        </b-form-group>
    </div>
</template>

<script>
export default {
    name:'Remark',
    data(){
        return {
            remark: ''
        }
    }
}
</script>

<style>

</style>