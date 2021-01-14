<template>
  <div class="Search">
    <b-form>
      <b-form-input placeholder="Search" ></b-form-input>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  filteredList() {
    return this.postList.filter(post => {
      return post.title.toLowerCase().includes(this.search.toLowerCase())
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
