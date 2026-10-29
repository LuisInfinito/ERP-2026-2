# 1. Enfoque

[← Índice](../../README.md)

## 1.1 Objetivo

Hacer **el mejor intento funcional** de un ERP para FAMIHOGAR, aprendiendo sobre la marcha. No se busca un ERP robusto ni vendible: se busca entender los grandes procesos de una empresa y convertirlos en un sistema que funcione. Cada semana se presenta el avance de un área (jueves); la primera es **Comercial**.

## 1.2 Qué se hereda de mina-experta

| Mecanismo | Cómo se aplica aquí |
|---|---|
| Memoria en archivos | `BITACORA.md`, `docs/contexto.md`, `decisiones.md`; cualquiera (persona o IA) retoma en 5 min |
| Alcance por niveles + regla de recorte | Cada semana: Nivel 1 núcleo, Nivel 2 si alcanza, Nivel 3 después; la regla dice qué se cae y cuándo |
| Tarjetas pequeñas con definición de terminado | 1–1,5 h, una por sesión, criterio de aceptación en una frase |
| Trazabilidad | tarjeta → rama → PR → prueba → regla → microproceso del TO-BE → decisión → capítulo → tag |
| El asistente propone, el humano aprueba | Formato 📌; la IA solo escribe código repetitivo y siempre pregunta antes |

## 1.3 Qué es nuevo (porque es un ERP que crece por áreas)

| Necesidad | Pieza nueva |
|---|---|
| Las áreas comparten datos y se integran después | Módulo `Compartido` y [contratos de integración](../contratos/_plantilla.md) desde el primer módulo |
| Fronteras entre áreas dentro de un solo sistema | Esquema SQL por módulo y regla "solo por interfaz pública" ([arquitectura](../arquitectura.md)) |
| El conocimiento ya no son normas mineras sino reglas de empresa | Catálogo de reglas con fuente `NORMA` / `TO-BE` / `SUPUESTO` |
| Un área nueva cada semana | Comando `/planning`: lee el TO-BE de la nueva área y propone niveles, tarjetas y contrato |
| Sprint corto (1 semana, 1–1,5 h diarias por persona) | Ceremonias mínimas y recorte con puntos de control en los días 4 y 6 |
| Datos persistentes | Base SQL Server con migraciones (a diferencia de mina-experta, que usaba JSON) |

## 1.4 Criterio de éxito de cada semana

El jueves, el área corre de punta a punta en un guion de demo, con sus reglas probadas y documentadas, y el tag `semana-NN` creado.
