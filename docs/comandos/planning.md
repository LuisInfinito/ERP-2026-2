# /planning — Planning de un área nueva

Se usa el martes, después de la presentación y la retro. Prepara el sprint de una semana (martes a lunes) del área siguiente (D07).
1. Lee `AGENTS.md`, `docs/contexto.md`, `docs/plan/alcance.md`, `docs/arquitectura.md`, el alcance y el contrato del área anterior y el "Control semanal" de `BITACORA.md`.
2. Pregúntame **qué área** toca, **cuál es su fuente de verdad** (documento del profesor) y **sus fechas de presentación**. Calcula los días de trabajo. Si no hay fuente, dilo y no inventes el alcance.
3. Lee la fuente del área: su resumen en `docs/fuentes/` y, solo si hace falta, busca códigos concretos en el documento original. No leas documentos largos enteros.
4. Calcula la capacidad con las **horas reales** de la semana anterior y su factor de corrección, no con las supuestas.
5. Parte de la sección **"De dónde parte"** de `docs/alcance/<area>.md`: las tarjetas que esperan a esa área (hito "Sprint <Área>", resumen en `docs/plan/sprints.md` 5.6) y su versión mínima, si existe. Revísalas contra la fuente: ajústalas, divídelas o descártalas, y anota el cambio en esa misma sección. Propón el alcance en `docs/alcance/<area>.md`: **Núcleo** (en pantalla y API), **Si alcanza** en orden de prioridad y **Simulado**, con códigos de la fuente, la **base** del área y la **regla de recorte** con puntos de control. Se recorta desde arriba, nunca la base.
6. Propón el **contrato de integración** del módulo nuevo (`docs/contratos/_plantilla.md`): qué expone, qué consume, dobles de prueba mientras el otro módulo no exista. Revisa que no rompa la regla de dependencias de `docs/arquitectura.md`.
7. Revisa si el área nueva **contradice o cambia decisiones** de `docs/decisiones.md`; si es así, propón modificarlas con fecha (D24), no crear nuevas.
8. Propón las **reglas de negocio** nuevas para `docs/reglas.md` (con fuente `NORMA`, la fuente del área o `SUPUESTO`) y los términos para el glosario.
9. Propón las **tarjetas** del sprint (1–1,5 h, criterio de aceptación con su trazabilidad, dependencias, dueño por nombre, Priority, fechas e hito), con la carga por persona y el plan por día, en `docs/plan/sprint-NN.md` con el mismo formato de tabla que `sprint-01.md` (el script lo lee). Recuerda que, una vez cargadas, manda el tablero, y que no escribes ningún archivo sin aprobación.
10. Marca como `aprendizaje` lo que alguien no sabe; prefiere enseñarlo construyendo algo real.
Usa el formato 📌, máximo 2 propuestas por respuesta, y no escribas nada hasta que apruebe cada punto.
