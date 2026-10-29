# 4. Flujo de trabajo

[← Índice](../../README.md)

## 4.0 Sprints y tablero

El trabajo se organiza en [sprints semanales](sprints.md) (jueves a miércoles) y se gestiona en el [tablero Kanban](kanban.md). Regla: **1 tarjeta en curso por persona**, que coincide con "una tarea por sesión".

## 4.1 Semana tipo (7–10,5 h por persona)

| Día | Qué pasa |
|---|---|
| **Jueves** (clase) | **Review** = presentación del avance. Enseguida: retro (15 min) y planning (20 min) de la semana siguiente, con `/retro` y `/planning` |
| **Viernes a martes** | Una sesión diaria de 1–1,5 h: una tarjeta |
| **Día 4 y día 6** | Puntos de control: se aplica la [regla de recorte](alcance.md#24-regla-de-recorte) |
| **Miércoles** | Prueba de punta a punta, ensayo de la demo, capítulo semanal y tag |

Los fines de semana se trabajan (7 días), así que **no hay colchón oculto**: el colchón es la regla de recorte.

## 4.2 Rutina de cada sesión

1. **Retomar (5 min):** `/iniciar` o leer el último "siguiente paso" de la [bitácora](../../BITACORA.md).
2. **Trabajar:** una sola tarjeta, con un resultado visible (una prueba que pasa, un endpoint que responde).
3. **Cerrar (10 min):** `dotnet build` y `dotnet test`, commit, PR, y `/cierre` para la bitácora.

Trabado más de 20 min: se anota y se consulta. En sesiones de una hora, esperar más es perder el día.

## 4.3 Git

- `main` **siempre funciona** (se recomienda protegerla: PR obligatorio).
- Una rama por tarea: `nombre/tarea` (ej. `luis/reglas-cliente`).
- PR revisado por otro integrante. Si toca reglas de negocio, `Compartido` o migraciones, **revisa A**; los demás PR pueden revisarse entre B y C.
- **Un archivo, un dueño por semana**, por módulo y por capa. `DbContext` y migraciones: solo A.
- Commits pequeños con prefijo: `feat:`, `fix:`, `test:`, `docs:`, `chore:`.
- Tag `semana-NN` el miércoles al cerrar, y `final` al terminar el curso.

## 4.4 Pruebas

- xUnit sobre la capa de **Servicios**, con objetos simples o repositorios falsos (sin base de datos).
- **Cada regla del catálogo tiene al menos una prueba.** Convención de nombre: `Clase_Condicion_ResultadoEsperado`.
- Pruebas de integración (con base de datos) desde la semana 3. Pruebas de interfaz: no.
- No se hace merge si las pruebas fallan. Con CI, GitHub lo verifica solo ([guía](../guias/ci.md)).

## 4.5 Documentación

- Un capítulo por semana desde la [plantilla](../capitulos/_plantilla.md), enlazado a su tag.
- Cada decisión → [decisiones](../decisiones.md). Cada regla → [catálogo](../reglas.md) con fuente y prueba. Cada término → [glosario](../glosario.md) en la misma sesión.
- Cada área nueva → su [contrato de integración](../contratos/_plantilla.md) antes de integrarse.

## 4.6 Uso del asistente

- **Tareas repetitivas** (entidades, DTOs, CRUD, configuración de EF Core, datos semilla, HTML/Bootstrap): la IA las genera.
- **Reglas de negocio y pruebas**: las escribe el equipo; la IA explica, revisa y sugiere.
- **Siempre** muestra qué hará y espera un "sí" antes de escribir o ejecutar.
- Herramientas: A usa OpenCode, otro integrante usa Codex, el tercero puede empezar con cualquiera (tarjeta de aprendizaje en el sprint en que se sume). `AGENTS.md` sirve para todas.
- Rituales: `/iniciar`, `/cierre`, `/retro`, `/planning` ([comandos](../comandos/iniciar.md)).

## 4.7 Reglas para no descarrilarse

- Una tarea por sesión. Lo demás se anota en la bitácora.
- Primero correcto, luego (si hay tiempo) bonito.
- No se agrega alcance a mitad de sprint sin sacar otra cosa.
- Un área nueva no empieza sin contrato.

## 4.8 Control semanal (5 min, miércoles)

- ¿Entregable cumplido? Sí / Parcial / No.
- Horas reales vs. estimadas, por persona (tabla de la [bitácora](../../BITACORA.md)).
- Si "Parcial" o "No": ¿qué se recorta y qué pasa al Backlog?
