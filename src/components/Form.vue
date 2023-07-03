<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Agregar curso
        </v-btn>
      </template>
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
            @click="addCurso"
          >
            Agregar
          </v-btn>
          <v-btn
            color="warning"
            variant="text"
            @click="dialog = false"
          >
            Limpiar formulario
          </v-btn>
          <v-btn
            color="error"
            variant="text"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    name: 'form-comp',
    data: () => ({
      dialog: false,
      nombre:"",
      img:"",
      cupos:"",
      inscritos:"",
      duracion:"",
      fecha_registro:new Date().toLocaleDateString(),
      costo:"",
      descripcion: "",
      completado:"",
      
    }),
    methods: {
        ...mapActions(['add_curso']),
        addCurso(){
            //tengo que validar
            if(this.nombre==""){
                alert("El nombre del curso debe estar relleno")
                return
            }
            if(this.img==""){
                alert("La portada debe estar rellena")
                return
            }
            if(this.cupos==""){
                alert("Los cupos deben estar rellenos")
                return
            }
            if(this.inscritos==""){
                alert("La cantidad de inscritos debe ser especificada")
                console.log(this.inscritos)
                return
            }
            if(this.duracion==""){
                alert("La duración debe ser especificada")
                return
            }
            if(this.fecha_registro== ""){
                alert("La fecha debe ser registrada")
                return
            }
            if(this.costo==""){
                alert("El costo debe ser especificado")
                return
            }
            
            
            let curso = {
                nombre:this.nombre,
                img: this.img,
                cupos: this.cupos,
                inscritos: this.inscritos,
                duracion: this.duracion,
                fecha_registro: this.fecha_registro,
                costo: this.costo,
                completado: this.completado,
                descripcion:this.descripcion
            }
            this.add_curso(curso)
            this.dialog=false
        }
    },
    
  }
</script>

<style scoped>
    
</style>