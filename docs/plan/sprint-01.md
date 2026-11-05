# Sprint 1 — Comercial: núcleo esencial en una semana · borrador de tarjetas

[← Índice](../../README.md) · [Sprints](sprints.md) · [Kanban](kanban.md) · [Alcance Comercial](../alcance/comercial.md)

**Fechas:** martes 03/11 – lunes 09/11 (1 semana) · **Demo:** martes 10/11 · **Objetivo:** la **venta retail MTS de punta a punta** del TO-BE Comercial (cliente → oportunidad → cotización con descuento aprobado → anticipo confirmado → orden de venta), en pantalla y API, con **trazabilidad completa** de cada documento: historial, cadena documental, ficha y pantalla de trazabilidad (D19, D25).

> **Este archivo es un borrador.** Sirve para revisar las tarjetas y para cargarlas con `scripts/crear-tarjetas.sh`, que crea cada Issue (o actualiza el que ya existe con el mismo ID), lo agrega al tablero, llena sus campos, le asigna su hito y crea sus relaciones "Blocked by". Una vez cargadas, **el tablero de GitHub es la fuente de verdad** (D22). Cómo se ordenan en el tablero las tarjetas del sprint y las que esperan a otras áreas: [kanban.md 6.7](kanban.md#67-organizar-el-tablero-por-sprint-y-por-área-tarjeta-s1-70).

## Cómo se reparte el trabajo

- **Capacidad:** 3 h diarias por persona, 7 días: 21 h por persona y 63 h el equipo (D08). Las tarjetas se planifican a **≈ 2 h por día y persona**; la tercera hora queda para aprender, revisar PR, trabajar en pareja y absorber retrasos.
- **Núcleo** (P0): lo que se presenta el martes 10/11; es lo único que se compromete. **Si alcanza** (P1): solo se empieza cuando el núcleo del día está en `main`.
- Cada uno hace su pieza completa: regla, pruebas, endpoint, pantalla y ficha. Todo documento deja historial y cadena (D25).
- Las otras 38 tarjetas del TO-BE Comercial esperan el sprint del área que las resolverá ([sprints.md 5.6](sprints.md#56-tarjetas-que-esperan-el-sprint-de-su-área)).
- El sprint 1 **no llama a otros módulos**: la OV termina en Confirmada y queda lista para que Logística y Finanzas la tomen en su propio sprint (D06). Tesorería confirma el anticipo desde Ventas (D17).
- Las sesiones encadenan tarjetas de una en una (WIP 1). El asistente genera código sencillo y siempre pregunta antes (D09).

## Campos del tablero

| Columna | Campo | Valores |
|---|---|---|
| Prioridad | `Prioridad` | **Núcleo** · **Si alcanza** (D21) |
| Priority | `Priority` | **P0** = Núcleo · **P1** = Si alcanza |
| Size | `Size` | Horas de una persona: **S** 0,5 · **M** 1 · **L** 1,5 · **XL** se divide |
| Estimate | `Estimate` | Horas totales de la tarjeta (suma de sus dueños) |
| Inicio / Fin | `Start date` / `Target date` | Día planificado, calculado respetando dependencias y la capacidad diaria |
| Depende de | Relación **Blocked by** | Relación nativa de GitHub |
| Hito | *Milestone* | **Demo 10/11** |
| (derivado) | `Status` | P0 → **Ready** · P1 → **Backlog** (pasa a Ready cuando el núcleo del día está en `main`) |
| (derivado) | `Sprint` | **Sprint 1** (iteración de 1 semana: 03/11 – 09/11) |

## Ya hechas (preparación, 29/10 – 02/11)

Estas tarjetas no se vuelven a cargar: el script pondría su `Status` en Ready otra vez. Por eso tampoco aparecen en la columna "Depende de" de la tabla siguiente; sus relaciones "Blocked by" ya existen en el tablero.

| Estado | Tarjeta | Qué dejó |
|---|---|---|
| ✅ Done | S1-01 | Tablero configurado y tarjetas cargadas |
| ✅ Done | S1-04 | Solución con 11 submódulos, Api, Tests y pantalla de acceso en `/` |
| ✅ Done | S1-05 | Entidades de Comercial, `ErpDbContext`, migración `InicialComercial` y semilla (muebles, lista Retail, sedes, 14 roles) |
| ✅ Done | S1-08 | Historial de estados en Compartido (TRZ-01 y TRZ-03 con prueba) |
| 🟨 In Review | S1-00 | Pantalla de acceso de Luis: se cierra cuando Luis explica a Miguel sus tres archivos |
| ❔ Por confirmar | S1-02 · S1-03 · S1-06 | Instalación, práctica de Git y C#/SQL esenciales de Luis y Pablo. Si no están en Done, se hacen el martes 03/11 antes de S1-07 (3 h cada uno) y el plan de Luis y Pablo se corre un turno: la tercera hora diaria lo absorbe |

## Tarjetas

El script lee solo las filas de esta tabla.

| ID | Título | Tipo | Dueños | Horas por persona | Prioridad | Priority | Size | Estimate | Inicio | Fin | Depende de | Hito | Criterio de aceptación |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| S1-70 | Organizar el tablero por sprint y por área | configuracion | Miguel | Miguel 0,5 | Núcleo | P0 | S | 0,5 | 2026-11-03 | 2026-11-03 | — | Demo 10/11 | La iteración Sprint 1 va del 03/11 al 09/11; las tarjetas de esta tabla están cargadas con el script, con hito Demo 10/11 y el texto de esta tabla; las que esperan otra área están en Backlog, sin iteración, con el hito de su área, según docs/plan/kanban.md 6.7 |
| S1-09 | Registrar la cadena documental: origen y derivados de cada documento | codigo | Miguel | Miguel 1 | Núcleo | P0 | M | 1 | 2026-11-03 | 2026-11-03 | — | Demo 10/11 | En Compartido: todo documento derivado guarda su documento de origen y se pueden consultar sus antecesores y sucesores; TRZ-02 con prueba |
| S1-07 | Aprender capas, inyección de dependencias y xUnit construyendo el endpoint de Cliente | aprendizaje | Miguel, Luis, Pablo | Miguel 1,5 / Luis 1,5 / Pablo 1,5 | Núcleo | P0 | L | 4,5 | 2026-11-03 | 2026-11-03 | — | Demo 10/11 | POST y GET /clientes recorren Api, Servicios y Datos; una prueba xUnit pasa; Luis y Pablo explican qué hace cada capa |
| S1-10 | Implementar las reglas de Cliente (DNI 8, RUC 11, documento único) con pruebas | pruebas | Luis | Luis 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-04 | 2026-11-04 | S1-07 | Demo 10/11 | CLI-01 a CLI-03 en el catálogo con al menos 4 pruebas pasando (PO.02.P01.SP01.A01) |
| S1-11 | Implementar productos y la lista vigente por canal y tipo de cliente, con precio bloqueado | codigo | Pablo | Pablo 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-04 | 2026-11-04 | S1-07 | Demo 10/11 | GET /productos devuelve precios de la lista vigente; el precio no se edita a mano; PRE-01 a PRE-03 con prueba (PO.02.P02.SP01.A01, pasos 1 y 3) |
| S1-13 | Implementar la cotización: correlativo, vigencia, IGV y plazo de entrega | codigo | Pablo | Pablo 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-04 | 2026-11-04 | S1-11 | Demo 10/11 | COT-01 a COT-03 y COT-07 (plazo de entrega) con al menos 4 pruebas; la cotización guarda su oportunidad de origen (PO.02.P02.SP02.A01, pasos 1 y 2) |
| S1-15 | Implementar el anticipo: registrar, confirmar por Tesorería y marcar Pago validado | codigo | Miguel | Miguel 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-04 | 2026-11-04 | S1-07, S1-09 | Demo 10/11 | En Comercial › Ventas: PAG-01 a PAG-05 con pruebas; en el sprint 1 el rol Tesorería confirma desde Ventas (pasa a Finanzas › Tesorería en el sprint de Finanzas, D17); la confirmación guarda usuario y hora en el historial; el anticipo queda ligado a su cotización en la cadena (PO.02.P03.SP01.A01) |
| S1-12 | Implementar la oportunidad: nace Nueva y asigna canal, sede y vendedor | codigo | Luis | Luis 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-05 | 2026-11-05 | S1-10, S1-11 | Demo 10/11 | POST /oportunidades crea en estado Nueva con productos; OPO-01 y OPO-02 con prueba; el alta queda en el historial (PO.02.P01.SP01.A01) |
| S1-17 | Crear la ficha estándar de documento: cabecera, detalle, historial y cadena | codigo | Luis | Luis 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-05 | 2026-11-05 | S1-09 | Demo 10/11 | Componente reutilizable en wwwroot: cabecera (correlativo, fecha, cliente, sede, vendedor), detalle, estado actual con historial en línea de tiempo y cadena documental con enlaces; se imprime o guarda como PDF |
| S1-14 | Implementar los estados de la cotización, el envío simulado y el resultado | pruebas | Pablo | Pablo 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-05 | 2026-11-05 | S1-13 | Demo 10/11 | COT-04 a COT-06 con pruebas; "Enviar" registra el envío simulado; cada cambio queda en el historial (PO.02.P02.SP02.A02, pasos 1 y 3) |
| S1-44 | Configurar CI con GitHub Actions | configuracion | Miguel | Miguel 1 | Núcleo | P0 | M | 1 | 2026-11-05 | 2026-11-05 | — | Demo 10/11 | Un PR con una prueba rota sale en rojo y uno sano en verde; desde que se fusiona es obligatorio para todo PR (D11, guía docs/guias/ci.md) |
| S1-16 | Implementar la conversión de cotización a orden de venta con bloqueo sin pago validado | codigo | Miguel | Miguel 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-06 | 2026-11-06 | S1-15, S1-14 | Demo 10/11 | OV-01 a OV-05 y OPO-03 con pruebas; la OV nace Confirmada (D15) y queda en la cadena como derivada de su cotización; en el sprint 1 la OV termina en Confirmada: los estados siguientes llegan con los sprints de Logística y Finanzas (PO.02.P04.SP01.A01, pasos 1 y 2) |
| S1-27 | Implementar la solicitud de descuento con motivo y límite por rol | codigo | Miguel | Miguel 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-06 | 2026-11-06 | S1-14 | Demo 10/11 | DES-01 y DES-02 con prueba; límites en configuración (PO.02.P02.SP01.A02, pasos 1 y 2) |
| S1-18 | Crear el menú de Comercial, el selector con los 14 roles y las pantallas de clientes y oportunidades | codigo | Luis | Luis 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-06 | 2026-11-06 | S1-12, S1-17 | Demo 10/11 | El selector ofrece los 14 roles del TO-BE; listas y fichas de cliente y oportunidad conectadas a la API; los rechazos de la API se muestran en pantalla |
| S1-19 | Crear la pantalla de cotizaciones: lista y ficha | codigo | Pablo | Pablo 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-06 | 2026-11-06 | S1-14, S1-17 | Demo 10/11 | Se crea, envía y acepta o rechaza la cotización desde la pantalla; su ficha muestra líneas, IGV, total, plazo, historial y oportunidad de origen |
| S1-28 | Implementar la aprobación de descuentos por Jefatura y Gerencia con auditoría | codigo | Miguel | Miguel 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-07 | 2026-11-07 | S1-27 | Demo 10/11 | DES-03 con prueba: Jefatura dentro de su límite, Gerencia por encima; usuario y hora en el historial; con descuento pendiente la cotización no pasa a Aprobada (PO.02.P02.SP01.A02, paso 3) |
| S1-20 | Crear la pantalla de anticipos y órdenes de venta: lista y ficha | codigo | Miguel | Miguel 1 | Núcleo | P0 | M | 1 | 2026-11-07 | 2026-11-07 | S1-16, S1-17 | Demo 10/11 | Asesor registra el anticipo, Tesorería lo confirma y se convierte a OV; la ficha de la OV muestra la cadena oportunidad → cotización → anticipo → OV |
| S1-23 | Implementar los estados Calificada, Con fecha y Perdida de la oportunidad | codigo | Luis | Luis 1 | Núcleo | P0 | M | 1 | 2026-11-07 | 2026-11-07 | S1-12, S1-14 | Demo 10/11 | Transiciones válidas con prueba; al rechazarse la cotización la oportunidad pasa a Perdida con motivo; todo queda en el historial (sección 4) |
| S1-29 | Crear la pantalla de solicitudes de descuento con su ficha | codigo | Pablo | Pablo 1 | Núcleo | P0 | M | 1 | 2026-11-08 | 2026-11-08 | S1-28, S1-19 | Demo 10/11 | Jefatura y Gerencia aprueban o rechazan desde su bandeja; la ficha de la cotización muestra el descuento y quién lo aprobó |
| S1-64 | Crear la pantalla de trazabilidad: flujo completo de cualquier documento de la venta | codigo | Luis | Luis 1,5 | Núcleo | P0 | L | 1,5 | 2026-11-08 | 2026-11-08 | S1-17, S1-20 | Demo 10/11 | Se busca una oportunidad, cotización, anticipo u OV por su correlativo y se ve su cadena completa con estados, usuarios, roles, fechas y motivos, incluidas las aprobaciones de descuento; cada paso enlaza a la ficha de su documento |
| S1-21 | Probar de punta a punta la venta retail MTS con su trazabilidad y ensayar la demo | pruebas | Miguel, Luis, Pablo | Miguel 1 / Luis 1 / Pablo 1 | Núcleo | P0 | M | 3 | 2026-11-09 | 2026-11-09 | S1-18, S1-19, S1-20, S1-23, S1-29, S1-44, S1-64 | Demo 10/11 | El guion recorre cliente → oportunidad → cotización con descuento aprobado → anticipo confirmado → OV en pantalla y API dos veces sin errores, más una cotización rechazada (oportunidad Perdida con motivo); la pantalla de trazabilidad reconstruye cada cadena con quién, con qué rol y cuándo; cada uno explica su pieza |
| S1-22 | Escribir el capítulo semana-01 y crear el tag | docs | Pablo | Pablo 0,5 | Núcleo | P0 | S | 0,5 | 2026-11-09 | 2026-11-09 | S1-21 | Demo 10/11 | docs/capitulos/semana-01.md (preparación 29/10 – 02/11 y sprint 1 03/11 – 09/11) completo y revisado por Miguel, con los pendientes del área y lo que espera el sprint de otra área; tag semana-01 |
| S1-26 | Crear la pantalla de listas de precios | codigo | Pablo | Pablo 1 | Si alcanza | P1 | M | 1 | 2026-11-07 | 2026-11-07 | S1-11, S1-18 | Demo 10/11 | Muestra listas Vigentes y Vencidas por canal con sus precios (sección 7, Precios) |
| S1-65 | Crear el tablero inicial por rol con bandejas de pendientes | codigo | Luis | Luis 1,5 | Si alcanza | P1 | L | 1,5 | 2026-11-08 | 2026-11-08 | S1-18, S1-20, S1-28 | Demo 10/11 | Asesor, Jefatura de Ventas, Gerencia Comercial y Tesorería ven al ingresar sus pendientes: cotizaciones por enviar o por vencer, descuentos por aprobar y anticipos por confirmar (sección 7) |
| S1-66 | Calcular los indicadores comerciales | codigo | Miguel | Miguel 1,5 | Si alcanza | P1 | L | 1,5 | 2026-11-08 | 2026-11-08 | S1-14, S1-15, S1-28 | Demo 10/11 | Tasa de conversión, tiempo de respuesta de cotización, tiempo de validación de pago y descuento promedio fuera de lista, calculados desde el historial y expuestos por la API (sección 9); el tiempo de costeo MTO llega con el sprint de Planta |

## Carga por persona

El reparto sigue la experiencia (D20): **Miguel** lleva más horas, **Luis** es el segundo y **Pablo** el tercero. Luis y Pablo tardarán más que lo estimado mientras aprenden C#; para eso está la tercera hora diaria.

| Persona | Núcleo | Si alcanza | Revisión de PR | Total planificado | Disponible (3 h × 7) |
|---|---|---|---|---|---|
| Miguel | 12 h | 1,5 h | ≈ 2,5 h | **≈ 16 h** | 21 h |
| Luis | 11 h | 1,5 h | — | **12,5 h** | 21 h |
| Pablo | 10 h | 1 h | — | **11 h** | 21 h |
| **Equipo** | **33 h** (22 tarjetas) | **4 h** (3 tarjetas) | ≈ 2,5 h | **≈ 39,5 h** | **63 h** |

**Revisión de PR (≈ 2,5 h):** los PR son de una tarjeta y traen el apartado "Explicado con mis palabras". Miguel revisa los que tocan reglas, `Compartido` o migraciones; Luis y Pablo se revisan entre sí el resto.

**Dueños por dominio:** Miguel — trazabilidad (cadena), CI; en Ventas: anticipo, OV y descuentos; indicadores · Luis — CRM (cliente y oportunidad), ficha común, menú y selector de roles, pantalla de trazabilidad, tablero por rol · Pablo — en Ventas: precios, cotización y sus estados; pantallas de cotizaciones, descuentos y listas de precios; capítulo semanal.

## Plan por día

Calculado a partir de las dependencias, con un tope de 3 h por día. Las tarjetas *Si alcanza* van en cursiva y solo se empiezan si el núcleo de ese día está en `main`. Si un día se trabaja menos, la tarjeta se corre al siguiente; si la semana no alcanza, se aplica la regla de recorte de [alcance/comercial.md](../alcance/comercial.md#regla-de-recorte).

| Día | Miguel | Luis | Pablo |
|---|---|---|---|
| Mar 03/11 | S1-70, S1-09, S1-07 (3 h) | S1-07 (1,5 h) | S1-07 (1,5 h) |
| Mié 04/11 | S1-15 (1,5 h) | S1-10 (1,5 h) | S1-11, S1-13 (3 h) |
| Jue 05/11 · punto de control | S1-44 (1 h) | S1-12, S1-17 (3 h) | S1-14 (1,5 h) |
| Vie 06/11 | S1-16, S1-27 (3 h) | S1-18 (1,5 h) | S1-19 (1,5 h) |
| Sáb 07/11 · punto de control | S1-28, S1-20 (2,5 h) | S1-23 (1 h) | *S1-26* (1 h) |
| Dom 08/11 · punto de control | *S1-66* (1,5 h) | S1-64, *S1-65* (3 h) | S1-29 (1 h) |
| Lun 09/11 · fin del sprint | S1-21 (1 h) | S1-21 (1 h) | S1-21, S1-22 (1,5 h) |
| Mar 10/11 | **Demo** · retro · planning del sprint 2 | | |
