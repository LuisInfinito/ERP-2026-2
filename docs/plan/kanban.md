# 6. Tablero Kanban

[← Índice](../../README.md)

## 6.1 Herramienta

**GitHub Projects** (tablero del propio repositorio).

- Cada tarjeta es un **Issue** de GitHub; las plantillas están en `.github/`.
- Cada sprint es una **Iteración** de 1 semana (campo `Sprint`, jueves a miércoles).
- Al abrir un PR se escribe `Closes #N` y la tarjeta se cierra sola al hacer merge.
- Carga masiva de las tarjetas con `scripts/crear-tarjetas.sh` (usa `gh`; ver 6.2.1).

## 6.2 Columnas

| Columna | Qué contiene | Límite WIP |
|---|---|---|
| **Backlog** | Historias de sprints futuros y el Nivel 2 sin empezar, sin detallar | — |
| **Ready** | Tareas detalladas del sprint actual, pendientes de empezar | — |
| **In Progress** | Lo que alguien está trabajando ahora | **1 por persona** |
| **In Review** | PR abierto esperando revisión | **2** |
| **Done** | Cumple la [definición de terminado](sprints.md#54-definición-de-terminado-dod) | — |

Si **In Review** llega a 2, se revisa antes de empezar algo nuevo.

## 6.2.1 Configuración de GitHub Projects (una sola vez, tarjeta S1-01)

1. **Crear el proyecto:** perfil → *Projects* → *New project* → plantilla **Kanban**. Vincularlo al repo (*Projects → Link a project*).
2. **Columnas:** las opciones del campo `Status` (*Settings → Status*): Backlog, Ready, In Progress, In Review, Done. Límites WIP desde el menú **⋯** de la columna.
3. **Campos:** `Sprint` (*Iteration*, 1 semana, empieza el 29/10), `Estimación` (*Number*, horas), `Prioridad` (*Single select*: Núcleo, Si alcanza). El dueño va en *Assignees*.
4. **Etiquetas:** `aprendizaje`, `codigo`, `pruebas`, `docs`, `configuracion` (las crea el script).
5. **Automatizaciones** (*Workflows*): *Item closed → Done*, *Pull request merged → Done*, *Auto-add to project* filtrando este repo.
6. **Cargar las tarjetas:** `export GH_A=<usuario> GH_B=<usuario> GH_C=<usuario>`, luego `scripts/crear-tarjetas.sh` (ensayo, no crea nada) y `scripts/crear-tarjetas.sh --ejecutar`. Si `gh` no está disponible, se cargan a mano con 6.2.2.
7. En el tablero, mover las tarjetas del sprint a **Ready** y poner `Sprint`, `Estimación` y `Prioridad`.

> Si la interfaz de GitHub no coincide con estos pasos, se compara con una captura antes de improvisar.

## 6.2.2 Cargar una tarjeta a mano

En **Ready** → **+ Add item** → título con ID → **⋯ → Convert to issue** → pegar la plantilla de 6.3 con los datos de la tabla de la sección 7 → completar *Assignees*, *Labels*, *Sprint*, *Estimación* y *Prioridad*. Si la tarjeta tiene varios dueños (`A + B + C`), se asigna a todos en la misma tarjeta; no se duplica.

## 6.3 Cómo se define una tarea

```
Objetivo del sprint → Historias (funcionalidades) → Tareas (tarjetas)
"venta retail MTS"     "cotización con reglas"       "S1-09 Implementar la cotización..."
```

1. **Título = verbo + resultado.**
2. **Tamaño: 1 a 1,5 h.** Cabe en una sesión diaria; si es más grande, se divide.
3. **Una tarjeta por tarea.**
4. **Criterio de aceptación verificable:** una frase que diga cómo saber que está terminada.
5. **Dependencias explícitas** si no puede empezar antes que otra.

| Campo | Ejemplo |
|---|---|
| ID | `S1-09` |
| Título | Implementar la cotización: correlativo, vigencia, líneas e IGV |
| Tipo (etiqueta) | 📚 aprendizaje · ⚙️ codigo · 🧪 pruebas · 📝 docs · 🔧 configuracion |
| Dueños y horas | C · 1,5 h |
| Prioridad | Núcleo / Si alcanza |
| Criterio de aceptación | COT-01 a COT-03 con al menos 4 pruebas pasando |
| Depende de | S1-07 |

## 6.4 Aprendizaje en pareja

Las tarjetas `aprendizaje` con A (S1-07) son **sesiones conjuntas que producen código real**: se aprende capas, inyección de dependencias y xUnit construyendo el endpoint de Cliente, no con tutoriales aparte. Los demás aprendizajes se hacen en la sesión de la tarjeta que los necesita.

## 7. Sprint 1 — Tareas

| ID | Título | Tipo | Dueños | Horas por persona | Prioridad | Día objetivo | Depende de | Criterio de aceptación |
|---|---|---|---|---|---|---|---|---|
| `S1-01` | Crear el repositorio, el tablero y cargar las tarjetas del sprint | configuracion | A | A 1 | Núcleo | Jue 29/10 | — | Repo en GitHub con esta estructura, tablero con las columnas y las tarjetas cargadas; B y C lo pueden clonar |
| `S1-02` | Instalar .NET SDK, SQL Server y editor, y clonar el repositorio | configuracion | B + C | B 1,5 / C 1,5 | Núcleo | Jue 29/10 | S1-01 | `dotnet --version` responde, se conectan a SQL Server y el repo está clonado |
| `S1-03` | Practicar Git: rama, commit, push y PR con Closes #N | aprendizaje | B + C | B 0,5 / C 0,5 | Núcleo | Vie 30/10 | S1-02 | Cada uno agrega su nombre al README en un PR revisado por el otro y fusionado; la tarjeta se cierra sola |
| `S1-04` | Crear el esqueleto de la solución modular (Api, Comercial, Compartido, Tests) | configuracion | A | A 1 | Núcleo | Vie 30/10 | S1-01 | `dotnet build` y `dotnet test` en verde; global.json creado; la Api arranca; conexión local a SQL Server documentada en contexto.md |
| `S1-05` | Modelar entidades y estados de Comercial, DbContext, primera migración y datos semilla | codigo | A | A 1,5 | Núcleo | Sáb 31/10 | S1-04 | Migración aplicada en SQL Server; 8 muebles y la lista Retail vigente cargados; entidades y enums sin lógica |
| `S1-06` | Aprender C# y SQL esenciales con ejercicios del dominio | aprendizaje | B + C | B 1 / C 1 | Núcleo | Sáb 31/10 | S1-02 | Resuelven y explican 5 ejercicios: filtrar productos, subtotal con IGV usando decimal, SELECT con JOIN |
| `S1-07` | Aprender capas, inyección de dependencias y xUnit construyendo el endpoint de Cliente | aprendizaje | A + B + C | A 1,5 / B 1,5 / C 1,5 | Núcleo | Dom 01/11 | S1-05, S1-06 | POST y GET /clientes recorren Api, Servicio y Datos; una prueba xUnit pasa; B y C explican qué hace cada capa |
| `S1-08` | Implementar las reglas de Cliente (DNI 8, RUC 11, documento único) con pruebas | pruebas | B | B 1,5 | Núcleo | Lun 02/11 | S1-07 | CLI-01 a CLI-03 están en el catálogo con al menos 4 pruebas pasando |
| `S1-09` | Implementar la cotización: correlativo, vigencia, líneas con precio de lista e IGV 18 % | codigo | C | C 1,5 | Núcleo | Lun 02/11 | S1-07 | COT-01 a COT-03 y PRE-01, PRE-02 en el catálogo con al menos 4 pruebas pasando |
| `S1-10` | Implementar los estados de la cotización y sus transiciones válidas | pruebas | C | C 1,5 | Núcleo | Mar 03/11 | S1-09 | COT-04 a COT-06 con al menos 4 pruebas, incluida una transición inválida rechazada |
| `S1-11` | Implementar consulta de productos con lista vigente por canal y la oportunidad con productos | codigo | B | B 1,5 | Núcleo | Mar 03/11 | S1-05, S1-07 | GET /productos devuelve precios de la lista vigente; POST /oportunidades crea en estado Nueva; OPO-01, OPO-02 y PRE-03 con prueba |
| `S1-12` | Implementar el anticipo: registrar, confirmar con rol Tesorería simulado y marcar Pago validado | codigo | A | A 1,5 | Núcleo | Lun 02/11 | S1-07 | PAG-01 a PAG-05 en el catálogo con al menos 4 pruebas pasando |
| `S1-13` | Implementar la conversión de cotización a orden de venta con bloqueo sin pago validado | codigo | A | A 1,5 | Núcleo | Mar 03/11 | S1-12 | OV-01 a OV-05 en el catálogo con al menos 4 pruebas pasando |
| `S1-14` | Conectar las piezas, probar de punta a punta y ensayar la demo | pruebas | A + B + C | A 1 / B 1 / C 1 | Núcleo | Mié 04/11 | S1-08, S1-09, S1-10, S1-11, S1-12, S1-13 | El guion de demo recorre cliente, oportunidad, cotización, anticipo y OV sin errores dos veces seguidas |
| `S1-15` | Escribir el capítulo semana-01 y crear el tag | docs | A | A 0,5 | Núcleo | Mié 04/11 | S1-14 | docs/capitulos/semana-01.md completo y tag semana-01 creado |
| `S1-16` | Crear pantalla mínima (HTML + Bootstrap + fetch) con selector de rol simulado | codigo | B + C | B 1 / C 1 | Si alcanza | — | S1-14 | Una página permite recorrer el camino feliz sin usar Swagger |
| `S1-17` | Configurar CI con GitHub Actions | configuracion | A | A 1 | Si alcanza | — | S1-04 | Un PR de prueba con una prueba rota se marca en rojo y uno sano en verde (ver docs/guias/ci.md) |
| `S1-18` | Crear vista imprimible de la cotización | codigo | B | B 1 | Si alcanza | — | S1-10 | La cotización se imprime o guarda como PDF desde el navegador con correlativo, líneas e IGV |

Las tarjetas **Si alcanza** solo se empiezan si el punto de control del día 6 lo permite; si no, pasan al Backlog de la semana 2.

### Carga por persona

| Persona | Núcleo | Si alcanza | Total |
|---|---|---|---|
| A | 9,5 h | 1 h | 10,5 h |
| B | 8,5 h | 2 h | 10,5 h |
| C | 8,5 h | 1 h | 9,5 h |

A además reserva ≈ 1 h para revisar PR (ver [sprints](sprints.md#52-sprint-1--comercial)). Cada persona tiene una tarjeta por día, según la columna "Día objetivo"; el día 7 (miércoles) es la prueba de punta a punta.
