# 6. Tablero Kanban

[← Índice](../../README.md)

## 6.1 Herramienta y fuente de verdad

**GitHub Projects** (tablero del propio repositorio). **El tablero es la fuente de verdad de las tarjetas** (D22).

- Cada tarjeta es un **Issue** de GitHub; las plantillas están en `.github/`.
- Cada sprint es una **Iteración** de 1 semana (campo `Sprint`, martes a lunes) y corresponde a un área (D07).
- Las tarjetas se redactan en el planning en `docs/plan/sprint-NN.md` y se cargan con `scripts/crear-tarjetas.sh`. Después de cargarlas, todo cambio se hace en el tablero.
- Al abrir un PR se escribe `Closes #N` y la tarjeta se cierra sola al hacer merge.

## 6.2 Columnas

| Columna | Qué contiene | Límite WIP |
|---|---|---|
| **Backlog** | Tarjetas *Si alcanza* del sprint, tarjetas que esperan el sprint de su área y pendientes del área | — |
| **Ready** | Tarjetas del núcleo del sprint actual, pendientes de empezar (una *Si alcanza* pasa a Ready cuando el núcleo del día está en `main`) | — |
| **In Progress** | Lo que alguien está trabajando ahora | **1 por persona** |
| **In Review** | PR abierto esperando revisión | **2** |
| **Done** | Cumple la [definición de terminado](sprints.md#54-definición-de-terminado-dod) | — |

Si **In Review** llega a 2, se revisa antes de empezar algo nuevo.

## 6.3 Configuración de GitHub Projects (una sola vez, tarjeta S1-01)

1. **Colaboradores:** *Settings → Collaborators* → invitar a Luis y Pablo (trabajan con ramas en el repo, sin forks: D23).
2. **Crear el proyecto:** perfil → *Projects* → *New project* → plantilla **Kanban**. Vincularlo al repo (*Projects → Link a project*).
3. **Columnas:** las opciones del campo `Status` (*Settings → Status*): Backlog, Ready, In Progress, In Review, Done. Límites WIP desde el menú **⋯** de la columna.
4. **Campos** (*Settings → Fields*). Los nombres y opciones deben ser **exactamente** estos, porque el script los busca por nombre; si la plantilla ya trae alguno, se revisan sus opciones:

   | Campo | Tipo | Opciones / formato |
   |---|---|---|
   | `Status` | Single select | Backlog, Ready, In Progress, In Review, Done |
   | `Priority` | Single select | P0, P1, P2 |
   | `Size` | Single select | XS, S, M, L, XL |
   | `Estimate` | Number | horas totales de la tarjeta |
   | `Start date` | Date | — |
   | `Target date` | Date | — |
   | `Sprint` | Iteration | Iteraciones de **1 semana**, de martes a lunes; **Sprint 1** va del martes 03/11 al lunes 09/11 (D22) |
   | `Prioridad` | Single select | Núcleo, Si alcanza |

   El significado de cada valor está en [sprint-01.md](sprint-01.md#campos-del-tablero). El dueño va en *Assignees*.
5. **Etiquetas:** `aprendizaje`, `codigo`, `pruebas`, `docs`, `configuracion` (las crea el script).
6. **Automatizaciones** (*Workflows*): *Item closed → Done*, *Pull request merged → Done*, *Auto-add to project* filtrando este repo.
7. **Permiso de proyectos para `gh`:** `gh auth login` y luego `gh auth refresh -s project`.
8. **Cargar las tarjetas** (desde la carpeta del repo, en Git Bash):
   ```
   export GH_PROPIETARIO=<usuario de Miguel> GH_PROYECTO=<número del proyecto>
   export GH_MIGUEL=<usuario> GH_LUIS=<usuario> GH_PABLO=<usuario>
   scripts/crear-tarjetas.sh                 # ensayo: muestra qué hará, no toca GitHub
   scripts/crear-tarjetas.sh --ejecutar      # crea Issues, llena campos y crea relaciones
   ```
   El script crea cada Issue (o reutiliza el que ya tenga el mismo ID en el título), lo agrega al tablero, llena los 8 campos y crea las relaciones **Blocked by** desde la columna "Depende de". Si al tablero le falta un campo, una opción o la iteración del sprint, se detiene sin crear nada y dice qué falta. Se puede volver a ejecutar sin duplicar Issues.
9. Mover a mano la S1-00 (trabajo adelantado de Luis) a **In Review** hasta que Miguel la revise.
10. **Hitos (milestones):** el script crea uno por demo (en el sprint 1, **Demo 10/11**) y asigna cada tarjeta al suyo; en *Issues → Milestones* se ve el avance de la demo. Conviene agregarle la fecha límite a mano. Las tarjetas que esperan otra área usan los hitos de destino de [sprints.md 5.6](sprints.md#56-tarjetas-que-esperan-el-sprint-de-su-área).

> Si la interfaz de GitHub no coincide con estos pasos, se compara con una captura antes de improvisar.

## 6.4 Cargar una tarjeta a mano

En **Ready** (o **Backlog** si es *Si alcanza* o de otro sprint) → **+ Add item** → título con ID → **⋯ → Convert to issue** → pegar la plantilla de tarjeta con los datos de la fila de `sprint-NN.md` → completar *Assignees*, *Labels*, *Milestone* y los campos `Priority`, `Size`, `Estimate`, `Start date`, `Target date`, `Sprint` y `Prioridad` → en *Relationships → Mark as blocked by*, elegir las tarjetas de "Depende de". Si la tarjeta tiene varios dueños (`Miguel, Luis, Pablo`), se asigna a todos en la misma tarjeta; no se duplica.

## 6.5 Cómo se escribe una tarjeta

```
Objetivo del sprint → Piezas del núcleo (alcance del área) → Tareas (tarjetas)
"venta retail MTS"     "cotización con reglas"                 "S1-09 Implementar la cotización..."
```

1. **Título = verbo + resultado.**
2. **Tamaño: 1 a 1,5 h.** Cabe en una sesión diaria; si es más grande, se divide.
3. **Una tarjeta por tarea.**
4. **Criterio de aceptación verificable:** una frase que diga cómo saber que está terminada.
5. **Dependencias explícitas** si no puede empezar antes que otra: en el tablero son relaciones **Blocked by**.
6. **Trabajo fuera del tablero no existe:** si alguien quiere adelantar algo, primero se crea la tarjeta y se dice qué se saca para hacerle espacio.

| Campo | Ejemplo |
|---|---|
| ID | `S1-09` |
| Título | Implementar la cotización: correlativo, vigencia, líneas e IGV |
| Tipo (etiqueta) | 📚 aprendizaje · ⚙️ codigo · 🧪 pruebas · 📝 docs · 🔧 configuracion |
| Dueños y horas | Pablo 1,5 |
| Prioridad | Núcleo / Si alcanza |
| Hito | Demo 10/11 |
| Criterio de aceptación | COT-01 a COT-03 con al menos 4 pruebas pasando |
| Priority · Size · Estimate | P0 (Núcleo) · L · 1,5 |
| Inicio / Fin | 2026-11-04 |
| Depende de (Blocked by) | S1-07 |

## 6.6 Aprendizaje en pareja

Las tarjetas `aprendizaje` con Miguel (S1-07) son **sesiones conjuntas que producen código real**: Luis y Pablo aprenden capas, inyección de dependencias y xUnit construyendo el endpoint de Cliente, no con tutoriales aparte. Los demás aprendizajes se hacen en la sesión de la tarjeta que los necesita, con el asistente generando código sencillo y explicándolo (D09); al cerrar, cada uno explica con sus palabras lo que hizo.

## 6.7 Organizar el tablero por sprint y por área (tarjeta S1-70)

El tablero tiene las tarjetas de todo el TO-BE Comercial: las del sprint 1 y las que esperan el sprint de otra área (D06, D22). Esta sección deja cada una en su lugar. **El script solo actualiza campos e hito; no cambia el título ni el texto de un Issue que ya existe**, y pone en Ready (P0) o Backlog (P1) **todas** las tarjetas de la tabla de [sprint-01.md](sprint-01.md). Pasos, en este orden:

1. **Anotar el estado actual.** Antes de ejecutar nada, anota qué tarjetas están en *In Progress* o *In Review*: el script las devuelve a Ready y hay que regresarlas a mano (paso 5). Confirma si S1-02, S1-03 y S1-06 están en Done; las tarjetas en Done no están en la tabla y no se tocan.
2. **Iteración.** *Settings → Sprint*: la iteración **Sprint 1** empieza el martes 03/11 y dura **1 semana** (termina el lunes 09/11). Las siguientes, de 1 semana desde el martes 10/11 (D07).
3. **Hitos.** En *Issues → Milestones* crea **Sprint Logística**, **Sprint Finanzas**, **Sprint Planta** y **Pendientes Comercial** (el script crea **Demo 10/11** solo). Pon fecha límite 10/11 a Demo 10/11.
4. **Cargar.** Ensayo (`scripts/crear-tarjetas.sh`) y luego `--ejecutar`: llena los campos y el hito de las 25 tarjetas del sprint 1 y crea S1-70 si aún no existe.
5. **Regresar estados.** Devuelve a *In Progress* o *In Review* las tarjetas anotadas en el paso 1.
6. **Revisar el texto.** El título y el criterio de aceptación de cada Issue del sprint 1 deben coincidir con la tabla de sprint-01.md; si no, se copian de ahí (cuerpo del Issue, sección "Criterio de aceptación"). Revisa en especial S1-15, S1-16, S1-19, S1-21, S1-22, S1-44, S1-64 (también el título), S1-65 y S1-66.
7. **Relaciones.** Ninguna tarjeta del sprint 1 puede quedar bloqueada por una que espera otra área (*Relationships → Blocked by*). Revisa S1-64 (no debe depender de S1-51 ni S1-63), S1-65 (ni de S1-31, S1-51 o S1-63) y S1-66 (ni de S1-34).
8. **Tarjetas de otras áreas.** Las 38 de [sprints.md 5.6](sprints.md#56-tarjetas-que-esperan-el-sprint-de-su-área): campo `Sprint` vacío, `Status` Backlog e hito de su área (Sprint Logística, Sprint Finanzas, Sprint Planta o Pendientes Comercial). En la vista de tabla se pueden seleccionar varias y editar el campo de una vez.
9. **Hitos abiertos.** Solo quedan abiertos Demo 10/11 y los cuatro hitos por área; cualquier otro hito de demo se cierra cuando quede vacío.
10. **Verificar.** En la vista del Sprint 1 hay 25 tarjetas abiertas (22 de núcleo en Ready y 3 *Si alcanza* en Backlog) más las ya hechas; el hito Demo 10/11 tiene esas 25; los cuatro hitos por área suman 38.

> Si la interfaz de GitHub no coincide con estos pasos, se compara con una captura antes de improvisar.
