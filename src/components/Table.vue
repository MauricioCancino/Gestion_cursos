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
        @click="cursoDelete( item )"
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
    };
  },
  computed: {
    ...mapState(['cursos']),
  },
  methods: {
    getColor(completado) {
      return completado ? 'green' : 'red';
    },
  },
  actions: {
    ...mapActions(['curso_delete']),
    cursoDelete(item){
      this.curso_delete(item)
    }
  }
};
</script>
