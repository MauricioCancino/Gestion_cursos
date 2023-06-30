<template>
  <div>
    <v-app-bar absolute color="blue darken-4" dark>
      <div class="d-flex justify-center flex-grow-1">
        <v-btn
          @click="$router.push(`/`)"
          color="light blue"
          elevation="2"
          rounded
        >
          <v-icon left> mdi-home </v-icon>
          Home
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
</style>