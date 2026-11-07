# Bitácora

[Índice](README.md)

Completar únicamente con trabajo realizado y comprobado a partir del inicio.

## Sesiones

### 2026-11-05 · Miguel, Luis y Pablo · 0,5 h cada uno · COM-001
- Hice y evidencia: acordamos los estados de OV y los parámetros ficticios de la demo, registrados como DEC-001 en docs/decisiones.md. Se resolvió la discrepancia de la p. 34 ("Confirmada") frente a la tabla p. 5 y el diagrama p. 35.
- Falló / bloqueo: ninguno. Por acuerdo del equipo no se documentan horarios escalonados; la coordinación diaria se hace directamente.
- Siguiente paso: COM-002, solución mínima con SDK 10.0.401.

### 2026-11-05 · Miguel · 0,5 h · COM-002
- Hice y evidencia: solución `Erp.slnx` con SDK 10.0.401 fijado en `global.json`, proyecto `src/Erp.Api` que sirve `wwwroot` sin modificarlo y proyecto `tests/Erp.Api.Tests` con 2 pruebas de integración. `dotnet build` con 0 errores y `dotnet test` con 2 superadas. Limpié `bin/` y `obj/` con restos de un build net10.0 anterior sin `.csproj`.
- Falló / bloqueo: ninguno. La solución queda en formato `Erp.slnx`; si un Visual Studio anterior no la abre, se regenera en formato clásico.
- Siguiente paso: commit, PR y revisión por Luis o Pablo. El CI llega con COM-020.

### 2026-11-07 · Miguel · 1 h · Cierre COM-001 y COM-002
- Hice y evidencia: explicación de la API y su prueba de arranque; documentación de estado actualizada. Validación final: `dotnet build` con 0 advertencias y 0 errores; `dotnet test` con 2 superadas.
- Falló / bloqueo: ninguno técnico. Falta commit, PR y revisión por otra persona.
- Siguiente paso: preparar el commit y el PR en la rama de trabajo; solicitar revisión a Luis o Pablo.

### 2026-11-07 · Luis · 1 h real declarada · COM-003
- Hice y evidencia: SDK 10.0.301 y 10.0.401 instalados; selección efectiva 10.0.401. Build correcto con 0 advertencias y 0 errores, seguido de `dotnet test --no-build`: 2 superadas, 0 fallidas y 0 omitidas. API comprobada con HTTP 200 en `/` y respuesta «en marcha» en `/api/estado`. Luis confirmó las pruebas manuales de los tres roles, búsqueda de `logistica`, tarjetas, Salir, recarga de sesión y consulta de estado. Inventario de textos y referencias registrado en `docs/guias/acceso-aplicaciones.md`, sin modificar wwwroot.
- Explicación del autor: `/api/estado` demuestra respuesta en esa ruta, no base de datos ni flujo comercial completo. Los roles son simulados, sin autenticación ni permisos reales; las tarjetas avisan porque sus pantallas siguen pendientes.
- Falló / bloqueo: build falló sin diagnóstico útil y test no produjo resultado dentro del entorno restringido del asistente; ambos se validaron fuera con autorización. Las ramas main local, del fork y del principal coincidían en `ddcb0f4` al consultarlas; no se acredita la sincronización de todas las ramas antiguas. Luis declara aproximadamente 2 h disponibles restantes, no horas trabajadas.
- Validación final del cierre: documentación revisada y `git diff --check` sin incidencias; únicamente cinco documentos modificados, sin cambios en wwwroot. Se repitieron en orden `dotnet build` (0 advertencias y 0 errores) y `dotnet test --no-build` (2 superadas, 0 fallidas y 0 omitidas).
- Siguiente paso: preparación local lista para PR; preparar una rama del repositorio principal según el flujo del equipo cuando Luis autorice la operación. Sin commits ni subidas autorizados por ahora; revisión por otra persona e integración pendientes. No se declara Done ni se modifica el tablero.

## Plantilla de sesión
Fecha · Persona · Horas reales · Tarjeta
- Hice y evidencia:
- Falló / bloqueo:
- Siguiente paso:

## Control semanal
| Sprint | Área | Resultado | Horas Miguel | Horas Luis | Horas Pablo | Evidencia y pendientes |
|---|---|---|---|---|---|---|
