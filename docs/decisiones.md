# Anexo B — Registro de decisiones

[← Índice](../README.md)

Formato: fecha · decisión · alternativas consideradas · por qué. Ámbito: *Global* o del área.

**Estados:** *Aprobada* · *Propuesta* (pendiente de confirmar por el equipo) · *Modificada (fecha)* (sigue vigente, con cambios).

## Cómo se cambia una decisión (D24)

Si algo nuevo contradice o cambia una decisión ya registrada, **no se crea una decisión nueva**: se modifica la existente.

1. Se conserva el texto original tal cual (no se borra ni se reescribe).
2. Se agrega debajo un bloque **Modificación AAAA-MM-DD** con qué cambia y por qué.
3. Se actualiza la línea **Vigente**, que dice en una frase lo que rige hoy.
4. El estado pasa a *Modificada (AAAA-MM-DD)*. Si se modifica varias veces, se agregan bloques en orden de fecha.
5. Si solo se vuelve a confirmar sin cambios, se agrega una línea **Confirmada AAAA-MM-DD**.

Solo se crea una decisión `Dnn` nueva cuando el tema no estaba decidido antes. Siguiente número libre: **D28**.

---

## D01 — Objetivo: el mejor intento funcional
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Objetivo: el mejor intento funcional, no un ERP robusto
**Alternativas:** Apuntar a un ERP completo y pulido.
**Por qué:** El curso evalúa que se entiendan y definan los grandes procesos y se conviertan en un sistema que funcione. Somos estudiantes y vamos aprendiendo sobre la marcha.

## D02 — Fuente de verdad del alcance
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-10-29) · **Ámbito:** Global
**Decisión original:** El Documento TO-BE FAMIHOGAR es la fuente de verdad del alcance; cada regla cita su microproceso
**Alternativas:** Definir el alcance por intuición o por otros ERP.
**Por qué:** Evita inventar procesos y permite trazar cada regla hasta su origen. No hay experto de negocio al que entrevistar.
**Modificación 2026-10-29:** Cada área tiene su propio alcance y su propia fuente. El Documento TO-BE FAMIHOGAR es la fuente de verdad **solo del área Comercial**. La fuente de Logística aún no se conoce (se espera indicación del profesor); las áreas siguientes las solicitará el profesor. Motivo: el TO-BE describe el área Comercial; el resto de áreas no sale de ese documento.
**Vigente:** Cada área tiene su fuente de verdad en `docs/fuentes/` y su alcance en `docs/alcance/`; el TO-BE manda solo en Comercial.

## D03 — Monolito modular
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-10-31) · **Ámbito:** Global
**Decisión original:** Monolito modular: una solución .NET, una base SQL Server, un módulo por área
**Alternativas:** Microservicios; un sistema por área.
**Por qué:** En un ERP los módulos se hablan todo el tiempo; separar servicios traería problemas de red y datos duplicados sin beneficio a esta escala. El monolito modular permite agregar áreas sin romper las anteriores.
**Confirmada 2026-10-29** sin cambios.
**Modificación 2026-10-30:** Se fijan cinco módulos de área más `Compartido`: **Comercial**, **Planta** (Ingeniería y Producción), **Logistica** (inventario, transferencias, despacho), **Finanzas** (comprobantes, conciliación, cuentas por cobrar) y **Postventa**, tomados de la tabla de módulos del TO-BE (sección 2). Todas las áreas las construye el mismo equipo.
**Modificación 2026-10-31:** Cada módulo se divide en **submódulos** (grupos de procesos con sus documentos y un rol responsable; las características como precios o descuentos viven dentro de un submódulo). Quedan **cuatro módulos de área** más `Compartido`: **Comercial** (CRM, Ventas, Postventa), **Finanzas** (Tesorería, Créditos y Cobranzas, Facturación), **Logística** (Inventarios, Despacho) y **Planta** (Ingeniería, Producción); `Compartido` tiene Trazabilidad, Seguridad y Notificaciones. **Postventa deja de ser módulo y pasa a submódulo de Comercial**, porque el TO-BE trata PO.06 como núcleo comercial. La **evaluación de crédito** pasa de Comercial a **Finanzas › Créditos y Cobranzas**, como en la tabla de módulos del TO-BE (sección 2). Detalle en `docs/arquitectura.md` 3.2.
**Vigente:** Monolito modular: Comercial (CRM, Ventas, Postventa), Finanzas (Tesorería, Créditos y Cobranzas, Facturación), Logística (Inventarios, Despacho), Planta (Ingeniería, Producción) y Compartido.

## D04 — Stack: C#, .NET, EF Core y SQL Server
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Stack: C#, ASP.NET Core Web API, Entity Framework Core y SQL Server; versión LTS vigente de .NET fijada en `global.json`
**Alternativas:** Otro lenguaje o base de datos.
**Por qué:** Es lo que el equipo ya decidió; Miguel tiene experiencia en C#. La versión exacta se registra en `docs/contexto.md` al crear el esqueleto.
**Confirmada 2026-10-29** sin cambios.

## D05 — Tres capas por módulo
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Tres capas por módulo: Api → Servicios → Datos (repositorios con EF Core)
**Alternativas:** Clean Architecture o DDD completo; cuatro capas separando "Api" de "controlador" (descartada el 2026-10-29: en ASP.NET Core la capa Api *son* los controladores).
**Por qué:** Luis y Pablo solo conocen POO; tres capas se aprenden en una tarjeta y ya aplican SOLID (inyección de dependencias, una responsabilidad por clase). Se puede evolucionar después.
**En palabras simples:** Api (controladores) recibe el pedido y devuelve la respuesta, sin decidir nada; Servicios aplica las reglas de negocio; Datos guarda y lee de la base. Así las reglas viven en un solo lugar y se prueban sin base de datos.
**Confirmada 2026-10-29** sin cambios.

## D06 — Un esquema SQL por módulo y contratos públicos
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-10-31) · **Ámbito:** Global
**Decisión original:** Un esquema SQL por módulo; los módulos solo se hablan por su interfaz pública en `Contratos`
**Alternativas:** Tablas compartidas libres; `JOIN` entre módulos.
**Por qué:** Mantiene fronteras claras para que agregar Logística no rompa Comercial y deja abierta la opción de separar módulos más adelante.
**Confirmada 2026-10-29** sin cambios.
**Modificación 2026-10-30:** "Cada área se encarga de lo suyo": los procesos que el TO-BE Comercial marca como **interfaz** (PO.01, PO.03, PO.04, PO.05, PA.01) se construyen **en el sprint de su área**, dentro de su módulo y detrás de su contrato. Comercial nunca contiene lógica de otra área. Las tarjetas de esos procesos se redactan desde el primer planning y esperan en el tablero el sprint de su área. Si un área necesita a otra que aún no existe, usa una **versión mínima**: una simulación sencilla detrás del contrato del módulo dueño, que esa área amplía cuando llega su sprint.
**Modificación 2026-10-31:** Las reglas se aplican por **módulo**, no por submódulo: un esquema SQL por módulo (`comercial.Ticket`), y los submódulos de un mismo módulo se usan directamente entre sí (Postventa lee la OV de Ventas sin contrato). Entre módulos distintos sigue la regla de solo contratos. La evaluación de crédito B2B vive en Finanzas › Créditos y Cobranzas y se construye en el sprint de Finanzas; Ventas la consulta por contrato.
**Vigente:** Un esquema por módulo; submódulos del mismo módulo se usan directo; entre módulos solo contratos; cada área construye sus procesos en su propio sprint y, si necesita a otra que aún no existe, usa una versión mínima detrás del contrato.

## D07 — Sprints y calendario
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-11-03) · **Ámbito:** Global
**Decisión original:** Sprints semanales de jueves a miércoles; la review es la presentación del jueves. Primera presentación supuesta el 05/11/2026
**Alternativas:** Sprints de 2 semanas.
**Por qué:** El curso exige un avance cada jueves. **Por confirmar:** si la primera presentación es el 29/10 o el 05/11; la regla de recorte cubre ambos casos.
**Modificación 2026-10-29:** Se confirma la primera presentación el **jueves 05/11/2026** y el ritmo de **un área por semana**: cada jueves se presenta un área nueva.
**Modificación 2026-11-03 (calendario):** La demo pasa al **martes** y los sprints van de **martes a lunes**. Del 29/10 al 02/11 se hace la **preparación** (tablero, esqueleto, entidades e historial); el **sprint 1 (Comercial)** va del martes 03/11 al lunes 09/11, con demo el martes 10/11. El sprint 2 (10/11 – 16/11, demo 17/11) es para Logística si el profesor lo confirma; las áreas siguientes, una por semana.
**Vigente:** Un área por sprint de una semana, de martes a lunes, con demo el martes; sprint 1 = Comercial, 03/11 – 09/11, demo 10/11.

## D08 — Tarjetas de 1–1,5 h y WIP de 1
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-11-03) · **Ámbito:** Global
**Decisión original:** Tarjetas de 1–1,5 h, una por sesión, WIP de 1 por persona, definición de terminado única
**Alternativas:** Tarjetas de hasta 3 h.
**Por qué:** Cada persona dispone de 1–1,5 h al día; una tarjeta cabe en una sesión y el avance es visible.
**Modificación 2026-10-30:** Las sesiones pasan a ser de **2 a 3 h** por día. Las tarjetas siguen siendo de 1–1,5 h y en una sesión se encadenan, siempre de una en una (WIP 1).
**Modificación 2026-11-03:** Cada integrante dispone de **3 h diarias**, 7 días: 21 h por persona y 63 h el equipo por semana. Las tarjetas se planifican a **≈ 2 h por día y persona**; la tercera hora queda para aprender, revisar PR, trabajar en pareja y absorber retrasos. Motivo: Luis y Pablo aprenden C# mientras construyen y una semana no deja margen para recuperar días perdidos.
**Vigente:** Tarjetas de 1–1,5 h, sesiones de 3 h que encadenan tarjetas, planificadas a ≈ 2 h diarias por persona, WIP de 1 por persona.

## D09 — Uso de la IA para escribir código
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-10-31) · **Ámbito:** Global
**Decisión original:** La IA solo genera código repetitivo (entidades, DTOs, CRUD, configuración de EF Core, semillas, HTML/CSS de tablas y formularios) y siempre pide permiso antes de escribir o ejecutar. Las reglas de negocio y las pruebas las escribe el equipo
**Alternativas:** Que la IA escriba todo; que no escriba nada.
**Por qué:** Acelera lo mecánico sin quitarle al equipo lo que debe aprender y defender.
**Confirmada 2026-10-29** sin cambios (se cambia "HTML/Bootstrap" por "HTML/CSS" por D13).
**Modificación 2026-10-29 (modo tutor):** Luis y Pablo llegan solo con POO y existe el riesgo de "vibecodear" (pedirle todo a la IA sin entenderlo). Por eso el asistente identifica a la persona al iniciar (`/iniciar`) y, con Luis y Pablo, trabaja en **modo tutor**: (1) antes de escribir, pregunta cómo lo construirían; (2) escribe solo lo repetitivo y las **bases**: clases, propiedades, DTOs, firmas de métodos, configuración y HTML de formularios; (3) el cuerpo de las reglas, las pruebas y la lógica de las pantallas (`fetch`, mostrar resultados) los escribe la persona, a partir de marcas `// TODO (Nombre): …` que describen en palabras qué hacer; (4) si la persona se traba, da pistas graduales (pregunta → concepto → ejemplo de un caso distinto), nunca la solución exacta; (5) al terminar, le pide que explique lo que escribió. Con Miguel se aplica D09 sin modo tutor.
**Modificación 2026-10-30:** **La IA puede generar código**, incluidas reglas de negocio y pruebas, siempre **sencillo y fácil de entender** (nombres claros, métodos cortos, comentarios donde haga falta, sin patrones avanzados). **Siempre pregunta antes** de escribir o ejecutar. **Regla general: el asistente no crea ni modifica ningún archivo sin preguntar antes.** El **modo tutor queda suspendido**; su descripción se conserva arriba por si el equipo decide volver a él. **Se mantiene** que en `/cierre` cada integrante explique con sus palabras lo que hizo: explicar es fundamental en este proyecto.
**Modificación 2026-10-31 (explicar los términos):** el asistente **explica cada término técnico nuevo antes de usarlo**: qué es, para qué sirve y por qué se introduce, en lenguaje sencillo y con lo esencial. Aplica en toda la conversación, no solo en `/cierre`.
**Modificación 2026-11-01 (explicar los eventos técnicos):** cada vez que aparece un evento técnico —un error de compilación, una migración rechazada, una dependencia circular, un comportamiento inesperado— el asistente lo explica en lenguaje sencillo, con **un ejemplo concreto del propio proyecto** (qué pasó, por qué pasó, cómo se corrige) y sin dar por sabido ningún término.
**Vigente:** La IA genera código sencillo, pregunta antes y nunca crea ni modifica archivos sin permiso; cada uno explica su trabajo en /cierre; explica cada término técnico nuevo antes de usarlo y cada evento técnico con un ejemplo del proyecto; modo tutor suspendido.

## D10 — Pruebas xUnit por regla de negocio
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Pruebas con xUnit sobre la capa de Servicios, al menos una por regla del catálogo; integración desde la semana 3; sin pruebas de interfaz
**Alternativas:** Sin pruebas; pruebas de interfaz.
**Por qué:** Es la prueba más barata de aprender (≈ 1 h) y la que más protege: las reglas de negocio son lo que se evalúa.
**Confirmada 2026-10-29** sin cambios.

## D11 — CI con GitHub Actions
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-11-03) · **Ámbito:** Global
**Decisión:** CI con GitHub Actions: tarjeta "Si alcanza" en la semana 1 y obligatoria desde la semana 2
**Alternativas:** Sin CI; CI desde el inicio.
**Por qué:** Convierte "`main` siempre funciona" en una regla automática. La semana 1 ya está ajustada de horas.
**Confirmada 2026-10-29** sin cambios.
**Modificación 2026-11-03:** El CI (S1-44) entra al **núcleo del sprint 1**, el jueves 05/11, y es obligatorio para todo PR desde que se fusiona. Motivo: en un sprint de una semana los tres integrantes fusionan PR a diario y un `main` roto bloquearía a todos.
**Vigente:** CI con GitHub Actions desde el jueves 05/11 (S1-44), obligatorio para todo PR.

## D12 — Simulaciones: rol, SUNAT y datos ficticios
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-10-30) · **Ámbito:** Global
**Decisión original:** Simulaciones: login con selector de rol, SUNAT y facturación simuladas, datos ficticios, sin nube
**Alternativas:** Login real; SUNAT real.
**Por qué:** No hay datos sensibles y el objetivo es el proceso, no la infraestructura.
**Modificación 2026-10-29:** Desaparece la categoría "fuera de alcance". Lo que antes figuraba así se reparte en dos: los **procesos del área** que no entran al núcleo pasan a **Si alcanza**; la **infraestructura real** (login real, SUNAT real, nube, app móvil, correo y WhatsApp reales, datos reales) queda en la categoría **Simulado** durante todo el curso.
**Modificación 2026-10-30:** Simulaciones que pide el TO-BE: la **app móvil** del chofer y del técnico es una **vista web adaptada a celular**; el **extracto bancario** es un archivo de ejemplo; si un área necesita a otra que aún no existe, la usa en versión mínima (D06).
**Vigente:** Infraestructura real simulada (login, SUNAT, correo, WhatsApp, app móvil, banco, nube, datos reales).

## D13 — Front
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-10-30) · **Ámbito:** Global
**Decisión original:** Front pendiente. Semana 1: demo por la API (Swagger/Scalar); pantalla mínima HTML + Bootstrap + `fetch` como Nivel 2. La elección entre eso y Angular se toma en el planning de la semana 2
**Alternativas:** Angular desde el inicio; decidir hoy.
**Por qué:** Angular exige TypeScript, componentes, servicios y RxJS: varias semanas que no hay. Como la API es la misma, migrar después no obliga a rehacer el back. Alternativa a evaluar: Razor Pages dentro del mismo proyecto (todo en C#).
**Modificación 2026-10-29:** Front en **HTML + CSS propio + JavaScript**, sin Bootstrap ni frameworks, servido desde `src/Erp.Api/wwwroot` y conectado a la API con `fetch`. La demo de cada jueves exige **pantalla y API** como mínimo aceptable, así que la pantalla del camino feliz pasa al **Núcleo**. La pantalla de acceso simulado y selector de aplicaciones que preparó Luis es la base del front. Dueño de los archivos de `wwwroot` en la semana 1: Luis (el resto de `Erp.Api` es de Miguel).
**Modificación 2026-10-29 (dueños de pantallas):** Cada integrante hace la pantalla de su propia pieza (Luis: cliente y oportunidad; Pablo: cotización; Miguel: anticipo y OV). Cada pantalla tiene sus propios archivos en `wwwroot/comercial/`; los archivos comunes (`index.html`, `aplicaciones.js`, `estilos.css`) son de Luis y los cambios de otros se revisan con él.
**Modificación 2026-10-30:** Cada documento tiene su **ficha** (D25): cabecera, detalle, historial y cadena documental, imprimible. Las pantallas se organizan por módulo y las hace el dueño de cada pieza. El selector de rol ofrece los 14 roles del TO-BE.
**Vigente:** HTML + CSS propio + JS en `wwwroot`; pantalla y API en cada demo; cada uno hace la pantalla y la ficha de su pieza.

## D14 — La cotización incluye el estado Aprobada
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Comercial
**Decisión:** La cotización incluye el estado **Aprobada**: Borrador → Aprobada → Enviada → Aceptada / Rechazada / Vencida. Sin descuento pendiente pasa a Aprobada sola; con descuento pendiente espera la aprobación de Jefatura o Gerencia (DES-03)
**Alternativas:** Omitir "Aprobada".
**Por qué:** El TO-BE (sección 4) lo lista. Sin descuento no hay nada que aprobar, así que la transición es automática (SUPUESTO); con descuento, "Aprobada" deja constancia de quién lo autorizó.

## D15 — Estados de la orden de venta
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-10-30) · **Ámbito:** Comercial
**Decisión original:** La OV nace en estado **Confirmada**
**Alternativas:** Usar "Registrada".
**Por qué:** Discrepancia del TO-BE: el microproceso `PO.02.P04.SP01.A01` dice "Confirmada" y la tabla de estados (sección 4) dice "Registrada → Liberada…". Se sigue el microproceso porque es lo que el prototipo ejecuta; se anota para el profesor.
**Modificación 2026-10-30:** La OV modela todos sus estados del TO-BE: **Confirmada → Liberada → En proceso → En preparación / Lista para despacho → Entregada → Facturada**. "Confirmada" equivale a "Registrada" de la tabla de estados del TO-BE. En el sprint 1 la OV llega a Confirmada; los estados siguientes los mueven Logística, Planta y Finanzas en su sprint (D06). Aprobado por el equipo.
**Vigente:** OV: Confirmada → Liberada → En proceso → En preparación / Lista para despacho → Entregada → Facturada.

## D16 — Idioma y convenciones de nombres
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-10-29) · **Ámbito:** Global
**Decisión original:** Idioma: español en documentación, commits, tablas, clases y métodos del dominio (`Cliente`, `Cotizacion`, `OrdenVenta`), sin tildes en identificadores; sufijos técnicos de .NET en inglés (`Service`, `Repository`, `Controller`). *Por confirmar con el equipo.*
**Alternativas:** Todo en inglés; todo en español.
**Por qué:** Coincide con "la documentación sigue igual"; los sufijos en inglés son la convención de .NET y evitan nombres raros.
**Modificación 2026-10-29:** El equipo la confirma tal cual; pasa de *Propuesta* a vigente.
**Vigente:** Dominio en español sin tildes + sufijos técnicos en inglés (`ClienteService`, `ClienteController`).

## D17 — Estados del anticipo
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-10-31) · **Ámbito:** Comercial
**Decisión original:** El anticipo pasa de Registrado a Confirmado en la semana 1; "Conciliado" (cruce con el extracto bancario) queda para Finanzas
**Alternativas:** Modelar los tres estados del TO-BE ahora.
**Por qué:** `Conciliado` depende del módulo Finanzas, que aún no existe. Tesorería simulada confirma dentro de Comercial.
**Modificación 2026-10-31:** Por la división en submódulos, el anticipo se reparte: el vendedor lo **registra en Comercial › Ventas** y la **confirmación es de Finanzas › Tesorería**. Mientras Finanzas no tenga su sprint, el rol Tesorería confirma desde Ventas (S1-15): Registrado → Confirmado. En el sprint de Finanzas la confirmación pasa a Finanzas › Tesorería por contrato, junto con la conciliación con el extracto: Registrado → Conciliado → Confirmado, y los abonos que no cruzan se confirman a mano, como dice el TO-BE (sección 3) (S1-50).
**Vigente:** Anticipo registrado en Ventas; en el sprint 1 Tesorería lo confirma desde Ventas (Registrado → Confirmado); desde el sprint de Finanzas lo confirma Finanzas › Tesorería, con Registrado → Conciliado → Confirmado o confirmación manual.

## D18 — Anticipo mínimo de 50 % (supuesto)
**Fecha:** 2026-10-28 · **Estado:** Modificada (2026-10-29) · **Ámbito:** Comercial
**Decisión original:** Anticipo mínimo de 50 % del total de la cotización, configurable. *Propuesta.*
**Alternativas:** Otro porcentaje; cualquier monto mayor a cero.
**Por qué:** El TO-BE exige anticipo antes de crear la OV pero no fija cuánto. Es un SUPUESTO del equipo y se presenta como tal. Ejemplo: cotización de S/ 2 000 → anticipo mínimo S/ 1 000.
**Modificación 2026-10-29:** El equipo la confirma tal cual; pasa de *Propuesta* a vigente.
**Vigente:** Anticipo mínimo 50 % del total, en configuración (no en el código).

## D19 — Alcance del sprint 1
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Comercial
**Decisión:** El sprint 1 cubre el **núcleo esencial de PO.02**: la venta retail MTS de punta a punta en pantalla y API (D13). Entran cliente, oportunidad (con resultado Ganada o Perdida), lista de precios vigente, cotización con sus estados, descuento con aprobación por rol, anticipo confirmado por Tesorería y conversión a OV, con historial, cadena documental, ficha y pantalla de trazabilidad (D25). Lo demás del TO-BE Comercial tiene dueño y momento: lo que pertenece a otra área se construye en el sprint de esa área (stock, reservas y distribución de la OV: Logística; MTO: Planta; crédito B2B, conciliación y comprobantes: Finanzas) y lo propio de Comercial queda como pendiente del área (leads B2B, PDF oficial, notificaciones y recordatorios, Postventa e indicadores de operación). Detalle en `docs/alcance/comercial.md`.
**Alternativas:** Incluir B2B o MTO desde el inicio.
**Por qué:** Es el proceso que muestra cómo FAMIHOGAR convierte un interesado en una venta confirmada y cobrada, con cada paso registrado, y el TO-BE recomienda empezar por PO.02 y probar luego un caso MTS y uno MTO (pág. 87). B2B, MTO, crédito y distribución dependen de otras áreas; Postventa necesita la entrega y la facturación. En una semana, y con dos integrantes aprendiendo C#, el núcleo debe ser corto y completo.

## D20 — Equipo y responsabilidades
**Fecha:** 2026-10-29 · **Estado:** Modificada (2026-10-30) · **Ámbito:** Global
**Decisión original:** Los integrantes se nombran por su nombre: **Miguel** (antes A), **Luis** (antes B) y **Pablo** (antes C). Miguel es el responsable técnico: crea el esqueleto, es el único que toca el `DbContext` y crea migraciones, y revisa los PR que tocan reglas, `Compartido` o migraciones. Luis y Pablo llegan con POO: aprenden C#, capas, DI y xUnit con tarjetas de aprendizaje que construyen código real.
**Alternativas:** Seguir con letras A, B y C; responsable técnico rotativo.
**Por qué:** Con nombres el plan se lee sin traducir letras. Miguel es el único con experiencia en C#.
**Modificación 2026-10-30:** El reparto de tarjetas sigue la experiencia: **Miguel lleva más horas, Luis es el segundo y Pablo el tercero**. En el sprint 1: Miguel ≈ 13,5 h de tarjetas + ≈ 2,5 h de revisión de PR, Luis 12,5 h y Pablo 11 h, sobre 21 h disponibles cada uno (D08). La revisión de PR toma poco porque los PR son de una tarjeta y traen su explicación (D09).
**Vigente:** Miguel (más horas, responsable técnico) > Luis > Pablo; revisión de PR ≈ 2,5 h por sprint.

## D21 — Alcance por área y niveles
**Fecha:** 2026-10-29 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Cada área tiene su propio documento de alcance en `docs/alcance/<area>.md`, con dos niveles: **Núcleo** (lo que se presenta el jueves, en pantalla y API) y **Si alcanza** (en orden de prioridad). Lo que no se hizo al terminar la semana queda como **pendiente del área**, sin fecha. Aparte, la categoría **Simulado** (D12). Áreas conocidas: Comercial y Logística; las siguientes las solicita el profesor. Lo que la fuente de un área describe pero pertenece a otra área no se cuenta como pendiente: espera el sprint de esa área (D06).
**Alternativas:** Un solo alcance para todo el proyecto; tres niveles (con un "Nivel 3" para semanas siguientes).
**Por qué:** Con un área por semana es poco probable volver a un área anterior; dos niveles son más simples de planificar y explicar.

## D22 — El tablero de GitHub es la fuente de verdad de las tarjetas
**Fecha:** 2026-10-29 · **Estado:** Modificada (2026-10-29) · **Ámbito:** Global
**Decisión original:** Las tarjetas se redactan en el planning en `docs/plan/sprint-NN.md` (borrador legible), se cargan al tablero con `scripts/crear-tarjetas.sh` y desde ese momento **el tablero de GitHub manda**: estado, dueño y cambios se hacen allí. El archivo `sprint-NN.md` no se mantiene al día después de la carga. Se elimina `sprint-01.csv`.
**Alternativas:** Tabla en `kanban.md` + CSV + tablero (tres copias); CSV como fuente.
**Por qué:** Tres copias de las mismas tarjetas se desalinean. Un solo borrador legible que además lee el script evita duplicar.
**Modificación 2026-10-29 (campos y relaciones):** Todas las tarjetas, incluidas las *Si alcanza*, se cargan como Issues. El tablero usa los campos `Status`, `Priority` (P0 Núcleo, P1 Si alcanza), `Size`, `Estimate` (horas totales), `Start date`, `Target date`, `Sprint` y `Prioridad`, y la columna "Depende de" se convierte en relaciones nativas **Blocked by**. El script llena todo eso y no duplica si se vuelve a ejecutar. Cada sprint es una iteración de **una semana** y cada tarjeta tiene un **hito** (milestone): la demo de su sprint (Demo 10/11 en el sprint 1) o, si espera el sprint de otra área, el hito de esa área (Sprint Logística, Sprint Finanzas, Sprint Planta) o **Pendientes Comercial**. Las tarjetas del núcleo entran en Ready; las *Si alcanza* y las que esperan otra área, en Backlog.
**Vigente:** Borrador en sprint-NN.md → script → tablero con campos, hitos y relaciones; una iteración de 1 semana por sprint; P0 = Núcleo, P1 = Si alcanza; desde la carga manda el tablero.

## D23 — Git: ramas en el repositorio, sin forks
**Fecha:** 2026-10-29 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Luis y Pablo son colaboradores del repositorio de Miguel y trabajan con ramas `nombre/tarea` dentro de él (ej. `luis/reglas-cliente`), con PR a `main`. No se usan forks.
**Alternativas:** Forks + PR al repositorio de Miguel.
**Por qué:** Con ramas en el mismo repo los PR enlazan tarjetas (`Closes #N`), el tablero se actualiza solo y la revisión es más simple.

## D24 — Las decisiones se modifican, no se duplican
**Fecha:** 2026-10-29 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Cuando algo contradice o cambia una decisión registrada, se modifica esa decisión conservando el texto original y agregando un bloque fechado (ver el inicio de este anexo). Las personas y el asistente revisan contradicciones con decisiones previas en `/planning` y `/cierre`.
**Alternativas:** Crear siempre una decisión nueva que reemplaza a la anterior.
**Por qué:** El registro se lee por tema: cada decisión muestra su historia completa y lo que rige hoy, sin buscar en varias entradas.

## D25 — La trazabilidad es la prioridad del ERP
**Fecha:** 2026-10-30 · **Estado:** Modificada (2026-11-01) · **Ámbito:** Global
**Decisión:** Todo documento del ERP (oportunidad, cotización, anticipo, OV, orden de despacho, guía, POD, comprobante, cuenta por cobrar, ticket, nota de crédito, etc.) es trazable:
1. **Historial:** cada cambio de estado y cada aprobación guarda estado anterior, estado nuevo, usuario, rol, fecha y hora, y motivo; el historial no se borra ni se edita.
2. **Cadena documental:** cada documento guarda su documento de origen; desde cualquiera se ven sus antecesores y sucesores (el "flujo de documentos").
3. **Ficha:** cada documento tiene una vista de detalle presentable e imprimible con cabecera, detalle, historial en línea de tiempo y cadena con enlaces.

Vive en `Compartido` (S1-08, S1-09) y en un componente de ficha común (S1-17); la pantalla de trazabilidad (S1-64) reconstruye el flujo completo de cualquier documento.
**Modificación 2026-11-01 (nada se borra):** ningún documento del ERP se elimina físicamente. Se anula o desactiva con su estado y motivo, y su historial, su cadena y su ficha se conservan. Borrar destruiría la evidencia de quién hizo qué y cuándo, que es la razón de ser de la trazabilidad; por eso las relaciones hacia datos maestros (sede, usuario) tampoco borran en cascada.
**Alternativas:** Registrar solo el estado actual; auditoría solo en aprobaciones.
**Por qué:** El profesor indicó que la trazabilidad es lo más valioso del sistema. El TO-BE lo exige en sus principios ("toda aprobación queda en el sistema con usuario y hora", "un dato se digita una sola vez") y los indicadores se calculan desde ese historial.

## D26 — Estructura de la solución: un proyecto por submódulo
**Fecha:** 2026-10-31 · **Estado:** Modificada (2026-10-31) · **Ámbito:** Global
**Decisión:** La solución `Erp.sln` tiene un proyecto `.csproj` por submódulo, con las capas `Api`, `Servicios` y `Datos` como carpetas dentro de cada uno (11 proyectos: Compartido, 3 de Comercial, 3 de Finanzas, 2 de Logística y 2 de Planta), más `Erp.Api` como único host y `Erp.Tests`. `Erp.Api` referencia a todos los submódulos; entre módulos no hay referencias, salvo que todos pueden referenciar `Compartido` (regla 3.4.4). Los ensamblados de `Contratos` se crean con la primera llamada real entre módulos, en el sprint de la primera área que consuma un contrato (previsto: Logística, con `ObtenerOrdenVentaConfirmada` de Comercial).
**Alternativas:** Un proyecto único para todo el ERP; tres proyectos por submódulo, uno por capa (más de 30 proyectos); crear los ensamblados de `Contratos` desde el inicio.
**Por qué:** El compilador impone la frontera entre módulos que pide D06: si un módulo usa clases de otro sin la referencia declarada, no compila; con un proyecto único la regla sería solo escrita y se rompería sin aviso. Tres proyectos por submódulo multiplican el mantenimiento sin enseñar nada nuevo. Crear los contratos con su primer uso evita proyectos vacíos durante días.
**Modificación 2026-10-31:** El acceso a datos usa un `ErpDbContext` único en `src/Erp.Api/Datos/`, con un esquema SQL por módulo y migraciones creadas por Miguel. Como los módulos no pueden referenciar al host, cada submódulo define sus interfaces `I...Repositorio` en su carpeta `Datos/` y la Api aporta las implementaciones con EF, registradas por inyección de dependencias. Los servicios y las pruebas usan solo las interfaces. Las relaciones hacia sede y usuario no borran en cascada: los registros se desactivan (borrado lógico).
**Vigente:** Un proyecto por submódulo con tres carpetas de capa; `Erp.Api` es el único host; el `ErpDbContext` es único y vive en `Erp.Api/Datos/`; los repositorios son interfaz en el módulo e implementación en la Api; `Contratos` como ensamblados desde el sprint de la primera área que consuma un contrato; borrado lógico, no físico, para sede y usuario.

## D27 — /cierre antes de abrir el PR
**Fecha:** 2026-11-01 · **Estado:** Modificada (2026-11-01) · **Ámbito:** Global
**Decisión:** `/cierre` es el punto final de cambios. Al ejecutarlo, el código, las pruebas, las migraciones y toda la documentación de la tarjeta deben estar actualizados e incluidos. Después de `/cierre` no se permiten más modificaciones; el PR se abre con esa versión cerrada. Si la revisión del PR requiere cambios, se coordina un nuevo cierre antes de modificarlos.
**Alternativas:** Abrir el PR al terminar el código y documentar después (lo que pasó con S1-05, que necesitó un PR aparte solo de documentación); documentar solo al final del sprint.
**Por qué:** Un PR que llega sin su documentación obliga a un segundo PR, deja `main` con reglas sin marcar y rompe la definición de terminado. Cerrar primero asegura que el PR se abre con una versión completa y revisada; cualquier cambio posterior requiere coordinar y ejecutar un nuevo cierre.
**Modificación 2026-11-01 (una sola ronda de propuestas):** `/cierre` se ejecuta como una sola ronda de propuestas definitivas (bitácora, decisiones, contexto, glosario, reglas y contratos). Se aprueban todas juntas, se aplican y se verifican con build y pruebas; a partir de esa aceptación no se permiten más cambios en la rama y el PR se abre con esa versión. Cualquier ajuste posterior exige coordinar un nuevo `/cierre`. Motivo: al cerrar S1-08 surgieron propuestas sueltas después de empezar el cierre, y eso obligaba a decidir si el cierre ya había terminado.
**Vigente:** `/cierre` es una sola ronda de propuestas definitivas; se aprueban, se aplican y se verifican juntas, y después no hay más cambios: el PR se abre con esa versión. Cambios posteriores requieren un nuevo `/cierre`.
