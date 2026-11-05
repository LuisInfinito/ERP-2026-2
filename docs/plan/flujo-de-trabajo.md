# Flujo de trabajo

[Índice](../../README.md)

## Responsables
Miguel: coordinación técnica, DbContext, migraciones, integración y apoyo al aprendizaje.
Luis, segundo en experiencia: piezas de CRM y cotización con pruebas y pantallas. Pablo, menor experiencia: tareas acotadas de catálogo, interfaz y validación, con guía y revisión. Ambos explican su trabajo; la ayuda de Miguel consume tiempo de reserva.
El reparto se decide por capacidad y dependencias, no por avances supuestos. Los archivos comunes tienen un dueño acordado por sprint.

## Sesión
1. /iniciar: identidad, tiempo disponible, estado real y tarjeta desbloqueada.
2. Acordar criterio, dueño de archivos y dependencias. Trabajar una tarjeta a la vez.
3. Implementar, probar y explicar el resultado. Si el bloqueo supera 20 minutos, pedir apoyo.
4. /cierre: propuestas definitivas de documentación, aprobación, aplicación y validación final.
5. El autor hace commit y abre PR con esa versión. Otro integrante revisa.
6. Si hay correcciones, repetir trabajo, validación y cierre antes de actualizar el PR.
7. Integrar y pasar a Done solo con evidencia de aceptación.

## Git y revisión
Ramas nombre/tarea en el mismo repositorio; sin forks. Commits feat:, fix:, test:, docs: o chore:.
Vincular el PR a la tarjeta. Proteger main con revisión y comprobaciones disponibles.
Miguel revisa reglas, Compartido y migraciones de otros. Un compañero revisa los cambios de Miguel; explicar juntos no sustituye la revisión independiente.
Máximo una tarjeta en curso por persona y dos PR en revisión para el equipo.

## Documentación y pruebas
Regla → fuente → prueba; tarjeta → PR → evidencia. Cada documento conserva origen e historial.
Actualizar bitácora con persona, horas y hechos, nunca con resultados inferidos.
No ejecutar build y test simultáneamente. La demo recorre API y pantalla con datos ficticios.
Cada cierre semanal produce capítulo y, después de validar, tag semana-NN.

## Asistente
Explica términos nuevos y decisiones con ejemplos sencillos. Respeta el alcance autorizado.
Una solicitud de revisión no autoriza modificaciones. Cambios adicionales se proponen antes de escribir.
