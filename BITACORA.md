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

### 2026-11-07 · Miguel · 0,25 h · Arranque de sesión y estado real de COM-001 y COM-002
- Hice y evidencia: lectura de AGENTS, README, contexto, bitácora, sprints, kanban, sprint-01, alcance de Comercial, decisiones, glosario y preparación. `main` está en `ddcb0f4`: el PR #104, desde `miguel/com-002-solucion-minima`, está mergeado; `git log` muestra los commits `658a477` y `4cfe197`. Estado del tablero reportado por el equipo: COM-001 y COM-002 en Done, COM-003 y COM-004 en Ready, COM-005 en Backlog. Se corrigió la documentación que aún decía "pendiente de PR y revisión".
- Falló / bloqueo: el tablero no se consultó de forma remota; su estado es el reportado por el equipo y este asistente no lo verificó. COM-005 sigue en Backlog y debe pasar a Ready antes de trabajarla. Comprobado con Git de solo lectura: `git ls-files src/Erp.Api/appsettings.Development.json` no devuelve nada y `git status --porcelain` solo muestra los documentos modificados en esta sesión, sin `bin/`, `obj/` ni archivos locales; el `.gitignore` sí protege la configuración local.
- Siguiente paso: mover COM-005 a Ready, crear la rama de trabajo y preparar modelo, DbContext y migración inicial con el corte de 2 h acordado.

### 2026-11-07 · Miguel · 1 h · COM-005 (en curso)
- Hice y evidencia: creé el módulo Comercial en tres proyectos por capa —`Dominio`, `Aplicacion` e `Infraestructura`— con `ComercialContext` y esquema `Comercial`; entidades `Cliente`, `Oportunidad` e `HistorialEvento`; alta que guarda documento e historial en un solo guardado; rechazo de modificación o borrado del historial; rutas `/api/clientes`, `/api/oportunidades` y `/api/historial/{tipo}/{id}`; migración `Inicial` aplicada en el SQL Server local (base `ErpFamihogar`). `dotnet build`: 0 advertencias, 0 errores. `dotnet test`: 8 superadas, 0 con error. `dotnet ef migrations has-pending-model-changes`: sin cambios pendientes. Prueba manual contra la API: alta de cliente (201), alta de oportunidad (201), historial (200) y rol Tesorería rechazado (400); tras reiniciar el servicio, los datos siguen respondiendo (200).
- Hice y evidencia (cierre): el equipo confirmó DEC-003 y aprobó el modelo de relaciones registrado como DEC-004. Miguel explicó que el Dominio no debe depender de EF Core para mantener las reglas independientes de persistencia, que el caso de uso guarda documento e historial mediante una unidad de trabajo, y que la persistencia se comprobó consultando el mismo ID después de reiniciar el servicio. Validación final: `dotnet build` con 0 advertencias y 0 errores; `dotnet test` con 8 superadas.
- Falló / bloqueo: el paquete transitivo `System.Security.Cryptography.Pkcs` 9.0.11 traía dos avisos de vulnerabilidad (NU1902 y NU1903); se fijó la versión 10.0.14 en los tres proyectos y desaparecieron. No hay bloqueo técnico conocido; falta preparar el commit, abrir el PR y obtener revisión de Luis o Pablo. La tarjeta queda lista para PR, no Done.
- Siguiente paso: Miguel ejecuta el flujo Git indicado en la guía y solicita revisión cruzada.

## Plantilla de sesión
Fecha · Persona · Horas reales · Tarjeta
- Hice y evidencia:
- Falló / bloqueo:
- Siguiente paso:

## Control semanal
| Sprint | Área | Resultado | Horas Miguel | Horas Luis | Horas Pablo | Evidencia y pendientes |
|---|---|---|---|---|---|---|
