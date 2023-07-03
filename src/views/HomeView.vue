<template>
  <v-container class="Mycontainer">
    <p>Lista de Cursos</p>
  <Cards/>
  </v-container>
</template>

<script>
  
  import Cards from '@/components/Cards.vue'
  export default {
    name: 'Home-view',

    components: {
      Cards
    },
  }
</script>
<style scoped>
  p {
    font-size: 40px;
    text-align: center;
    color: whitesmoke;
  }
</style>