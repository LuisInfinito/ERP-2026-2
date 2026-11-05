# 5. Sprints

[← Índice](../../README.md)

**Qué hay en cada archivo de la carpeta `plan/`:**

| Archivo | Para qué sirve | Se actualiza |
|---|---|---|
| `sprints.md` (este) | **Cómo funcionan los sprints**: calendario, capacidad, ceremonias, definición de terminado, riesgos y tarjetas que esperan el sprint de su área | Cuando cambia el método o el calendario |
| `sprint-NN.md` | **Borrador de las tarjetas de un sprint** con sus campos, dependencias, hito y plan por día: se revisa en el planning y el script lo carga al tablero | Solo hasta cargarlas; después manda el tablero (D22) |
| `kanban.md` | **Cómo se usa el tablero**: columnas, campos, cómo se escribe una tarjeta, configuración de GitHub Projects y cómo se organiza por sprint y por área | Cuando cambia el método |

## 5.1 Estructura

- **Un área por sprint, un sprint por semana** (D07), de **martes a lunes**. Cada martes hay demo en clase (la review) y, enseguida, la retro y el planning del área siguiente.
- **Capacidad:** 3 h diarias por persona, 7 días: **21 h por persona y 63 h el equipo** (D08). Las tarjetas se planifican a **≈ 2 h por día y persona (≈ 42 h el equipo)**; la tercera hora queda para aprender, revisar PR, trabajar en pareja y absorber retrasos. Cada retro recalibra con las horas reales de la bitácora.
- **Alcance por área:** Núcleo (lo que se compromete) y Si alcanza (en orden); lo que no entra queda como pendiente del área o pasa al sprint de su área (D21).
- **Aprendizaje justo a tiempo:** se aprende lo que la tarjeta del día necesita.

| Sprint | Fechas | Demo | Área | Objetivo | Tarjetas |
|---|---|---|---|---|---|
| Preparación | 29/10 – 02/11 | — | Base técnica | Tablero, solución con sus módulos, entidades de Comercial con migración y semilla, historial de estados (S1-01, S1-04, S1-05, S1-08) | [sprint-01](sprint-01.md#ya-hechas-preparación-2910--0211) |
| 1 | 03/11 – 09/11 | Mar 10/11 | Comercial | Venta retail MTS de punta a punta (cliente → oportunidad → cotización con descuento aprobado → anticipo → OV) con trazabilidad completa | [sprint-01](sprint-01.md) |
| 2 | 10/11 – 16/11 | Mar 17/11 | Logística *(por confirmar con el profesor)* | Se define en su `/planning`, partiendo de las tarjetas que la esperan (5.6) | — |
| 3+ | Una semana cada uno | El martes siguiente | Finanzas, Planta o la que solicite el profesor | Se define en su `/planning`, partiendo de las tarjetas que la esperan (5.6) | — |

## 5.2 Sprint 1 — Comercial

**Objetivo:** el núcleo esencial del TO-BE Comercial (PO.02, venta retail MTS) funcionando en pantalla y por la API, con historial, cadena documental, ficha de cada documento y pantalla de trazabilidad. Alcance en [alcance/comercial.md](../alcance/comercial.md); tarjetas y plan por día en [sprint-01.md](sprint-01.md).

| Persona | Núcleo | Si alcanza | Revisión de PR | Total planificado | Disponible |
|---|---|---|---|---|---|
| Miguel | 12 h | 1,5 h | ≈ 2,5 h | **≈ 16 h** | 21 h |
| Luis | 11 h | 1,5 h | — | **12,5 h** | 21 h |
| Pablo | 10 h | 1 h | — | **11 h** | 21 h |
| **Equipo** | **33 h** (22 tarjetas) | **4 h** (3 tarjetas) | ≈ 2,5 h | **≈ 39,5 h** | **63 h** |

El reparto sigue la experiencia (D20): Miguel lleva más, Luis es el segundo y Pablo el tercero.

## 5.3 Ceremonias

| Ceremonia | Cuándo | Duración | Qué se hace |
|---|---|---|---|
| **Demo (review)** | Martes, en clase | la presentación | Mostrar lo que funciona en pantalla y API, con la trazabilidad de los documentos |
| **Retro** | Martes, después de la demo | 15 min | Horas reales vs. estimadas, qué mejorar, poda de contexto (`/retro`) |
| **Planning** | Martes, después de la retro | 20 min | Fuente del área nueva, alcance, contrato, tarjetas, decisiones afectadas (`/planning`) |
| **Control semanal** | Lunes (último día del sprint) | 5 min | Sí / Parcial / No, horas, qué queda como pendiente del área |
| **Daily** | Asíncrona | 2 min | Tres líneas en la bitácora |

## 5.4 Definición de terminado (DoD)

Una tarjeta solo pasa a **Done** si:

- [ ] Está en `main` mediante un PR desde una rama del repo, revisado por otro integrante.
- [ ] `dotnet build` y `dotnet test` pasan (y el CI está en verde desde S1-44).
- [ ] Si es una regla: está en el [catálogo](../reglas.md) con módulo, fuente, microproceso y prueba.
- [ ] **Trazabilidad:** si crea o cambia un documento, deja historial (usuario, fecha y hora, motivo) y cadena documental, y su ficha lo muestra (D25).
- [ ] Si toca la base: incluye migración (creada por Miguel).
- [ ] Si es una pantalla: se probó a mano en Chrome o Edge contra la API.
- [ ] El autor **explicó con sus palabras** lo que hizo en `/cierre`.
- [ ] Los términos nuevos están en el [glosario](../glosario.md).
- [ ] Si cambió algo ya decidido, la decisión se modificó en [decisiones](../decisiones.md) (D24).
- [ ] La bitácora está actualizada.

Las tarjetas de aprendizaje no requieren PR: se cierran cuando se cumple su criterio. Las de configuración que no tocan el repositorio se cierran directamente y se anotan en la bitácora.

## 5.5 Riesgos

- **Semana corta para quien aprende.** Luis y Pablo aprenden C# mientras construyen. Mitigación: se planifica a ≈ 2 h de las 3 h diarias, S1-07 se hace en pareja con Miguel el primer día y hay tres puntos de control (jueves, sábado y domingo).
- **La trazabilidad es la base de todo.** Si la cadena (S1-09) o la ficha (S1-17) se atrasan, todas las pantallas se atrasan. Miguel hace S1-09 el primer día y Luis la ficha el jueves.
- **Miguel es el cuello de botella:** lleva anticipo, OV, descuentos y CI, y revisa PR. La revisión se mantiene en ≈ 2,5 h porque los PR son de una tarjeta y traen su explicación; Luis y Pablo se revisan entre sí los PR sin reglas, `Compartido` ni migraciones.
- **Preparación incompleta.** Si S1-02, S1-03 o S1-06 no están en Done, Luis y Pablo las hacen el martes 03/11 y su plan se corre un turno; la tercera hora diaria lo absorbe.
- **Un mismo tablero para todas las áreas.** Las tarjetas que esperan otra área conviven con las del sprint 1. Si se mezclan (iteración o hito equivocados), el tablero deja de ser fuente de verdad. S1-70 lo deja ordenado según [kanban.md 6.7](kanban.md#67-organizar-el-tablero-por-sprint-y-por-área-tarjeta-s1-70).
- **Área del sprint 2 sin confirmar.** Si el profesor pide otra área en lugar de Logística, el planning del martes 10/11 parte de las tarjetas que esperan esa área (5.6).

## 5.6 Tarjetas que esperan el sprint de su área

El planning del sprint 1 redactó las tarjetas de **todo** el TO-BE Comercial (S1-00 a S1-69), aunque el sprint 1 solo toma su núcleo (D19). Las demás esperan en el tablero, en **Backlog** y sin iteración, con el hito del área que las resolverá (D06, D22). El detalle de cada tarjeta (qué hace, microproceso, por qué es de esa área, reglas y contrato) está en el **alcance de esa área**, que es lo que lee su `/planning` para revisarlas contra la fuente del área: ajustarlas, dividirlas o descartarlas.

| Área que lo resolverá | Hito en el tablero | Tarjetas | Horas estimadas | Necesita antes | Detalle |
|---|---|---|---|---|---|
| **Logística** | Sprint Logística | S1-38, S1-39, S1-40, S1-41, S1-47, S1-48, S1-51, S1-46 | 10 h | OV Confirmada (sprint 1) | [alcance/logistica.md](../alcance/logistica.md#de-dónde-parte) |
| **Finanzas** | Sprint Finanzas | S1-36, S1-37, S1-49, S1-50, S1-69 | 6,5 h | OV y anticipo (sprint 1); POD para facturar (Logística) | [alcance/finanzas.md](../alcance/finanzas.md#de-dónde-parte) |
| **Planta** | Sprint Planta | S1-33, S1-34, S1-35, S1-42, S1-43, S1-45 | 8 h | Oportunidad y cotización (sprint 1); distribución de la OV y stock (Logística) | [alcance/planta.md](../alcance/planta.md#de-dónde-parte) |
| **Comercial › Postventa** | Pendientes Comercial | S1-52 a S1-63, S1-68 | 18,5 h | POD (Logística), comprobante y nota de crédito (Finanzas), reproceso (Planta) | [alcance/comercial.md](../alcance/comercial.md#pendientes-del-área) |
| **Comercial › CRM y Ventas · Compartido** | Pendientes Comercial | S1-24, S1-25, S1-30, S1-31, S1-32, S1-67 | 7 h | Nada (S1-67 necesita Logística, Finanzas y Postventa) | [alcance/comercial.md](../alcance/comercial.md#pendientes-del-área) |
| **Total** | | **38 tarjetas** | **≈ 50 h** | | |

Las pruebas de punta a punta y los capítulos también tienen área: S1-46 es el capítulo del sprint 2 (Logística), S1-69 el del sprint 3 (Finanzas, si se mantiene el orden), S1-45 la prueba final del caso MTO (Planta) y S1-68 la prueba integral MTS + MTO con despacho, factura y reclamo, que se hace con Postventa, cuando ya existen todas las áreas.

**Orden sugerido de las áreas** (lo decide el profesor; esto es lo que piden las dependencias): **Logística → Finanzas → Planta**, y Postventa al final. Logística va primero porque su POD dispara la facturación (Finanzas) y la garantía (Postventa); Finanzas va antes que Postventa porque la nota de crédito la emite Facturación. Si el profesor cambia el orden, el área que llegue antes usa dobles de prueba detrás de los contratos de las que faltan (`docs/arquitectura.md` 3.8), y los capítulos S1-46 y S1-69 pasan al área que ocupe el sprint 2 y el 3.

**Cómo se mantiene al día.** Cuando el `/planning` de un área ajuste o descarte una de estas tarjetas, se cambia en el tablero (que manda, D22) y se anota en el alcance de esa área. Cuando una se termine, su fila en el alcance del área recibe "✅ sprint N".
