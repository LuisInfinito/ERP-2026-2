# Validación y CI

[Índice](../../README.md)

CI pendiente de crear en COM-020, después del esqueleto.
Debe usar el SDK fijado en global.json y ejecutar restauración, compilación y pruebas en orden.
Respetar el runner elegido y comprobar que el total de pruebas sea mayor que cero.
Distinguir aprobadas, fallidas y omitidas; no registrar cantidades fijas como garantía permanente.
Validar el workflow con un caso correcto y un fallo controlado antes de exigirlo como protección de main.
Las pruebas de integración requieren la base preparada; un build correcto no acredita persistencia.
Hasta disponer del workflow, el PR incluye evidencia manual de las comprobaciones aplicables.
