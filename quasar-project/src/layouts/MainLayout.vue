<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          SISTEMA DE INFORMACION DE COMERCIALIZACION
        </q-toolbar-title>
        <div>GECELCA S. A. E. S. P</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view /> <!-- Aquí se mostrará el componente según la ruta -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Formato SIC GECELCA',
    caption: 'Permisos Sistema de informacion comercial',
    icon: 'dataset',
    link: '' // Asegúrate de que apunta a la ruta correcta
  }
]

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
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

  /* Mostrar solo el q-page-container si es necesario */
  q-page-container {
    display: block !important; /* Cambia a block si necesitas mostrar solo el contenido principal */
  }

  /* Puedes agregar más reglas específicas aquí si es necesario */
}
</style>
