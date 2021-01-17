<template>
    <div>
      <b-button type="button" variant="danger mr-5" @click="$emit('resetData',form)">Cancel</b-button>
    </div>
</template>

<script>
export default {
    name: 'btnCancel',
    data(){
      {
        return {
          form:{
            name: '',
            lastname: '',
            date: '',
            dateStart: '',
            dateEnd: '',
            remark: ''
          },
        }
      }
    },
}
</script>

<style>

</style>