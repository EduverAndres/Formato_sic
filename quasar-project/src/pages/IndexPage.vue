<!-- src/pages/IndexPage.vue -->
<template>
  <q-page class="flex flex-center">
    <FormularioPrincipal mensaje="Este es un mensaje desde IndexPage" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FormularioPrincipal from 'src/components/FormularioPrincipal.vue' // Importar el componente hijo

export default defineComponent({
  name: 'IndexPage',
  components: {
    FormularioPrincipal
  }
})
</script>

<style scoped>
@media print {

  .no-print, .q-header, .q-footer, .q-drawer, .q-toolbar, .q-tabs, .q-drawer {
    display: none !important;
  }
  /* Ocultar todo el contenido que no se quiere imprimir */
  body * {
    display: none !important; /* Oculta todos los elementos */
  }

  /* Mostrar solo el componente FormularioPrincipal */
  q-page {
    display: block !important; /* Asegúrate de que el contenedor principal sea visible */
  }

  FormularioPrincipal {
    display: block !important; /* Asegúrate de que el componente FormularioPrincipal sea visible */
  }

  /* Si el componente FormularioPrincipal tiene estilos específicos que necesitas ajustar */
  /* Aquí puedes agregar más estilos específicos si es necesario */
}
</style>
