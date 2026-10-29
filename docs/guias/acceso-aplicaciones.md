# Primera entrega de B — Acceso y aplicaciones

[← Índice](../../README.md)

## Alcance acordado

Trabajo adicional al inicio del sprint 1, acordado por Luis (B) con Miguel (A): acceso simulado y pantalla de aplicaciones, tomando como referencia visual BartolitoERP, proporcionado por el profesor. No incluye paneles internos, autenticación real, permisos ni operaciones de negocio. No cierra S1-02 por C ni S1-03.

## Archivos e integración

Los archivos están en `src/Erp.Api/wwwroot`: `index.html`, `estilos.css` y `aplicaciones.js`. Son HTML, CSS y JavaScript sin dependencias externas. La carpeta anticipa la ubicación acordada para la API; todavía no existe un proyecto ASP.NET Core. No se creó el esqueleto de Miguel ni se modificaron migraciones.

El acceso solicita nombre de demostración y uno de los roles Asesor, Jefatura o Tesorería, conforme a D12. No solicita ni guarda contraseñas; el rol no aplica permisos. La sesión solo existe en memoria: recargar vuelve al acceso.

El catálogo visual incluye Comercial y Logística, las áreas documentadas. La cuadrícula admite seis columnas en escritorio y se adapta a tres o dos. No se copian las doce áreas del ejemplo porque varias son de otro negocio. Las tarjetas muestran un aviso de pendiente al pulsarlas. Agregar áreas exige acuerdo del equipo.

## Cómo probar en Windows

1. Obtén la rama `b/acceso-aplicaciones` desde tu fork y abre su carpeta.
2. Abre `src/Erp.Api/wwwroot/index.html` con Chrome o Edge; no requiere instalar paquetes, Python, SQL Server ni iniciar la API.
3. Intenta ingresar sin datos: el navegador debe pedir completarlos.
4. Escribe tu nombre, selecciona Asesor y pulsa Ingresar al ERP. Deben aparecer Aplicaciones y tu nombre y rol.
5. Busca `comercial`, luego `logistica` (sin tilde): debe aparecer solo la tarjeta correspondiente.
6. Busca `no-existe`: debe aparecer un mensaje de ausencia de resultados. Borra el filtro: vuelven ambas tarjetas.
7. Pulsa cada tarjeta: debe informar que la pantalla está pendiente, sin abrir un módulo ficticio.
8. Pulsa Salir: debe volver al acceso y limpiar los datos. Repite con Tesorería.
9. Recarga dentro de Aplicaciones: debe volver al acceso.
10. Prueba con Tab, Enter y las flechas del selector; revisa también una ventana estrecha o la vista móvil del navegador.

## Integración futura por A

Cuando exista Erp.Api, estos archivos podrán servirse desde su carpeta wwwroot habilitando documentos predeterminados y archivos estáticos en el host ASP.NET Core. Revisar con Miguel el uso de index.html como entrada para evitar sobrescribir su interfaz. No hay llamadas a endpoints ni dependencias de SQL en esta entrega.

## Validación y aceptación

`node --check src/Erp.Api/wwwroot/aplicaciones.js` y `git diff --check` pasaron. La comprobación funcional en navegador no se ejecutó: falta Chromium y su descarga fue rechazada por la política de red (cdn.playwright.dev, HTTP 403). Quedan pendientes las comprobaciones manuales anteriores. Esto no constituye una prueba de reglas de negocio ni una validación del ERP completo. La aceptación visual y funcional corresponde a Luis antes de preparar la integración con el repositorio de Miguel.

Pendiente: revisión de Luis, acuerdo del catálogo final de áreas y posterior conexión con la API. No hay PR ni integración al original en esta entrega.
