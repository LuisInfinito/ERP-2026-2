# 2. Alcance

[← Índice](../../README.md)

La fuente de verdad del alcance de cada área es el [TO-BE](../fuentes/to-be-comercial.md). Este documento dice **cuánto de eso entra cada semana** y qué se recorta si no alcanza.

## 2.1 Capacidad (semana 1)

| Dato | Valor |
|---|---|
| Personas | 3 (A, B, C) |
| Horas por persona por día | 1–1,5 h, 7 días (fines de semana incluidos) |
| Horas por persona por semana | 7–10,5 h |
| Total del equipo | **21–31,5 h** (se planifica con ≈ 26 h) |
| Aprendizaje y configuración | ≈ 40 % de la semana 1 |

Es una estimación sin medir. La retro de la semana 1 la recalibra con las horas reales de la bitácora.

## 2.2 Semana 1 — Comercial, venta retail MTS

Supuesto de fechas: sprint del jueves 29/10 al miércoles 04/11; **presentación el jueves 05/11** *(por confirmar; ver D07)*.

### Nivel 1 — Núcleo (es lo que se presenta)

| Pieza | Microproceso TO-BE | Qué se construye |
|---|---|---|
| Cliente | PO.02.P01.SP01.A01 | Buscar por DNI/RUC; si no existe, crear |
| Oportunidad | PO.02.P01.SP01.A01 | Registrar productos de interés; nace "Nueva" |
| Precios | PO.02.P02.SP01.A01 | Catálogo y lista vigente por canal, como datos semilla |
| Cotización | PO.02.P02.SP02.A01–A02 | Correlativo, vigencia, IGV, estados, enviar y registrar resultado |
| Anticipo | PO.02.P03.SP01.A01 | Registrar; Tesorería (rol simulado) confirma; "Pago validado" |
| Orden de venta | PO.02.P04.SP01.A01 | Convertir con bloqueo sin pago validado |

La demo del Nivel 1 se hace **por la API** (Swagger/Scalar y un guion de pasos). La pantalla es Nivel 2 hasta decidir el front (D13).

### Nivel 2 — Si alcanza (en este orden)

1. Pantalla mínima HTML + Bootstrap con selector de rol simulado.
2. CI con GitHub Actions (obligatorio desde la semana 2).
3. Vista imprimible de la cotización (el TO-BE pide PDF).
4. Consulta de stock por sede, solo lectura con datos semilla (PO.02.P01.SP02.A01 sin reserva).
5. Descuento con límite por rol y aprobación de Jefatura (PO.02.P02.SP01.A02).

### Nivel 3 — Semanas siguientes

Logística (semana 2: reservas, transferencias, despacho, POD), MTO con Ingeniería y BOM, crédito B2B y bloqueo por mora, distribución automática de la OV (PO.02.P04.SP01.A02), postventa, facturación simulada, notificaciones.

## 2.3 Fuera de alcance (todo el curso)

Login real (selector de rol simulado), SUNAT real, nube, app móvil, correo o WhatsApp reales, datos reales.

## 2.4 Regla de recorte

Se recorta siempre desde arriba, nunca la base. La base es Cliente → Precios → Cotización.

| Punto de control | Situación | Acción |
|---|---|---|
| **Día 4** (dom 01/11, noche) | Cliente no está en `main` | Se posterga todo el Nivel 2; B y C pasan a trabajar en pareja con A hasta cerrar Cliente |
| **Día 6** (mar 03/11, noche) | Cotización con estados o Anticipo no están en `main` | La demo llega hasta "cotización aceptada"; OV y anticipo pasan al Backlog de la semana 2 |
| **Día 6** | Las 5 piezas están en `main` | El día 7 es prueba de punta a punta y ensayo; si sobra tiempo, Nivel 2 en el orden de arriba |
| **Presentación antes del 05/11** | La fecha real es anterior | Se aplica esta tabla con la fecha real; mínimo defendible: Cliente + Cotización con IGV |

## 2.5 Cómo se define el alcance de una semana nueva

`/planning` lee el TO-BE del área, propone Nivel 1/2/3 con códigos de microproceso, calcula la capacidad con las horas reales de la semana anterior y deja el borrador de contrato en `docs/contratos/`. El equipo lo aprueba antes de crear tarjetas.
