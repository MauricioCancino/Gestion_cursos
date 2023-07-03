<template>
  <v-container class="container d-flex">
    <v-row justify="center">
        <v-col cols="12" md="4" sm="6" v-for="curso in cursos" :key=curso.id>
      <v-card width="400px" class="mycard">
        
        <v-img
          height="200px"
          width="200px"
          :src='curso.img'
          class="mx-auto"
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
            :color="curso.color">
                <div class="font-weight-normal">
                  <strong>Costo: {{curso.costo}}</strong>
                  <div>
                    <span>Duración: {{curso.duracion}}</span>
                </div>
                </div>
            </v-timeline-item>
            <v-timeline-item
            small
            :color="curso.color">
               <div class="font-weight-normal">
                  <strong>Cupos: {{curso.cupos}}</strong>
                </div>
                <div>Curso completado: {{curso.completado ? "Sí" : "No"}}</div>
            </v-timeline-item>
            <v-timeline-item
            small
            :color="curso.color">
                <div class="font-weight-normal">
                  <strong>Fecha de registro:</strong> {{curso.fecha_registro}}
                </div>
            </v-timeline-item>
             <v-timeline-item
            small
            :color="curso.color">
                <div class="font-weight-normal">
                  <strong>Descripción:</strong> {{curso.descripcion.slice(0,86)}}..
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
            
    }),

    methods: {
      
    },
    computed: {
        ...mapState(['cursos'])
        },
    
  }
</script>


<style scoped>
    .mycard{
        background-image: url(https://img.freepik.com/vector-gratis/patron-codigo-binario-sobre-fondo-azul-oscuro_53876-116183.jpg);
         background-size:100%;
    }
    h5 {
        color: whitesmoke;
    }
    
</style>