// src/router/routes.js
import FormularioPrincipal from '../components/FormularioPrincipal.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // Página de inicio
      { path: 'formulario-principal', component: FormularioPrincipal } // Ruta para mostrar el componente
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
