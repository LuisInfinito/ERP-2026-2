# AGENTS.md

Proyecto académico (curso de ERP). Equipo: **Miguel** (responsable técnico, sabe C#), **Luis** y **Pablo** (vienen con POO y aprenden C#, SQL y front en el camino). Prototipo web de un ERP para FAMIHOGAR SAC (manufactura y retail de muebles, Perú), construido **por áreas, un área por sprint de una semana**, y presentado cada martes en **pantalla y API**. Todo en español: documentación, commits, tablas y términos del dominio.

## Regla general (no se negocia)

**No crees ni modifiques ningún archivo sin preguntar antes y recibir un "sí".** Antes de escribir o ejecutar cualquier cosa, muestra qué harás y espera la confirmación. No ejecutes comandos de Git ni migraciones: guía al equipo (D09).

## Estado actual

- **Sprint 1 = Comercial, núcleo esencial, en 1 semana** (martes 03/11 – lunes 09/11), demo el **martes 10/11** (D07, D19). Del 29/10 al 02/11 se hizo la preparación (S1-01, S1-04, S1-05, S1-08).
- Sprint 2 (10/11 – 16/11, demo 17/11): Logística, **pendiente de confirmar** con el profesor; las tarjetas que esperan cada área están en `docs/plan/sprints.md` 5.6. La solución .NET está en `main` y sus comandos en `docs/contexto.md`.
- Las tarjetas están en el tablero de GitHub (fuente de verdad); el borrador es `docs/plan/sprint-01.md`. La semana actual y el siguiente paso están en `BITACORA.md` y `docs/contexto.md`.

## Qué se construye

ERP web de **una sola empresa**, como **monolito modular** (D03): una solución .NET y una base SQL Server con cuatro módulos de área divididos en **submódulos**, más `Compartido`. Todos los construye este mismo equipo.

| Módulo | Submódulos |
|---|---|
| Comercial | CRM · Ventas · Postventa |
| Finanzas | Tesorería · Créditos y Cobranzas · Facturación |
| Logística | Inventarios · Despacho |
| Planta | Ingeniería · Producción |
| Compartido | Trazabilidad · Seguridad · Notificaciones |

Submódulos del mismo módulo se usan directamente; entre módulos, solo por `Contratos` (D06). Detalle en `docs/arquitectura.md` 3.2.

- **Sprint 1 (Comercial):** núcleo esencial de PO.02 en CRM y Ventas: venta retail MTS de punta a punta con descuento aprobado y trazabilidad. Leads, PDF, notificaciones y Postventa quedan como pendientes del área (`docs/alcance/comercial.md`).
- **Interfaz** (PO.01, PO.03, PO.04, PO.05, PA.01) y crédito B2B: se construyen **en el sprint de su área**, no en Comercial. Si un área necesita a otra que aún no existe, usa una versión mínima detrás del contrato. Comercial nunca contiene lógica de otra área (D06: "cada área se encarga de lo suyo").

## Trazabilidad: la prioridad (D25)

Todo documento (cotización, OV, anticipo, guía, POD, comprobante, ticket, nota de crédito…) debe tener:
1. **Historial:** estado anterior → nuevo, usuario, rol, fecha y hora, y motivo. No se borra ni se edita.
2. **Cadena documental:** su documento de origen; desde cualquiera se ven antecesores y sucesores.
3. **Ficha:** vista de detalle imprimible con cabecera, detalle, historial y cadena.

Si una tarjeta crea o cambia un documento y no deja historial y cadena, no está terminada.

## Alcance y fuentes (por área)

- Cada área tiene su alcance en `docs/alcance/<area>.md` y su fuente en `docs/fuentes/`.
- **Comercial:** la fuente de verdad es el TO-BE. Resumen en `docs/fuentes/to-be-comercial.md`; el PDF (`docs/fuentes/Documento_TO_BE_FAMIHOGAR.pdf`, 87 págs.) no se lee entero: busca el código del microproceso (p. ej. `PO.02.P02.SP02.A01`).
- **Logística y las demás:** fuente por confirmar. No inventes su alcance: su `/planning` parte de la fuente que indique el profesor y de las tarjetas que la esperan.
- Cada regla de negocio cita su origen en `docs/reglas.md`.

## Restricciones de diseño (no violar)

- **D05:** tres capas por módulo: Api (controladores) → Servicios (reglas) → Datos (repositorios con EF Core).
- **D06:** un esquema SQL por módulo (`comercial.Cliente`, también para sus submódulos). Un módulo **nunca** lee tablas de otro ni usa sus clases internas: solo su interfaz pública en `Contratos`.
- **D04:** C# / ASP.NET Core Web API / EF Core / SQL Server. Reglas en Servicios, nunca en controladores, pantallas ni base.
- **D13:** front en HTML + CSS propio + JS en `src/Erp.Api/wwwroot`, conectado con `fetch`; cada documento con su ficha.
- **D12:** login = selector de rol (14 roles del TO-BE); SUNAT, banco, correo, WhatsApp y app móvil simulados; datos ficticios.
- Valores de negocio configurables (IGV, vigencia, % de anticipo, límites) en configuración, no en el código.
- Solo Miguel crea migraciones y toca el `DbContext`.

## Reglas de documentación (obligatorias)

- **Decisiones (D24):** antes de registrar una decisión, revisa si contradice o cambia una existente en `docs/decisiones.md`. Si es así, **modifica esa decisión** (conserva el texto original, agrega "Modificación AAAA-MM-DD" y actualiza "Vigente"). Solo un tema nuevo lleva `Dnn` nuevo (siguiente: D26).
- Cada regla de negocio va a `docs/reglas.md` con módulo, fuente (`NORMA`, `TO-BE` o `SUPUESTO`), microproceso y prueba xUnit.
- Cada sigla o término nuevo va a `docs/glosario.md` en la misma sesión.
- Un capítulo por semana en `docs/capitulos/semana-NN.md` desde `_plantilla.md`, enlazando al tag.
- Al cerrar una sesión se agrega una entrada arriba en `BITACORA.md` (nombre, horas, hice / falló / siguiente paso exacto).
- Un área o módulo nuevo exige su alcance en `docs/alcance/` y su contrato en `docs/contratos/` antes de integrarse.
- Si se agrega o mueve un documento, actualiza el índice de `README.md`.

## Tablero y flujo de Git

- **El tablero de GitHub es la fuente de verdad de las tarjetas** (D22). Trabajo sin tarjeta no se hace.
- `main` siempre funciona; no se hace merge si build o pruebas fallan.
- Ramas `nombre/tarea` dentro del repo (sin forks, D23), PR revisado por otro integrante (si toca reglas, `Compartido` o migraciones, revisa Miguel), `Closes #N`.
- **`/cierre` es el punto final de cambios** (D27): al ejecutarlo, código, pruebas, migraciones y toda la documentación deben estar actualizados e incluidos. Después no se permiten más modificaciones; el PR se abre con esa versión cerrada. Si la revisión requiere cambios, se coordina un nuevo cierre antes de modificarlos.
- Un archivo, un dueño por semana. Pantallas: cada uno la de su pieza; `index.html`, `aplicaciones.js`, `estilos.css` y la ficha común son de Luis.
- Commits con prefijo `feat:`, `fix:`, `test:`, `docs:`, `chore:`. Tags semanales `semana-01`, `semana-02`… y `final`.

## Uso del asistente (D09)

- **Puedes generar código, incluidas reglas y pruebas, pero sencillo y fácil de entender:** nombres claros en español (D16), métodos cortos, una responsabilidad por clase, comentarios breves donde ayuden, sin patrones avanzados ni librerías innecesarias.
- **Siempre pregunta antes** y nunca crees ni modifiques archivos sin un "sí".
- Explica lo que generaste en pocas líneas. Luis y Pablo son nuevos en C#: explica conceptos (capas, DI, xUnit, EF Core) cuando aparezcan.
- **Explicar es fundamental:** en `/cierre`, la persona explica con sus palabras lo que hizo y tú corriges lo que no sea exacto.
- Una tarjeta a la vez; en sesiones de 3 h (planificadas a ≈ 2 h, D08) se encadenan. Respeta el orden del tablero y explica por qué cambias de tarjeta.
- Comandos: `/iniciar`, `/cierre`, `/retro`, `/planning` (definidos en `docs/comandos/`).

## Mantenimiento del contexto (proactivo, con aprobación)

Nunca edites AGENTS.md, `docs/contexto.md` ni los anexos por iniciativa propia. Cuando detectes algo que valga la pena recordar, PROPÓNLO al final de tu respuesta.

**Cuándo proponer:** comando nuevo; cambio de estructura o módulo nuevo; convención de código; decisión nueva o **contradicción con una decisión existente** (→ modificar en decisiones.md); término nuevo (→ glosario.md); regla nueva o cambiada (→ reglas.md); el usuario te corrige o un error se repite (→ trampa en contexto.md); termina un sprint (ofrece `/retro`); contexto.md supera 60 líneas (propón poda).

**Formato** (máximo 2 propuestas por respuesta):

> 📌 **Propuesta de contexto**
> - **Archivo:** docs/contexto.md → sección "Trampas"
> - **Texto:** `<texto exacto a agregar o reemplazar>`
> - **Por qué:** <una frase>
> ¿Lo agrego? (sí / no / editar)

Solo escribe después de un "sí". Si dicen "no", no vuelvas a proponerlo. No propongas lo trivial ni lo ya documentado.
