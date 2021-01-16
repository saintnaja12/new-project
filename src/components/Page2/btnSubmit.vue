<template>
  <div>
    <b-button v-if="this.id === 0" type="submit" variant="success ml-5">Create</b-button>
    <b-button v-else type="submit" variant="warning ml-5">Edit</b-button>
  </div>
</template>

<script>
export default {
    name: 'btnSubmit',
    data (){
      return {
        
      }
    }
}
</script>

<style>

</style>