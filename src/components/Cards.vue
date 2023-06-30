<template>
  <v-container class="container d-flex">
    <v-row justify="center">
        <v-col  v-for="curso in cursos" :key=curso.id>
      <v-card width="300px">
        
        <v-img
          height="200px"
          width="200px"
          :src='curso.img'
          class="m"
        >
        </v-img>
        
    <v-card-title>
        <h5>{{curso.nombre}}</h5>
    </v-card-title>
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Información
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              small
              :color="curso.color"
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Costo: {{curso.costo}}</strong>Duración: {{curso.duracion}}
                </div>
                <div class="font-weight-normal">
                  <strong>Cupos: {{curso.cupos}}</strong>Curso completado: {{curso.completado}}
                </div>
                <div class="font-weight-normal">
                  <strong>Fecha de registro:</strong> {{curso.fecha_registro}}
                </div>
                <div class="font-weight-normal">
                  <strong>Descripción:</strong> {{curso.descripcion}}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
    
    <script>

    import {mapState} from 'vuex'
  export default {
    name: 'card-comp',
    data: () => ({
        props: {
            
        },
      
    }),

    methods: {
      
    },
    computed: {
        ...mapState(['cursos'])
        },
    
  }
</script>


<style scoped>
    /* .container {
        margin-top: 75px;
    } */
    
</style>