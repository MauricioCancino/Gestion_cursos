<template>
  <v-container class="Mycontainer">
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
  .Mycontainer{
    height: calc(100vh - 64px);
  }
</style>