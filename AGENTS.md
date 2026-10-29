# AGENTS.md

Proyecto académico (curso de ERP, 3 integrantes: A, B y C). Prototipo web de un ERP para FAMIHOGAR SAC (manufactura y retail de muebles, Perú), construido **por áreas**: una área nueva cada semana, presentada cada jueves. Todo en español: documentación, commits, tablas y términos del dominio.

## Estado actual

- **Aún no hay código**: `src/` y `tests/` solo tienen `.gitkeep`. No hay solución .NET, CI ni comandos de build/test todavía. No inventes comandos; cuando existan, estarán en `docs/contexto.md`.
- Lo que existe es documentación en `docs/` más `BITACORA.md`. El plan es la fuente de verdad de lo que se construye.
- Sprints **semanales** (jueves a miércoles). La semana actual y el siguiente paso están en `BITACORA.md` y `docs/contexto.md`.

## Qué se construye

ERP web de **una sola empresa**, como **monolito modular**: una solución .NET y una base SQL Server, con un módulo por área (`Comercial`, luego `Logistica`, …) y un módulo `Compartido`. Cada semana se **amplía el mismo ERP**; los prototipos no se descartan. La semana 1 es el módulo **Comercial**, camino feliz de una venta retail MTS: cliente → oportunidad → cotización → anticipo → orden de venta.

## Fuente de verdad del alcance

- `docs/fuentes/to-be-comercial.md`: resumen verificado del TO-BE (registros, estados, microprocesos). El PDF completo está en `docs/fuentes/Documento_TO_BE_FAMIHOGAR.pdf` (87 págs.): no lo leas entero, busca el código del microproceso (p. ej. `PO.02.P02.SP02.A01`).
- Cada regla de negocio cita su microproceso en `docs/reglas.md`.

## Restricciones de diseño (no violar)

- **D03:** monolito modular. Nada de microservicios.
- **D05:** tres capas por módulo: Api (controladores) → Servicios (reglas de negocio) → Datos (repositorios con EF Core). Sin Clean Architecture ni DDD completo por ahora.
- **D06:** un esquema SQL por módulo (`comercial.Cliente`). Un módulo **nunca** lee tablas de otro ni referencia sus clases internas: solo usa su interfaz pública en `Contratos` (ver `docs/arquitectura.md`).
- **D04:** C# / ASP.NET Core Web API / EF Core / SQL Server. Reglas en la capa de Servicios, nunca en controladores ni en la base.
- **D12:** simulaciones: login = selector de rol, SUNAT y facturación simuladas, datos ficticios. Sin autenticación real, sin nube.
- Los valores de negocio configurables (IGV, vigencia, % de anticipo) van en configuración, no hardcodeados.
- Solo migraciones creadas por A, para evitar conflictos de EF Core.

## Reglas de documentación (obligatorias)

- Cada decisión de diseño va a `docs/decisiones.md` (formato `Dnn`, siguiente: D20).
- Cada regla de negocio va a `docs/reglas.md` con módulo, fuente (`NORMA`, `TO-BE` o `SUPUESTO`), microproceso y prueba. Cada regla tiene al menos una prueba xUnit.
- Cada sigla o término nuevo va a `docs/glosario.md` en la misma sesión.
- Un capítulo por semana en `docs/capitulos/semana-NN.md` desde `_plantilla.md`, enlazando al tag.
- Al cerrar una sesión se agrega una entrada arriba en `BITACORA.md` (hice / falló / siguiente paso exacto).
- Un área nueva exige su contrato en `docs/contratos/` antes de integrarse.
- Si se agrega o mueve un documento, actualiza el índice de `README.md`.

## Flujo de Git

- `main` siempre funciona; no se hace merge si build o pruebas fallan.
- Ramas `nombre/tarea`, PR revisado por otro integrante (si toca reglas, `Compartido` o migraciones, revisa A), `Closes #N`.
- Un archivo, un dueño por semana (carpeta por módulo y por capa).
- Commits con prefijo `feat:`, `fix:`, `test:`, `docs:`, `chore:`.
- Tags semanales `semana-01`, `semana-02`… y `final`.

## Uso del asistente

- **La IA solo genera código repetitivo**: entidades, DTOs, CRUD, configuración de EF Core, datos semilla, HTML/Bootstrap de tablas y formularios. **Las reglas de negocio y las pruebas las escribe el equipo** (es lo que se aprende y se evalúa).
- **Antes de escribir o ejecutar cualquier cosa, muestra qué hará y espera un "sí".** No ejecutes comandos de Git ni migraciones: guía al equipo.
- Hay integrantes nuevos en C#: explica diferencias y conceptos (capas, DI, xUnit) cuando sea relevante.
- Una tarjeta por sesión; lo demás se anota en la bitácora. Respeta el orden del kanban y explica por qué cambia de tarjeta.
- Comandos: `/iniciar`, `/cierre`, `/retro`, `/planning` (definidos en `docs/comandos/`).

## Mantenimiento del contexto (proactivo, con aprobación)

Nunca edites AGENTS.md, `docs/contexto.md` ni los anexos por iniciativa propia. Cuando detectes algo que valga la pena recordar, PROPÓNLO al final de tu respuesta.

**Cuándo proponer:** comando nuevo; cambio de estructura o módulo nuevo; convención de código; decisión de diseño (→ decisiones.md); término nuevo (→ glosario.md); regla nueva o cambiada (→ reglas.md); el usuario te corrige o un error se repite (→ trampa en contexto.md); empieza o termina un sprint (ofrece `/retro`); contexto.md supera 60 líneas (propón poda).

**Formato** (máximo 2 propuestas por respuesta):

> 📌 **Propuesta de contexto**
> - **Archivo:** docs/contexto.md → sección "Trampas"
> - **Texto:** `<texto exacto a agregar o reemplazar>`
> - **Por qué:** <una frase>
> ¿Lo agrego? (sí / no / editar)

Solo escribe después de un "sí". Si dicen "no", no vuelvas a proponerlo. No propongas lo trivial ni lo ya documentado.
