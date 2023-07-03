<template>
    <div >
        <v-alert
      dense
      text
      color= 'purple'
    >
    <v-icon
    color='purple'>mdi-account-multiple</v-icon>
      Cantidad total de alumnos permitidos: <strong>{{totalCupos}}</strong> alumnos
    </v-alert>
    <v-alert
      dense
      text
      color= 'light-blue'
    >
    <v-icon
    color='light-blue'>mdi-account-check</v-icon>
      Cantidad total de alumnos inscritos: <strong>{{totalInscritos}}</strong> alumnos
    </v-alert>
    <v-alert
      dense
      text
      color= 'red'
    >
    <v-icon
    color='red'>mdi-account-plus</v-icon>
      Cantidad total de cupos restantes:  <strong>{{alumnosRestantes}}</strong> alumnos
    </v-alert>
    <v-alert
      dense
      text
      color='pink'
    >
    <v-icon
    color='pink'>mdi-block-helper</v-icon>
      Cantidad total de cursos terminados: <strong>{{cursosTerminados}}</strong> cursos
    </v-alert>
    <v-alert
      dense
      text
      color='lime'
    >
    <v-icon
    color='lime'>mdi-bell-ring</v-icon>
      Cantidad total de cursos activos: <strong>{{cursosActivos}}</strong> cursos
    </v-alert>
    <v-alert
      dense
      text
      color='orange'
    >
    <v-icon
    color='orange'>mdi-bell-ring</v-icon>
      Cantidad total de cursos: <strong>{{totalCursos}}</strong> cursos
    </v-alert>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name: 'alerts-comp',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['cursos']),
        ...mapGetters(['totalCupos', 'totalInscritos','alumnosRestantes', 'cursosTerminados', 'cursosActivos', 'totalCursos'])
    },
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>