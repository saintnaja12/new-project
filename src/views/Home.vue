<template>
  <div class="home">
        <b-container>
            <b-row>
                <b-col cols="6"><ButtonAdd /></b-col>
                <b-col cols="6"><Search /></b-col>
                <b-col><Table /></b-col>
            </b-row>
        </b-container>
        
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Page1/Search.vue'
import ButtonAdd from '@/components/Page1/ButtonAdd.vue'
import Table from '@/components/Page1/Table.vue'

export default {
  name: 'Home',
  components: {
    Search,
    ButtonAdd,
    Table,
  }
}
</script>
