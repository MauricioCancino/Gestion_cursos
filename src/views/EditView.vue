<template>
    <v-card>
        <v-card-title>
          <span class="text-h5">Datos del curso</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Nombre del curso"
                  v-model="nombre"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Url de la imagen"
                  v-model="img"
                  hint="Foto del curso"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Cupos del curso"
                  v-model="cupos"
                  type='number'
                  required
                ></v-text-field>
              </v-col>
                <v-col
                cols="12"
              >
                <v-text-field
                  label="Inscritos en el curso"
                  v-model="inscritos"
                  type='number'
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
              >
                <v-text-field
                  label="Duración del curso"
                  v-model="duracion"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
              >
                <v-text-field
                  label="Fecha del curso"
                  v-model="fecha_registro"
                  type='text'
                  required
                  disabled
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
              >
                <v-text-field
                  label="Costo del curso"
                  v-model="costo"
                  type='number'
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-textarea label="Descripción del curso"
                v-model="descripcion"
                  required
                  >
                    
                </v-textarea>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            variant="text"
            
           
          >
            Editar
          </v-btn>
          <v-btn
            color="warning"
            variant="text"
            
          >
            Limpiar formulario
          </v-btn>
          <v-btn
            color="error"
            variant="text"
           
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'edit-view',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data: function(){
        return {
      nombre:"",
      img:"",
      cupos:"",
      inscritos:"",
      duracion:"",
      fecha_registro:"",
      costo:"",
      descripcion: "",
        }
    },
    computed: {
        ...mapGetters(['getCourseById'])
    },
    methods: {
        cursoDelete(index) {
    return this.curso.splice(index,1,this.curso)
    },
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        let curso = this.getCourseById(this.id)
        console.log(curso)
        this.nombre=curso.nombre
        this.img=curso.img
        this.cupos=curso.cupos
        this.inscritos=curso.inscritos
        this.duracion=curso.duracion
        this.fecha_registro=curso.fecha_registro
        this.costo=curso.costo
        this.descripcion=curso.descripcion
    },
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>