<template>
  <div class="Search">
    <b-form>
      <b-input-group>
        <b-form-input 
          v-model="search" 
          placeholder="Search" 
          id="search" 
          type="search" 
          @input="$emit('searchData', search)"
        >
        </b-form-input>
        <b-input-group-append>
          <b-button 
            :disabled="!search" 
            @click="search = ''"
          >
            Clear
          </b-button>
        </b-input-group-append>
      </b-input-group>
      
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data(){
    return{
      search: ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
