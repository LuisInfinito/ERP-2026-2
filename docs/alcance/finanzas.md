# Alcance — Área Finanzas

[← Índice](../../README.md) · [Cómo se define el alcance](../plan/alcance.md)

**Sprint:** por confirmar con el profesor (una semana, de martes a lunes) · **Fuente de verdad:** por conocer (la indicará el profesor) · **Contrato:** [finanzas](../contratos/finanzas.md) · **Estado:** sin definir; se completa en su `/planning`.

Submódulos (D03): **Tesorería**, **Créditos y Cobranzas** y **Facturación**.

## De dónde parte

El TO-BE Comercial describe procesos que mueve Finanzas. Se construyen aquí, en el sprint de Finanzas, no en el de Comercial (D06, D19). Sus tarjetas se redactaron en el planning del sprint 1 y están en el tablero, en Backlog, con el hito **Sprint Finanzas**; el `/planning` las revisa contra la fuente de Finanzas y las ajusta, divide o descarta.

**Qué deja listo el sprint 1:** el anticipo registrado en Ventas y confirmado por el rol Tesorería **desde Ventas** (Registrado → Confirmado, D17), y la OV **Confirmada**, expuesta por `ObtenerOrdenVentaConfirmada` ([contrato Comercial](../contratos/comercial.md)).

| Tarjeta | Qué hace | Microproceso | Por qué es de Finanzas | Reglas | Contrato |
|---|---|---|---|---|---|
| S1-36 | Verificación de crédito B2B (línea disponible y mora; aprobación automática o decisión del rol Créditos) y bloqueo por mora | PO.02.P03.SP02.A01 | Vive en Finanzas › Créditos y Cobranzas (D03); el sprint 1 es retail, que paga con anticipo | CRE-01, MOR-01 | `ConsultarCredito` |
| S1-37 | Pantalla de evaluación de crédito con su ficha | PO.02.P03.SP02.A01 | Depende de S1-36 | — | — |
| S1-49 | Boleta o factura desde la OV sin redigitar, SUNAT simulada; la OV pasa a Facturada y nace la cuenta por cobrar | PA.01.P01.SP01.A01 | Proceso de Facturación; necesita la OV Entregada (POD de Logística) | FAC-01 | `EmitirComprobante` |
| S1-50 | Confirmación del anticipo desde Tesorería por contrato, conciliación con el extracto (Conciliado) y cartera Vigente / Vencida / Pagada | PA.01.P01.SP02.A01 · PA.01.P03.SP01.A01 | Tesorería y Cobranzas son de Finanzas; en el sprint 1 el rol Tesorería confirma desde Ventas para no bloquear la venta | PAG-02 (cambia de módulo) | `ConfirmarAnticipo`, `ConciliarAnticipo`, `ConsultarCartera` |
| S1-69 | Capítulo semana-03, tag y matriz de cobertura de los 35 microprocesos y 25 registros del TO-BE | — | Capítulo del sprint 3, si Finanzas ocupa ese lugar (si no, pasa al área del sprint 3); la matriz se completa al final del curso | — | — |

Las pantallas de comprobantes y cartera están dentro de S1-51 (Logística): el `/planning` de Logística separa esa parte para este sprint.

**Necesita antes:** el POD de Logística para facturar (S1-48). Si Finanzas llega antes que Logística, S1-49 usa un doble de prueba que deja la OV en Entregada.

**Al terminar estas tarjetas:** la compuerta de pago acepta anticipo **o** crédito aprobado (CRE-01); la confirmación del anticipo pasa de Ventas a Tesorería sin cambiar la pantalla del asesor (D17); la OV llega a Facturada.

**Después de este sprint, Finanzas también resolverá** la nota de crédito de Postventa (S1-61, `EmitirNotaCredito`), cuando Comercial retome Postventa ([pendientes de Comercial](comercial.md#pendientes-del-área)).

## Núcleo

*(por definir con la fuente de Finanzas)*

## Si alcanza

*(por definir)*

## Simulado

Igual que todo el curso (D12): SUNAT y facturación electrónica con respuesta simulada; extracto bancario de ejemplo.

## Regla de recorte

*(por definir: base del área y puntos de control)*

## Pendientes del área

*(se completa al cerrar el sprint del área)*
