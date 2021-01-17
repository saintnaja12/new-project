<template>
  <div>
    <b-button v-if="getIdEdit === 0" type="button" variant="success ml-5" @click="add()">Create</b-button>
    <b-button v-else type="button" variant="warning ml-5">Edit</b-button>
  </div>
</template>

<script>
export default {
    name: 'btnSubmit',
    data (){
      return {
        
      }
    },
    props:['formCommit'],
    computed:{
      getIdEdit(){
          return this.$store.getters.getIdEdit
      },
    },
    methods:{
      add(){
        alert('success')
        this.$store.dispatch("addDataTable", this.formCommit)
        this.$router.push('/')
      }
    },

}
</script>

<style>

</style>