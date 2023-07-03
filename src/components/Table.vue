<template>
  <div class="about">
    <div class="contenedor">
      <v-data-table
        :headers="headers" 
        :items="cursos"
        class="elevation-1 table"
        dark
      >
        <template v-slot:[`item.completado`]="{ item }">
          <v-chip
            :color="getColor(item.completado)"
            dark
          >
            {{ item.completado ? 'Sí' : 'No' }}
          </v-chip>
        </template>
        <template v-slot:[`item.acciones`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="$router.push(`/editar/${item.id}`)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="confirmDelete( item )"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        
      >
        Reset
      </v-btn>
    </template>
      </v-data-table>
      <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          ¿Estás seguro de que deseas eliminar este curso?
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="cursoDelete(cursoEliminado)"
          >
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';

export default {
  name: 'table-comp',
  data() {
    return {
      headers: [
        { text: 'Cursos', align: 'start', value: 'nombre' },
        { text: 'Cupos', value: 'cupos' },
        { text: 'Inscritos', value: 'inscritos' },
        { text: 'Duración', value: 'duracion' },
        { text: 'Costo', value: 'costo' },
        { text: 'Terminado', value: 'completado' },
        { text: 'Fecha', value: 'fecha_registro' },
        { text: 'Acciones', value: 'acciones' },
      ],
      dialog: false,
      cursoEliminado: null
    };
  },
  computed: {
    ...mapState(['cursos']),
  },
  methods: {
    ...mapActions(['curso_delete']),
    confirmDelete(item){
      
      this.dialog=true
      this.cursoEliminado=item
    },
    cursoDelete(item){
      this.curso_delete(item)
      this.dialog=false
    },
    getColor(completado) {
      return completado ? 'green' : 'red';
      
    },

  },
};
</script>
