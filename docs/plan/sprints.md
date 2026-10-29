# 5. Sprints

[← Índice](../../README.md)

## 5.1 Estructura

- **Sprints semanales**, de jueves a miércoles. La **review es la presentación del jueves** en clase.
- **Capacidad:** 7–10,5 h por persona (se planifica con ≈ 8,5 h). Las ceremonias son mínimas (≈ 35 min por semana) y se hacen el jueves después de clase.
- **Aprendizaje justo a tiempo:** cada semana se aprende solo lo que esa semana necesita.
- **Planificar solo lo cercano:** solo el sprint actual se detalla en tarjetas; el resto son historias en el Backlog.

| Sprint | Fechas | Área | Objetivo | % aprendizaje | Cierra con |
|---|---|---|---|---|---|
| 1 | 29/10 – 04/11 (presenta 05/11, por confirmar) | Comercial | Venta retail MTS de punta a punta | ~40 % | Retro clave: recalibrar horas |
| 2 | 05/11 – 11/11 | Logística | Reservas, transferencias, despacho; Comercial llama a Logística por su contrato | ~20 % | Tag `semana-02` |
| 3+ | por definir en `/planning` | Por definir | Se define leyendo el TO-BE | — | — |

Las semanas 2+ son **estimaciones brutas**: se recalculan en cada planning con la velocidad real de la semana anterior.

## 5.2 Sprint 1 — Comercial

**Objetivo:** el guion de demo recorre cliente → oportunidad → cotización → anticipo → orden de venta por la API, con las reglas probadas y documentadas.

Las tarjetas están en el [tablero Kanban](kanban.md#7-sprint-1--tareas). Resumen de carga:

| Persona | Núcleo | Reservado para revisiones | Total vs. capacidad (7–10,5 h) |
|---|---|---|---|
| A | 9,5 h | ≈ 1 h | 10,5 h: **en el límite**, es el riesgo del sprint |
| B | 8,5 h | — | 8,5 h |
| C | 8,5 h | — | 8,5 h |
| **Equipo** | **26,5 h** | | de 21–31,5 h |

Si el equipo trabaja en el rango bajo (1 h por día), el núcleo no cabe: se aplica la [regla de recorte](alcance.md#24-regla-de-recorte) el día 4 y el día 6. Lo del Nivel 2 pasa al Backlog de la semana 2 salvo que alguien se adelante.

## 5.3 Ceremonias

| Ceremonia | Cuándo | Duración | Qué se hace |
|---|---|---|---|
| **Retro** | Jueves, después de la presentación | 15 min | Horas reales vs. estimadas, qué mejorar, poda de contexto (`/retro`) |
| **Planning** | Jueves, después de la retro | 20 min | Leer el TO-BE del área, fijar niveles, tarjetas, contrato (`/planning`) |
| **Review** | Jueves, en clase | la presentación | Mostrar lo que funciona |
| **Control semanal** | Miércoles | 5 min | Sí / Parcial / No, horas, recorte |
| **Daily** | Asíncrona | 2 min | Tres líneas en la bitácora |

## 5.4 Definición de terminado (DoD)

Una tarjeta solo pasa a **Done** si:

- [ ] Está en `main` mediante un PR revisado por otro integrante.
- [ ] `dotnet build` y `dotnet test` pasan.
- [ ] Si es una regla: está en el [catálogo](../reglas.md) con módulo, fuente, microproceso y prueba.
- [ ] Si toca la base: incluye migración (creada por A).
- [ ] Los términos nuevos están en el [glosario](../glosario.md).
- [ ] La bitácora está actualizada.

Las tarjetas de aprendizaje (`aprendizaje`) no requieren PR: se cierran cuando se cumple su criterio de aceptación. Las de configuración que no tocan el repositorio se cierran directamente y se anotan en la bitácora.

## 5.5 Riesgos

- **A es el cuello de botella** (esqueleto, revisión, enseñanza y dos reglas): si se enferma o se atrasa, el sprint se atrasa. Mitigación: B y C se revisan entre sí los PR sin reglas.
- **Integración tardía:** las reglas se programan sobre objetos y se conectan a la API recién el día 7. Si algo falla, el punto de control del día 6 decide qué se recorta.
- **Estimaciones sin medir:** nadie del equipo midió su ritmo. La retro del sprint 1 recalcula el sprint 2.
- **Aprendizaje de C# y SQL Server desde casi cero** para dos integrantes: por eso se aprende construyendo (tarjeta S1-07) y no con tutoriales largos.
