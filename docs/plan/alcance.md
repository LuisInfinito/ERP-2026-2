# 2. Alcance

[← Índice](../../README.md)

Este documento explica **cómo** se define el alcance. El alcance concreto de cada área está en su propio documento (D21):

| Área | Semana | Fuente de verdad | Alcance |
|---|---|---|---|
| Comercial | Sprint 1: 03/11 – 09/11 (demo 10/11) | [TO-BE Comercial](../fuentes/to-be-comercial.md) | [alcance/comercial.md](../alcance/comercial.md) |
| Logística | Sprint 2: 10/11 – 16/11 (demo 17/11), por confirmar | Por conocer; parte de las tarjetas que la esperan ([sprints.md 5.6](sprints.md#56-tarjetas-que-esperan-el-sprint-de-su-área)) | [alcance/logistica.md](../alcance/logistica.md) |
| Finanzas | Por confirmar (una semana) | Por conocer; parte de las tarjetas que la esperan | [alcance/finanzas.md](../alcance/finanzas.md) |
| Planta | Por confirmar (una semana) | Por conocer; parte de las tarjetas que la esperan | [alcance/planta.md](../alcance/planta.md) |
| Siguientes | Una semana cada una | Las solicita el profesor | se crean en el `/planning` |

## 2.1 Capacidad por semana

| Dato | Valor |
|---|---|
| Personas | 3: Miguel, Luis y Pablo |
| Horas por persona por día | 3 h, 7 días (fines de semana incluidos) (D08) |
| Horas por persona por semana | 21 h |
| Total del equipo por semana | **63 h** disponibles; se planifican **≈ 42 h** (≈ 2 h diarias por persona) y el resto se reserva para aprender, revisar PR y absorber retrasos |
| Aprendizaje y configuración | ≈ 40 % de la semana 1; baja en las siguientes |

Es una estimación sin medir. Cada retro la recalibra con las horas reales de la bitácora.

## 2.2 Categorías del alcance de un área

| Categoría | Qué significa | ¿Tiene tarjeta? |
|---|---|---|
| **Núcleo** | Lo que se presenta, **en pantalla y por la API** (D13), con su trazabilidad (D25). Es lo único que se compromete | Sí |
| **Si alcanza** | Procesos del área que no entran al núcleo, en orden de prioridad (D21) | Sí, en Backlog |
| **Pasa al sprint de su área** | Procesos que la fuente describe pero pertenecen a otra área: se construyen en el sprint de esa área (D06) | Sí, en Backlog con el hito del área |
| **Versión mínima** | Procesos de otra área que **aún no existe** y que el área actual no puede evitar: simulación sencilla en el módulo dueño, detrás de su contrato (D06). En el sprint 1 no hace falta ninguna | Sí |
| **Simulado** | Infraestructura real que en todo el curso se simula (D12): login, SUNAT, nube, app móvil, correo y WhatsApp, datos reales | No |

Lo que al cerrar el sprint del área no se hizo queda como **pendiente del área**, anotado en su documento de alcance, sin fecha: solo se retoma si el profesor lo pide o sobra una semana.

## 2.3 Regla de recorte

Se recorta siempre desde lo último del flujo, **nunca la base**. Cada área define su base y sus puntos de control en su documento de alcance (en una semana, dos o tres puntos de control).

Mínimo defendible de cualquier demo: la base del área funcionando **en pantalla y por la API**, con sus reglas probadas y su trazabilidad.

## 2.4 Cómo se define el alcance de un área nueva

`/planning` (martes, después de la presentación y la retro):

1. Pregunta qué área toca, cuál es su fuente (documento del profesor) y su fecha de presentación.
2. Guarda la fuente (o su resumen) en `docs/fuentes/` y crea `docs/alcance/<area>.md`.
3. Propone Núcleo / Si alcanza / Simulado con códigos de proceso de la fuente, la base y la regla de recorte, partiendo de las tarjetas que esperan a esa área (`docs/plan/sprints.md` 5.6).
4. Calcula la capacidad con las horas reales de la semana anterior.
5. Deja el borrador de contrato en `docs/contratos/` y las tarjetas en `docs/plan/sprint-NN.md`.

El equipo aprueba antes de cargar las tarjetas al tablero.
