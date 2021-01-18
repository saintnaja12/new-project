<template>
  <div>
    <b-button 
      v-if="getIdEdit === 0" 
      type="button" 
      variant="success ml-5" 
      @click="add()"
    >
      Create
    </b-button>
    <b-button 
      v-else 
      type="button" 
      variant="warning ml-5" 
      @click="edit()"
    >
      Edit
    </b-button>
  </div>
</template>

<script>
export default {
    name: 'btnSubmit',
    data (){
      return {
        formProps : ''
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
        this.$store.dispatch("addDataTable", this.formCommit).then(this.close())
        alert('Create success')
        this.$router.push('/')
      },
      close(){
        this.formCommit = ''
      },
      edit(){
        this.$store.dispatch("editDataTable", this.formCommit).then(this.close())
        console.log(this.formCommit);
        alert('Edit success')
        this.$router.push('/')
      },
    },
}
</script>

<style>

</style>