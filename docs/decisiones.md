# Acuerdos de trabajo

[Índice](../README.md)

Base normativa del inicio, sin historial de implementación ni decisiones heredadas de avances.

1. Un área por sprint de siete días, de jueves a miércoles; calendario en sprints.
2. Cada semana incluye preparación, desarrollo, pruebas, revisión, documentación y demo.
3. Una tarjeta en curso por persona; trabajo trazable en el tablero y revisión por otro integrante.
4. Código sencillo en español, explicado por su autor.
5. Monolito modular y capas según arquitectura; integración por contratos.
6. Historial, cadena y ficha para los documentos; datos ficticios y dependencias externas simuladas.
7. /cierre prepara la versión final antes de commit y PR; las correcciones requieren otro cierre.
8. Núcleo verificable y opcionales explícitos; declarar incumplimientos sin ocultarlos.
9. El asistente actúa dentro del alcance autorizado y propone ampliaciones antes de escribir.

## Registro

Para registrar una decisión se usa DEC-001 y siguientes, con fecha, tarjeta, tema, motivo y estado.
Si cambia un acuerdo o una decisión existente, actualizar ese tema con el cambio fechado y su motivo; no duplicar decisiones contradictorias.

### DEC-001 · Estados de OV y parámetros ficticios de la demo
Fecha: 2026-11-05 · Tarjeta: COM-001 · Estado: Aceptada por Miguel, Luis y Pablo.

Motivo: fijar los valores que la fuente deja abiertos y resolver la discrepancia de estados antes de implementar. El análisis advierte que el PDF exige límite, vigencia y auditoría, pero no porcentajes ni plazos concretos (análisis del PDF, línea 45).

| Tema | Decisión | Origen |
|---|---|---|
| Estados de OV | `Registrada → Liberada` | Tabla p. 5 y diagrama p. 35; la p. 34 dice "Confirmada" y queda documentada como discrepancia |
| IGV | 18 %, configurable | Supuesto de demo: la fuente no fija impuestos |
| Moneda y redondeo | PEN, 2 decimales, tipo `decimal` | Regla permanente del equipo |
| Vigencia de cotización | 7 días calendario desde la emisión | Supuesto de demo; p. 25 exige vigencia |
| Descuento | Asesor 0 % sin aprobación; Jefatura hasta 10 %; sobre 10 % se rechaza | Supuesto de demo; p. 23 exige motivo, límite y aprobación auditada |
| Anticipo | 30 % del total, con comprobante obligatorio | Supuesto de demo; p. 29 exige comprobante y confirmación de Tesorería |
| Correlativo | `COT-2026-00001` y `OV-2026-00001` | p. 25 exige correlativo |
| Reserva simulada | Vigencia 48 h | Supuesto de demo; p. 18 exige vencimiento |
| Roles del guion | Asesor, Jefatura y Tesorería, sin autenticación real | Alcance de Comercial |
| Datos ficticios | Se redactan en COM-004 conforme a estos supuestos | Plan del sprint |

Los valores marcados como supuesto son configurables y no normas del negocio. Cambiarlos exige una decisión nueva, fechada y con motivo; no una edición silenciosa.

### DEC-002 · SDK y formato de la solución
Fecha: 2026-11-05 · Tarjeta: COM-002 · Estado: Aceptada por Miguel, Luis y Pablo.

Motivo: la guía de preparación exige fijar un SDK LTS y comprobar build y pruebas reales antes de construir módulos. Se elige .NET 10 porque .NET 8 sale de soporte LTS el 2026-11-10, dentro de este mismo sprint.

| Tema | Decisión | Origen |
|---|---|---|
| SDK | .NET 10, versión 10.0.401 fijada en `global.json` | Comprobado con `dotnet --list-sdks` en la máquina de Miguel |
| Formato de solución | `Erp.slnx`, el que genera el SDK 10 por defecto | `dotnet new sln` |
| Proyectos del esqueleto | Solo `src/Erp.Api` y `tests/Erp.Api.Tests` | Arquitectura: no generar módulos vacíos innecesarios |
| Módulos y capas | Se crean cuando una tarjeta los necesite, no antes | Arquitectura |

El cambio de SDK o de formato de solución exige una decisión nueva y repetir build y pruebas.
