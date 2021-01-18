<template>
  <div id="ButtonAdd">
        <b-button 
            type="button" 
            variant="info"
        >
            <router-link 
                :to="{name: 'Form'}" 
                id="linkAdd"
            >
                Open form add
            </router-link>
        </b-button> 
      <router-view/>
  </div>
</template>

<script>
export default {
    name:'ButtonAdd',
    data(){
        return {

        }
    }
}
</script>

<style scoped>

#linkAdd{
    color: white
}

</style>