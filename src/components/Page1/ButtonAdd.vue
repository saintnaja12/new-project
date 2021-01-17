<template>
  <div id="ButtonAdd">
      <b-button type="button" variant="info"><router-link :to="{name: 'Form', params: {getIdEdit}}" id="linkAdd">Open form add</router-link></b-button> 
      <router-view/>
  </div>
</template>

<script>
export default {
    name:'ButtonAdd',
    computed:{
        getIdEdit(){
            return this.$store.getters.getIdEdit
        },
    }
}
</script>

<style scoped>

#linkAdd{
    color: white
}

</style>