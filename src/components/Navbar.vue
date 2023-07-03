<template>
  <div>
    <v-app-bar color="purple darken-2" dark>
      <div id="botones" class="d-flex justify-end flex-grow-1">
        <v-btn @click="$router.push(`/`)" color="transparent" elevation="2">
          <v-icon left> mdi-home </v-icon>
        </v-btn>
        <v-btn @click="$router.push(`/administracion`)" color="transparent" elevation="2">
          <v-icon left> mdi-tools </v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "nav-comp",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
#botones{
  gap: 5px;
}
</style>