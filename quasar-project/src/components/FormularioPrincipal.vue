<template>
  <q-page class="flex flex-center" style="width: 100vw; height: 1900px; overflow: hidden;">
    <div class="tabla" ref="printTable" style="height: auto; width: 100%; position: relative; bottom: 30px;">
      <div class="fila encabezado">
        <!-- Primera columna -->
        <div class="celda izquierda centrado" style="padding: 9px; flex: 1;">
          <p><strong>Código:</strong> TECH-XXXX</p>
          <p><strong>Versión:</strong> 4</p>
          <p><strong>Página:</strong> 1 de 1</p>
          <p><strong>Fecha:</strong>{{ day }}/{{ month }}/{{ year }} </p>
        </div>
        <!-- Segunda columna -->
        <div class="celda centrado" style="flex: 2;">
          <div class="texto">
            <p id="titulo"><strong>Título:</strong> SISTEMA DE INFORMACION COMERCIAL - SIC</p>
            <div class="linea-horizontal"></div>
            <p id="respon"><strong>Responsable:</strong> Gerente de Tegnologia de Informacion</p>
          </div>
        </div>
        <!-- Tercera columna -->
        <div class="celda centrado" style="flex: 1; padding: 5px">
          <p><img id="imagenRecursos" class="imagen" src="/img/1Recurso 12.png" alt="" /></p>
        </div>
      </div>
      <!-- Primera fila -->
      <div class="fila" style="height: 40px;">
        <div class="celda" style="flex-grow: 2; display: flex;">
          <p style="margin: 0; padding-right: 8px; margin-left: 110px; position: relative; top: 5px;"><strong>Fecha:</strong></p>
          <div class="fecha-fila">
            <div class="celda fecha-item">
              <p>{{ day }}</p> <!-- Día dinámico -->
            </div>
            <div class="celda fecha-item">
              <p>{{ month }}</p> <!-- Mes dinámico -->
            </div>
            <div class="celda fecha-item">
              <p>{{ year }}</p> <!-- Año dinámico -->
            </div>
          </div>
        </div>
        <div class="celda2 recursos-tecnologicos">
          <strong style="margin-right: 50px;">Recursos tecnológicos de:</strong>
          <div class="recursos">
            <label for="gecelca">
              GECELCA
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="tabla" ref="printTable" style="height: auto; width: 100%;">
      <!-- Estructura de columnas -->
      <div class="module-grid" style="display: flex; justify-content: space-between; width: 100%; position: relative; bottom: 90PX;">

        <!-- Primera columna: Módulo de Registro -->
        <div style="flex: 1 1 30%; margin-right: 10px;">
          <q-card class="module" :style="{ height: modules[0].height }">
            <q-card-section>
              <strong style="margin: 0px; text-align: center;">{{ modules[0].title }}</strong>
              <div style="display: flex; flex-direction: column; align-items: flex-start;">
                <q-checkbox
                  v-for="(permiso, permisoIndex) in modules[0].permisos"
                  :key="permisoIndex"
                  v-model="permiso.selected"
                  :label="permiso.label"
                  :name="permiso.id"
                  :true-value="true"
                  :false-value="false"
                  style="margin: -7px;"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Segunda columna: Módulo de Liquidación y Facturación -->
        <div style="flex: 1 1 30%; margin-right: 10px;">
          <q-card class="module" :style="{ height: modules[1].height }">
            <q-card-section>
              <strong style="margin: 0px; text-align: center;">{{ modules[1].title }}</strong>
              <div style="display: flex; flex-direction: column; align-items: flex-start;">
                <q-checkbox
                  v-for="(permiso, permisoIndex) in modules[1].permisos"
                  :key="permisoIndex"
                  v-model="permiso.selected"
                  :label="permiso.label"
                  :name="permiso.id"
                  :true-value="true"
                  :false-value="false"
                  style="margin: -7px;"
                />
              </div>
            </q-card-section>
          </q-card>
          <q-card class="module" :style="{ height: modules[2].height, marginTop: '20px' }">
            <q-card-section>
              <strong style="margin: 0px; text-align: center;">{{ modules[2].title }}</strong>
              <div style="display: flex; flex-direction: column; align-items: flex-start;">
                <q-checkbox
                  v-for="(permiso, permisoIndex) in modules[2].permisos"
                  :key="permisoIndex"
                  v-model="permiso.selected"
                  :label="permiso.label"
                  :name="permiso.id"
                  :true-value="true"
                  :false-value="false"
                  style="margin: -7px;"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Tercera columna: Módulo de Data Explorer -->
        <div style="flex: 1 1 30%;">
          <q-card class="module" :style="{ height: modules[3].height }">
            <q-card-section>
              <strong style="margin: 0px; text-align: center;">{{ modules[3].title }}</strong>
              <div style="display: flex; flex-direction: column; align-items: flex-start;">
                <q-checkbox
                  v-for="(permiso, permisoIndex) in modules[3].permisos"
                  :key="permisoIndex"
                  v-model="permiso.selected"
                  :label="permiso.label"
                  :name="permiso.id"
                  :true-value="true"
                  :false-value="false"
                  style="margin: -7px;"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Botón de guardar -->
      <q-btn v-if="isPrinting" type="submit" label="Guardar Permisos" color="green" class="full-width" />
    </div>

    <div class="wi-test1" style="position: relative; bottom: 150px;">
    <p>
      <strong>Nota:</strong> Existen casos en los que un ítem agrupa varias opciones y otros en los que una opción general incluye los ítems que de ella se derivan, por
      lo tanto si la opción se encuentra marcada, los accesos comprenden todas o
      algunas de las opciones relacionadas a la misma, a excepción de los
      obsoletos.<br><br>La persona responsable: <strong>{{ usuarioSeleccionado }}</strong> </p>

    <p>
      Se le asigna el usuario <strong>{{ usuarioSeleccionado }}</strong> y se compromete a
      preservar el recurso tecnológico que opera y a mantener la
      confidencialidad de la información que accede, a través de las opciones marcadas en el presente documento. Cualquier operación realizada por el
      usuario asignado quedará registrada en el sistema respectivo. La persona,
      será responsable por cualquier contravención en la operación del recurso
      tecnológico concedido, y en el procesamiento y utilización de la
      información, con las sanciones a las que hubiese lugar.
    </p>
    <div class="signatures">
      <div class="signature">
        <p>___________________________________ <br>Firma Usuario Responsable</p>
        <p>
          Nombre: <strong>{{ usuarioSeleccionado }}</strong><br>Cargo: <strong>{{  }}</strong><br>
        </p>
      </div>
      <div class="signature">
        <p>___________________________________ <br>Firma Jefe Inmediato</p>
        <p>
          Nombre: <strong>{{  }}</strong><br>Cargo: <strong>{{  }}</strong>
        </p>
      </div>
      <div class="signature">
        <p>___________________________________ <br>Firma Responsable del proceso</p>
        <p>
          Nombre: <strong>Domingo Laino Garcia</strong><br>Cargo: <strong>Gerente De Energia</strong>
        </p>
      </div>
      <div class="signature" >
        <p>___________________________________ <br>Firma Gerente Sistemas Informacion</p>
        <p>
          Nombre: <strong>
            Daniel Alsina Galofre</strong><br>Cargo: <strong>Gerente De Tecnologia De Inform.</strong>
        </p>
      </div>
    </div>
  </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      day: new Date().getDate(),
      month: new Date().toLocaleString('default', { month: 'long' }),
      year: new Date().getFullYear(),
      isPrinting: false,
      modules: [
        {
          title: 'Módulo Registro',
          permisos: [
            { id: '1.1', label: 'Registro de Empresas y responsables', selected: false },
            { id: '1.1.1', label: 'Agentes y Clientes', selected: false },
            { id: '1.1.1.1', label: 'Empresas', selected: false },
            { id: '1.1.1.2', label: 'Responsables', selected: false },
            { id: '1.1.1.3', label: 'Operadores', selected: false },
            { id: '1.2', label: 'Registro de Contratos de Energía', selected: false },
            { id: '1.2.1', label: 'Largo Plazo (LP)', selected: false },
            { id: '1.2.2', label: 'Usuarios No Regulados (UNR)', selected: false },
            { id: '1.2.3', label: 'Respaldos', selected: false },
            { id: '1.2.4', label: 'Contratos DDV', selected: false },
            { id: '1.2.5', label: 'Contratos RMS', selected: false },
            { id: '1.2.6', label: 'Declaraciones', selected: false },
            { id: '1.3', label: 'Registro de Contratos de Combustible', selected: false },
            { id: '1.3.1', label: 'Transporte', selected: false },
            { id: '1.3.2', label: 'Suministro', selected: false },
            { id: '1.4', label: 'Registro de Consumos', selected: false },
            { id: '1.4.1', label: 'Heat Rate', selected: false },
            { id: '1.4.2', label: 'Diario Promigas', selected: false },
            { id: '1.4.3', label: 'Horario Promigas', selected: false },
            { id: '1.4.4', label: 'Precio & Oferta', selected: false },
            { id: '1.4.5', label: 'Mov Stocks', selected: false },
            { id: '1.5', label: 'Registro de Fronteras Usuarios No Regulados (UNR)', selected: false },
            { id: '1.5.1', label: 'Fronteras UNR', selected: false },
            { id: '1.5.2', label: 'Subportafolios', selected: false },
            { id: '1.5.3', label: 'Compensaciones', selected: false },
            { id: '1.6', label: 'Registro de Impuestos', selected: false },
            { id: '1.6.1', label: 'ICA y Bomberil', selected: false },
            { id: '1.6.2', label: 'Seguridad Social', selected: false },
            { id: '1.6.3', label: 'Alumbrado Público', selected: false },
            { id: '1.7', label: 'Registro de Factura', selected: false },
            { id: '1.7.1', label: 'Anticipos y descuentos', selected: false },
            { id: '1.7.2', label: 'Consecutivo', selected: false },
            { id: '1.7.3', label: 'Hoja de Entrada', selected: false },
            { id: '1.7.4', label: 'Otros cobros', selected: false },
            { id: '1.7.5', label: 'Cuenta Bancaria', selected: false },
            { id: '1.8', label: 'Reportes', selected: false },
            { id: '1.9', label: 'Registro Reporte SIRECI', selected: false },
            { id: '1.9.1', label: 'Resumen', selected: false },
            { id: '1.9.2', label: 'Reporte', selected: false },
            { id: '1.10', label: 'Historial', selected: false },
            { id: '1.10.1', label: 'Datos eliminados', selected: false },
            { id: '1.10.2', label: 'Archivos cargados', selected: false }
          ]
        },
        {
          title: 'Módulo Liquidación',
          height: '440px',
          permisos: [
            { id: '2.1', label: 'Validación de Versiones', selected: false },
            { id: '2.2', label: 'Ejecución de liquidaciones', selected: false },
            { id: '2.2.1', label: 'Transacciones comerciales', selected: false },
            { id: '2.2.2', label: 'Contratos de Largo Plazo (LP)', selected: false },
            { id: '2.2.3', label: 'Balance Energético', selected: false },
            { id: '2.2.4', label: 'Liquidación de Carbón', selected: false },
            { id: '2.2.5', label: 'Liquidación de Mandatos', selected: false },
            { id: '2.2.6', label: 'Liquidación de Proyectada', selected: false },
            { id: '2.2.7', label: 'Contratos de Respaldos', selected: false },
            { id: '2.3', label: 'Nominación', selected: false },
            { id: '2.3.1', label: 'Nominación de contratos', selected: false },
            { id: '2.3.2', label: 'Liquidación de nominación', selected: false },
            { id: '2.3.3', label: 'Facturación de la nominación de gas', selected: false },
            { id: '2.4', label: 'Bitácora de Nominación', selected: false },
            { id: '2.5', label: 'Reportes de Liquidación', selected: false }
          ]
        },
        {
          title: 'Módulo Facturación',
          height: '300px',
          permisos: [
            { id: '3.1', label: 'Gestión de Documentos', selected: false },
            { id: '3.2', label: 'Validación de Documentos', selected: false },
            { id: '3.3', label: 'Consulta de Documentos', selected: false },
            { id: '3.4', label: 'Anticipos y Descuentos', selected: false },
            { id: '3.5', label: 'Actualizar Vistas', selected: false },
            { id: '3.6', label: 'Interfaces de Contabilidad', selected: false },
            { id: '3.7', label: 'Facturación de contratos de Largo Plazo (LP)', selected: false }
          ]
        },
        {
          title: 'Data Explorer',
          height: '200px',
          bottom: '600px',
          permisos: [
            { id: '4.1', label: 'Reportes', selected: false },
            { id: '4.2', label: 'Fuentes', selected: false },
            { id: '4.3', label: 'Parámetros', selected: false },
            { id: '4.4', label: 'Parámetros de validación', selected: false },
            { id: '4.5', label: 'Reportes del SIRECI', selected: false },
            { id: '4.6', label: 'Configuración', selected: false }
          ]
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      const selectedPermissions = this.modules.flatMap(module =>
        module.permisos.filter(permiso => permiso.selected)
      )
      console.log('Permisos seleccionados:', selectedPermissions)
      // Aquí puedes realizar las acciones necesarias, como enviar los datos al servidor
    }
  }
}
</script>
<style scoped>
.wi {
  font-size: 10px;
}

.signatures {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
  position: relative;
  bottom: 10px;
}

.signature {
  flex-grow: 1;
  margin: 0 7px;
  font-size: 15px;
}

.wi-test1 {
  font-size: 12px;
}

.tabla {
  display: flex;
  flex-direction: column;
  position: relative;
}

.fila {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.add {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.celda {
  flex-grow: 3;
  padding: 1px;
  border: 1px solid #ccc;
  text-align: center;
}

.celda2 {
  flex-grow: 3;
  padding: 9px;
  border: 1px solid #ccc;
  text-align: center;
}

.encabezado {
  border-bottom: 1px solid #ccc;
  height: 230px;

}

.linea-horizontal {
  border-top: 1px solid #ccc;
  width: 100%;
  margin: 8px 0;
}

.izquierda {
  align-items: center;
}

.centrado {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.texto {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.imagen {
  max-width: 100%;
  height: 100px;
  position: relative;
  top: 20px;
}

.fecha-fila {
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 30px;
}

.fecha-item {
  flex-grow: 1;
  padding: 6px;
  text-align: center;
}

.fecha-item p {
  margin: 0;
  font-size: 14px;
}

.recursos {
  align-items: center;
  display: inline-block;
  height: 5px;
}

.recursos-tecnologicos label {
  margin-right: 10px;
}

/* Estilos para el select */
.perfil-select {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 3; /* Asegura que el select ocupe la columna correcta */
}

/* Estilos para impresión */
@media print {
  .no-print, .q-header, .q-footer, .q-drawer, .q-toolbar, .q-tabs {
    display: none !important;
  }

  .wi-test1 {
    font-size: 12px;
    position: relative;
    bottom: 80px;
  }





  .wi-test2 {
    font-size: 10px;
    position: relative;
  }




  /* Especificar el tamaño de impresión, si es necesario */

}
</style>



