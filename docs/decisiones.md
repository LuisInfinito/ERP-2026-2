# Anexo B — Registro de decisiones

[← Índice](../README.md)

Formato: fecha · decisión · alternativas consideradas · por qué. Estado: *Aprobada* o *Propuesta* (pendiente de confirmar por el equipo). Ámbito: *Global* o del módulo.

## D01 — Objetivo: el mejor intento funcional
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Objetivo: el mejor intento funcional, no un ERP robusto
**Alternativas:** Apuntar a un ERP completo y pulido.
**Por qué:** El curso evalúa que se entiendan y definan los grandes procesos y se conviertan en un sistema que funcione. Somos estudiantes y vamos aprendiendo sobre la marcha.

## D02 — El TO-BE es la fuente de verdad del alcance
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** El Documento TO-BE FAMIHOGAR es la fuente de verdad del alcance; cada regla cita su microproceso
**Alternativas:** Definir el alcance por intuición o por otros ERP.
**Por qué:** Evita inventar procesos y permite trazar cada regla hasta su origen. No hay experto de negocio al que entrevistar.

## D03 — Monolito modular
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Monolito modular: una solución .NET, una base SQL Server, un módulo por área
**Alternativas:** Microservicios; un sistema por área.
**Por qué:** En un ERP los módulos se hablan todo el tiempo; separar servicios traería problemas de red y datos duplicados sin beneficio a esta escala. El monolito modular permite agregar áreas sin romper las anteriores.

## D04 — Stack: C#, .NET, EF Core y SQL Server
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Stack: C#, ASP.NET Core Web API, Entity Framework Core y SQL Server; versión LTS vigente de .NET fijada en `global.json`
**Alternativas:** Otro lenguaje o base de datos.
**Por qué:** Es lo que el equipo ya decidió; A tiene experiencia en C#. La versión exacta se registra en `docs/contexto.md` al crear el esqueleto.

## D05 — Tres capas por módulo
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Tres capas por módulo: Api → Servicios → Datos (repositorios con EF Core)
**Alternativas:** Clean Architecture o DDD completo.
**Por qué:** B y C solo conocen POO; tres capas se aprenden en una tarjeta y ya aplican SOLID (inyección de dependencias, una responsabilidad por clase). Se puede evolucionar después.

## D06 — Un esquema SQL por módulo y contratos públicos
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Un esquema SQL por módulo; los módulos solo se hablan por su interfaz pública en `Contratos`
**Alternativas:** Tablas compartidas libres; `JOIN` entre módulos.
**Por qué:** Mantiene fronteras claras para que agregar Logística no rompa Comercial y deja abierta la opción de separar módulos más adelante.

## D07 — Sprints semanales, jueves a miércoles
**Fecha:** 2026-10-28 · **Estado:** Propuesta · **Ámbito:** Global
**Decisión:** Sprints semanales de jueves a miércoles; la review es la presentación del jueves. Primera presentación supuesta el 05/11/2026
**Alternativas:** Sprints de 2 semanas como en mina-experta.
**Por qué:** El curso exige un avance cada jueves. **Por confirmar:** si la primera presentación es el 29/10 o el 05/11; la regla de recorte (alcance 2.4) cubre ambos casos.

## D08 — Tarjetas de 1–1,5 h y WIP de 1
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Tarjetas de 1–1,5 h, una por sesión, WIP de 1 por persona, definición de terminado única
**Alternativas:** Tarjetas de hasta 3 h.
**Por qué:** Cada persona dispone de 1–1,5 h al día; una tarjeta cabe en una sesión y el avance es visible.

## D09 — La IA solo hace código repetitivo y pregunta antes
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** La IA solo genera código repetitivo (entidades, DTOs, CRUD, configuración de EF Core, semillas, HTML/Bootstrap) y siempre pide permiso antes de escribir o ejecutar. Las reglas de negocio y las pruebas las escribe el equipo
**Alternativas:** Que la IA escriba todo; que no escriba nada (como en mina-experta).
**Por qué:** Acelera lo mecánico sin quitarle al equipo lo que debe aprender y defender. **Ajustable:** si el equipo prefiere otro límite, se cambia aquí y en `AGENTS.md`.

## D10 — Pruebas xUnit por regla de negocio
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Pruebas con xUnit sobre la capa de Servicios, al menos una por regla del catálogo; integración desde la semana 3; sin pruebas de interfaz
**Alternativas:** Sin pruebas; pruebas de interfaz.
**Por qué:** Es la prueba más barata de aprender (≈ 1 h) y la que más protege: las reglas de negocio son lo que se evalúa.

## D11 — CI con GitHub Actions
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** CI con GitHub Actions: tarjeta "Si alcanza" en la semana 1 y obligatoria desde la semana 2
**Alternativas:** Sin CI; CI desde el inicio.
**Por qué:** Convierte "`main` siempre funciona" en una regla automática. La semana 1 ya está ajustada de horas.

## D12 — Simulaciones: rol, SUNAT y datos ficticios
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Global
**Decisión:** Simulaciones: login con selector de rol, SUNAT y facturación simuladas, datos ficticios, sin nube
**Alternativas:** Login real; SUNAT real.
**Por qué:** No hay datos sensibles y el objetivo es el proceso, no la infraestructura.

## D13 — Front pendiente de decidir
**Fecha:** 2026-10-28 · **Estado:** Propuesta · **Ámbito:** Global
**Decisión:** Front pendiente. Semana 1: demo por la API (Swagger/Scalar); pantalla mínima HTML + Bootstrap + `fetch` como Nivel 2. La elección entre eso y Angular se toma en el planning de la semana 2
**Alternativas:** Angular desde el inicio; decidir hoy.
**Por qué:** Angular exige TypeScript, componentes, servicios y RxJS: varias semanas que no hay. Como la API es la misma, migrar después no obliga a rehacer el back. Alternativa a evaluar: Razor Pages dentro del mismo proyecto (todo en C#).

## D14 — La cotización incluye el estado Aprobada
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Comercial
**Decisión:** La cotización incluye el estado **Aprobada**: Borrador → Aprobada → Enviada → Aceptada / Rechazada / Vencida. En la semana 1, pasa a Aprobada sola si no tiene descuento pendiente
**Alternativas:** Omitir "Aprobada" (como decía el resumen inicial).
**Por qué:** El TO-BE (sección 4) lo lista. Sin descuentos en el Nivel 1, no hay nadie que apruebe, así que la transición es automática (SUPUESTO).

## D15 — La OV nace Confirmada
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Comercial
**Decisión:** La OV nace en estado **Confirmada**
**Alternativas:** Usar "Registrada".
**Por qué:** Discrepancia del TO-BE: el microproceso `PO.02.P04.SP01.A01` dice "Confirmada" y la tabla de estados (sección 4) dice "Registrada → Liberada…". Se sigue el microproceso porque es lo que el prototipo ejecuta; se anota para el profesor.

## D16 — Idioma y convenciones de nombres
**Fecha:** 2026-10-28 · **Estado:** Propuesta · **Ámbito:** Global
**Decisión:** Idioma: español en documentación, commits, tablas, clases y métodos del dominio (`Cliente`, `Cotizacion`, `OrdenVenta`), sin tildes en identificadores; sufijos técnicos de .NET en inglés (`Service`, `Repository`, `Controller`)
**Alternativas:** Todo en inglés; todo en español.
**Por qué:** Coincide con "la documentación sigue igual"; los sufijos en inglés son la convención de .NET y evitan nombres raros. **Por confirmar** con el equipo.

## D17 — Anticipo: Registrado → Confirmado
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Comercial
**Decisión:** El anticipo pasa de Registrado a Confirmado en la semana 1; "Conciliado" (cruce con el extracto bancario) queda para Finanzas
**Alternativas:** Modelar los tres estados del TO-BE ahora.
**Por qué:** `Conciliado` depende del módulo Finanzas, que aún no existe. Tesorería simulada confirma dentro de Comercial.

## D18 — Anticipo mínimo de 50 % (supuesto)
**Fecha:** 2026-10-28 · **Estado:** Propuesta · **Ámbito:** Comercial
**Decisión:** Anticipo mínimo de 50 % del total de la cotización, configurable
**Alternativas:** Otro porcentaje; sin mínimo.
**Por qué:** El TO-BE exige anticipo pero no fija porcentaje. Es un SUPUESTO del equipo y se presenta como tal.

## D19 — Semana 1 solo venta retail MTS
**Fecha:** 2026-10-28 · **Estado:** Aprobada · **Ámbito:** Comercial
**Decisión:** La semana 1 cubre solo venta retail MTS; MTO, B2B, crédito, distribución de OV, postventa y facturación quedan fuera
**Alternativas:** Incluir B2B o MTO desde el inicio.
**Por qué:** No caben en 21–31,5 h con la curva de aprendizaje. El TO-BE recomienda empezar por PO.02 y probar luego un caso MTS y uno MTO.
