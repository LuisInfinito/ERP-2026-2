# Alcance — Área Comercial

[← Índice](../../README.md) · [Cómo se define el alcance](../plan/alcance.md)

**Sprint:** 1, de 1 semana (martes 03/11 – lunes 09/11) · **Demo:** martes 10/11 · **Fuente de verdad:** [TO-BE Comercial](../fuentes/to-be-comercial.md) (D02) · **Tarjetas:** [sprint-01](../plan/sprint-01.md) · **Contrato:** [comercial](../contratos/comercial.md)

## Criterio del alcance (D19)

El TO-BE Comercial describe 35 microprocesos; varios los mueven otras áreas. El sprint de Comercial, de una semana (D07), se concentra en lo fundamental: el proceso por el que FAMIHOGAR **convierte un interesado en una venta confirmada y cobrada por adelantado**, con cada paso registrado (quién, con qué rol, cuándo y por qué). Es la venta retail MTS que el TO-BE recomienda construir primero (pág. 87) y la que mejor muestra la trazabilidad que pide el profesor (D25).

El resto del TO-BE Comercial tiene dueño y momento: lo que pertenece a otra área se construye en el sprint de esa área (D06) y lo propio de Comercial queda como pendiente del área. El detalle tarjeta por tarjeta, con el área que lo resolverá, está más abajo y en el alcance de cada área.

## Núcleo (se presenta el 10/11, en pantalla y API)

| Pieza | Qué muestra del proceso | Microproceso del TO-BE | Tarjetas |
|---|---|---|---|
| Cliente | Ficha única por DNI o RUC; no se repite | PO.02.P01.SP01.A01 | S1-07, S1-10 |
| Oportunidad | Nace Nueva con canal, sede y vendedor; termina **Ganada** (al crear la OV) o **Perdida** con motivo | PO.02.P01.SP01.A01 · sección 4 | S1-12, S1-23 |
| Lista de precios | El precio sale de la lista vigente por canal y no se edita a mano | PO.02.P02.SP01.A01 | S1-11 |
| Cotización | Correlativo, vigencia, IGV y plazo de entrega; Borrador → Aprobada → Enviada → Aceptada / Rechazada / Vencida, con envío simulado | PO.02.P02.SP02.A01–A02 | S1-13, S1-14, S1-19 |
| Descuento con aprobación | Motivo obligatorio; Jefatura aprueba dentro de su límite y Gerencia por encima; queda usuario y hora | PO.02.P02.SP01.A02 | S1-27, S1-28, S1-29 |
| Compuerta de pago | Ninguna cotización pasa a OV sin anticipo confirmado: el asesor registra, Tesorería confirma, la cotización queda "Pago validado" | PO.02.P03 · PO.02.P03.SP01.A01 | S1-15 |
| Orden de venta | Conversión con un clic, sin redigitar; nace **Confirmada** y es el final del sprint | PO.02.P04.SP01.A01 | S1-16, S1-20 |
| Trazabilidad | Historial, cadena documental, ficha de cada documento y pantalla que reconstruye la cadena oportunidad → cotización → descuento → anticipo → OV | Sección 2 (principios) · D25 | S1-08 ✅, S1-09, S1-17, S1-64 |
| Soporte | Selector con los 14 roles, menú de Comercial y CI obligatorio | D12 · D11 | S1-18, S1-44 |

**La OV termina en Confirmada.** Sus estados siguientes (Liberada, En proceso, Lista para despacho, Entregada, Facturada: D15) los mueven otras áreas y llegan con sus sprints. Comercial deja la OV disponible por su contrato (`ObtenerOrdenVentaConfirmada`) para que Logística y Finanzas la tomen sin redigitar (D06).

**Tesorería confirma desde Ventas.** El rol Tesorería confirma el anticipo dentro de Comercial › Ventas; la confirmación por contrato desde Finanzas › Tesorería y el estado Conciliado llegan con el sprint de Finanzas (D17).

## Si alcanza (en este orden)

1. **Pantalla de listas de precios** (S1-26): listas Vigentes y Vencidas por canal.
2. **Tablero inicial por rol** (S1-65): cada rol ve sus pendientes al ingresar (asesor, jefatura, gerencia, tesorería).
3. **Indicadores comerciales** (S1-66): tasa de conversión, tiempo de respuesta de cotización, tiempo de validación de pago y descuento promedio, calculados desde el historial.

## Lo que resuelve otra área en su sprint

Cada área construye sus procesos en su propio sprint (D06). Estas tarjetas están en el tablero, en Backlog, con el hito del área que las resolverá. El detalle de cada una (qué hace, por qué es de esa área, reglas y contrato) está en el alcance de esa área, que es lo que lee su `/planning`.

| Área que lo resolverá | Hito | Procesos | Microprocesos | Tarjetas |
|---|---|---|---|---|
| [Logística](logistica.md#de-dónde-parte) | Sprint Logística | Stock por sede y reservas; distribución de la OV (despacho MTS); reposición y transferencias; despacho y POD; sus pantallas, su prueba final y su capítulo | PO.02.P01.SP02.A01 · PO.02.P04.SP01.A02 · PO.04 · PO.05 | S1-38, S1-39, S1-40, S1-41, S1-47, S1-48, S1-51, S1-46 |
| [Finanzas](finanzas.md#de-dónde-parte) | Sprint Finanzas | Crédito B2B y bloqueo por mora; comprobantes; confirmación del anticipo desde Tesorería, conciliación y cartera; su capítulo | PO.02.P03.SP02.A01 · PA.01 | S1-36, S1-37, S1-49, S1-50, S1-69 |
| [Planta](planta.md#de-dónde-parte) | Sprint Planta | Caso MTO: requerimiento, costeo, cotización MTO con margen, producción e ingreso a producto terminado; la prueba de punta a punta del caso MTO | PO.02.P01.SP02.A02 · PO.01 · PO.03 | S1-33, S1-34, S1-35, S1-42, S1-43, S1-45 |

Dos de estas tarjetas tocan código de Comercial › Ventas aunque se hagan en otro sprint: **S1-41** (distribución de la OV, con Logística) y **S1-35** (cotización MTO, con Planta).

## Simulado (todo el curso, D12)

- **Login real:** se usa un selector con los 14 roles.
- **SUNAT y facturación electrónica:** respuesta simulada.
- **Banco:** extracto de ejemplo.
- **Correo y WhatsApp:** el envío de la cotización se registra como envío simulado.
- **App móvil del chofer y del técnico:** vista web adaptada a celular.
- **Nube y datos reales:** no se usan; los datos son ficticios.

## Regla de recorte

Se recorta siempre desde lo último del flujo, nunca la base. La base del sprint es **Cliente → Precios → Cotización → historial, cadena y ficha**.

| Punto de control | Situación | Acción |
|---|---|---|
| **Jueves 05/11** | S1-07, S1-09, Cliente (S1-10) o precios y cotización (S1-11, S1-13) no están en `main` | Luis y Pablo trabajan en pareja con Miguel hasta cerrarlos; no se empieza nada *Si alcanza* |
| **Sábado 07/11** | Estados de la cotización, anticipo u OV (S1-14, S1-15, S1-16) no están en `main` | Los descuentos (S1-27 a S1-29) salen del guion y pasan a pendientes; la demo llega hasta la OV |
| **Domingo 08/11** | La pantalla de anticipos y OV (S1-20) no está en `main` | La demo llega hasta "cotización aceptada" con su ficha; la cadena se muestra desde la ficha y S1-64 se presenta con lo que exista |

Lo que no llegue al 09/11 queda como **pendiente del área**, en esta misma página.

## Pendientes del área

Procesos de Comercial (o transversales) que no entran al núcleo del sprint 1 (D19). Los resuelve el propio equipo de Comercial más adelante. Sus tarjetas están en el tablero, en Backlog, con el hito **Pendientes Comercial**.

### Postventa (PO.06): después de Logística y Finanzas

Postventa es parte del TO-BE Comercial, pero un reclamo necesita documentos que producen otras áreas: la **fecha de entrega (POD)** para la garantía, el **comprobante** para identificar la compra, la **nota de crédito** de Facturación, el **reproceso** de Planta y el **movimiento de stock** de Logística. Por eso se construye cuando esas áreas ya tuvieron su sprint; las piezas que dependen de Planta pueden esperar a ese sprint o usar un doble de prueba.

| Tarjeta | Qué hace | Microproceso | Necesita de otra área | Reglas |
|---|---|---|---|---|
| S1-52 | Bandeja única omnicanal (teléfono, WhatsApp, correo, tienda) | PO.06.P01.SP01.A01 | OV (sprint 1) o comprobante (Finanzas) | — |
| S1-53 | Ticket de reclamo vinculado a la OV y al producto | PO.06.P01.SP01.A02 | — | REC-01 |
| S1-54 | Categoría de falla con prioridad y plazo | PO.06.P01.SP02.A01 | — | — |
| S1-55 | Derivación al área responsable y control de plazo | PO.06.P01.SP02.A02 | Notificaciones (S1-31) | — |
| S1-56 | Garantía calculada desde la fecha de entrega | PO.06.P02.SP01.A01 | POD de **Logística** (S1-48) | GAR-01 |
| S1-57 | Evaluación de evidencias, visita técnica y diagnóstico | PO.06.P02.SP02.A01 | — | — |
| S1-58 | Dictamen de cobertura y solución | PO.06.P02.SP02.A02 | — | — |
| S1-59 | Orden de servicio técnico in situ | PO.06.P03.SP01.A01 | — | — |
| S1-60 | Reingreso a taller con orden de reproceso | PO.06.P03.SP01.A02 | **Planta** (`CrearOrdenReproceso`) | — |
| S1-61 | Nota de crédito con aprobación auditada de Jefatura | PO.06.P03.SP02.A01 | **Finanzas** › Facturación (`EmitirNotaCredito`) | NC-01 |
| S1-62 | Reingreso al almacén de cuarentena | PO.06.P03.SP02.A02 | **Logística** (`MoverStockCuarentena`) | — |
| S1-63 | Pantallas de Postventa con sus fichas | PO.06 | S1-52 a S1-62 | — |
| S1-68 | Prueba integral: un caso MTS y uno MTO recorren todo el TO-BE hasta la factura y un reclamo, y la pantalla de trazabilidad reconstruye cada flujo | Pág. 87 | Todas las áreas | — |

### CRM, Ventas y Compartido: sin dependencias, solo si sobra tiempo

No cambian el flujo esencial. Se construyen si el profesor lo pide o sobra una semana.

| Tarjeta | Quién lo resuelve | Qué hace | Microproceso | Por qué no entra al sprint 1 | Reglas |
|---|---|---|---|---|---|
| S1-24 | Comercial › CRM | Registrar y calificar leads B2B | PO.02.P01.SP01.A02 | El caso retail ya muestra el embudo completo; el B2B repite el flujo con otro origen y además pide crédito (Finanzas) | LEAD-01, LEAD-02 |
| S1-25 | Comercial › CRM | Pantalla de leads con su ficha | PO.02.P01.SP01.A02 | Depende de S1-24 | — |
| S1-30 | Comercial › Ventas | Plantilla oficial de la cotización en PDF | PO.02.P02.SP02.A01 paso 3 | La ficha ya se imprime o guarda como PDF desde el navegador | — |
| S1-31 | Compartido › Notificaciones | Bandeja de avisos por rol y registro de correo y WhatsApp simulados (`EnviarAviso`) | Sección 2 (principios) | El envío simulado de la cotización ya queda en el historial. Es transversal: se hace cuando la necesiten varias áreas (Postventa la exige) | — |
| S1-32 | Comercial › Ventas | Recordatorios de seguimiento de la cotización enviada | PO.02.P02.SP02.A02 paso 2 | Depende de S1-31 | — |
| S1-67 | Comercial (indicadores) | Entregas a tiempo, atención de reclamos, reclamos por tipo de falla y cartera vencida | Sección 9 | Cada indicador sale del historial de Logística, Postventa o Finanzas: se calcula cuando existan | — |

*(el lunes 09/11 se agrega aquí lo que no se haya hecho del sprint 1)*
