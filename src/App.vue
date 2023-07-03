<template>
  <v-app class="Mycontainer">
  <Navbar/>
  <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Navbar
  }
};
</script>
<style scoped>
  .Mycontainer {
    background-image: url(https://media.discordapp.net/attachments/397619553334591500/1125207326085885962/image.png?width=1183&height=662);
    background-size:100%;
    background-attachment: fixed;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
