<template>
    <div id="Table">
        <b-table class="mt-5" striped hover :items="getDataForm" border></b-table>
    </div>
</template>

<script>
export default {
    name: 'Table',
    data() {
        return {
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ]
        }
    },
    computed:{
        getDataForm(){
            return this.$store.getters.getDataForm
        }
    }
}
</script>

<style>

</style>