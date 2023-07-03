import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [
      { 
        id: 1, 
        img: 'https://i.blogs.es/545cf8/es6-logo/450_1000.png', 
        nombre: 'JavaScript Avanzado', 
        costo: 30000,
        duracion: '2 meses', 
        cupos: 20, 
        inscritos: 10, 
        completado: false,
        fecha_registro: '06/03/2022', 
        descripcion: 'Curso con las nuevas actualizaciones de JavaScript.' ,
        color: 'deep-purple lighten-1',
      },
      { 
        id: 2, 
        img: 'https://lineadecodigo.com/wp-content/uploads/2014/04/css.png', 
        nombre: 'CSS para principiantes',
        costo: 10000, 
        duracion: '1 mes', 
        cupos: 35, 
        inscritos: 23,
        completado: false, 
        fecha_registro: '05/03/2022', 
        descripcion: 'Aprendiendo estilos con CSS desde el nivel más básico.',
        color: 'green',
      },
      { 
        id: 3, 
        img: 'https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.jpg', 
        nombre: 'JavaScript Básico de 0 a 100', 
        costo: 20000, 
        duracion: '2 meses', 
        cupos: 25,
        inscritos: 0, 
        completado: true, 
        fecha_registro: '05/03/2022',
        descripcion: 'Programando para la web con JavaScript.',
        color: 'deep-purple lighten-1',
      },
      { id: 4, 
        img:'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', 
        nombre:'HTML Básico', 
        costo: 10000, 
        duracion: '1 mes', 
        cupos: 35, 
        inscritos:0, 
        completado: true, 
        fecha_registro: '31/01/2022', 
        descripcion:'Aprende HTML 5 y crea tus primeras páginas web paso a paso con decenas de ejercicios.',
        color: 'green',
      },
      { 
        id: 5, 
        img: 'https://logosandtypes.com/wp-content/uploads/2020/08/vue.svg', 
        nombre: 'Vue JS de 0 a 100', 
        costo: 85500, 
        duracion: '5 meses', 
        cupos: 35, 
        inscritos: 35, 
        completado: false, 
        fecha_registro: '06/03/2022', 
        descripcion: 'Aprende desde cero como usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework.',
        color: 'deep-purple lighten-1', 
      },
      { 
        id: 6, 
        img: 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png',
        nombre: 'Estilos con SASS', 
        costo: 45000, 
        duracion: '1 mes', 
        cupos: 40, 
        inscritos: 35, 
        completado: false, 
        fecha_registro: '06/03/2022',
        descripcion: 'Con SASS aprenderás a escribir mejor código de CSS con todas las funciones necesarias.',
        color: 'green',
      },
  ]
  },
  getters: {
    totalCupos: state => {
      return state.cursos.reduce((total, curso) => total + parseInt(curso.cupos), 0);
    },
    totalInscritos: state => {
      return state.cursos.reduce((total, curso) => total + parseInt(curso.inscritos), 0);
    },
    alumnosRestantes: state => {
      return state.cursos.reduce((total, curso) => total + parseInt(curso.cupos) - parseInt(curso.inscritos), 0);
    },
    cursosTerminados: state => {
      return state.cursos.filter(curso=>curso.completado).length;
    }, 
    cursosActivos: state => {
      return state.cursos.filter(curso =>!curso.completado).length;
    },
    totalCursos: state=>{
      return state.cursos.length;
    },
    getCourseById: (state) => (id) => {    return state.cursos.find(curso => curso.id == id)  },
    
  },
  mutations: {
    ADD_CURSO(state,curso){
      if (curso.inscritos <= curso.cupos) {
        var randVal = 100 + Math.random() * (500 - 100);
        var id = Math.round(randVal);
        curso.id = id;
        state.cursos.push(curso);
      } else {
        alert("La cantidad de inscritos es mayor que los cupos disponibles");
      }
    },
      CURSO_DELETE(state,curso) {
        const index = state.cursos.findIndex(item => item.id===curso.id)
        if (index!== -1){
           state.cursos.splice(index, 1);
        }
      }
    }
  ,
  actions: {
    add_curso({commit},curso) {
      commit('ADD_CURSO',curso)
    },
    curso_delete ({commit},curso) {
      commit('CURSO_DELETE',curso)
    }
  },
  modules: {
  }
})