# Contexto vivo del proyecto

## Estado actual
- Sprint: 1 (29/10 – 04/11; presenta 05/11, por confirmar) · Área: Comercial · Objetivo: venta retail MTS por la API.
- Existe en `src/`: (nada aún). Documentación del flujo lista; sin repositorio en GitHub todavía.
- Siguiente: S1-01 (A: repo, tablero y tarjetas) y S1-02 (B y C: instalar .NET y SQL Server).
- Pendientes de confirmar: fecha de la primera presentación (D07), idioma de identificadores (D16), front (D13), anticipo de 50 % (D18).

## Comandos
- (se agregan cuando existan: `dotnet build`, `dotnet test`, cadena de conexión local, cómo levantar la Api)

## Convenciones de código
- Español sin tildes para el dominio (`Cliente`, `Cotizacion`); sufijos .NET en inglés (D16, por confirmar).
- Pruebas: `Clase_Condicion_ResultadoEsperado`.
- Valores de negocio (IGV, vigencia, % de anticipo) en configuración, no en el código.

## Trampas y lecciones
- Seguir el orden del kanban; si hay que cambiarlo, sugerirlo y explicar por qué.
- Al pasar de una tarjeta a otra, explicar la secuencia (dependencias, aprendizaje justo a tiempo, pareja), no solo el ID.
- El asistente no ejecuta Git ni migraciones: guía al equipo, que los escribe y entiende.
- Solo A crea migraciones y toca el `DbContext`: dos migraciones en paralelo se pisan.
- Dinero siempre con `decimal`, nunca `double` ni `float`.
- No agregar alcance a mitad de sprint sin sacar otra cosa.

## Pendientes que no son del sprint actual
- Nivel 2 de la semana 1 (pantalla, CI, vista imprimible, stock, descuentos).
- Contrato de Logística (se escribe en el planning de la semana 2).
