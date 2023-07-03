|<template>
<v-container justify="center">
    <p>Administración</p>
<div>
    <Form/>
    </div>
    <br>
        <div>
            <Table/>
        </div>
       <br>
        <Alerts/>
    </v-container>
</template>

<script>
import Table from '@/components/Table.vue'
import { mapState } from 'vuex'
import Alerts from "@/components/Alerts.vue";
import Form from "@/components/Form.vue";
export default {
    name: 'administracion-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['cursos'])
    },
    //methods: {}
    // watch: {},
    components: {
        Table, Alerts, Form,
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
     p {
    font-size: 40px;
    text-align: center;
    color: whitesmoke;
  }
</style>