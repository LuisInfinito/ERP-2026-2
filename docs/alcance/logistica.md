# Alcance — Área Logística

[← Índice](../../README.md) · [Cómo se define el alcance](../plan/alcance.md)

**Sprint:** 2, martes 10/11 – lunes 16/11 (demo 17/11), por confirmar con el profesor · **Fuente de verdad:** por conocer (la indicará el profesor) · **Contrato:** [logistica](../contratos/logistica.md) · **Estado:** sin definir; se completa en su `/planning`.

## De dónde parte

El TO-BE Comercial describe procesos que mueve Logística. Se construyen aquí, en el sprint de Logística, no en el de Comercial (D06, D19). Sus tarjetas se redactaron en el planning del sprint 1 y están en el tablero, en Backlog, con el hito **Sprint Logística**; el `/planning` las revisa contra la fuente de Logística y las ajusta, divide o descarta.

**Qué deja listo el sprint 1:** la OV en estado **Confirmada**, con cliente, líneas, precios y sede, expuesta por el contrato `ObtenerOrdenVentaConfirmada` ([contrato Comercial](../contratos/comercial.md)).

| Tarjeta | Qué hace | Microproceso | Por qué es de Logística | Reglas | Contrato |
|---|---|---|---|---|---|
| S1-38 | Stock por sede | PO.02.P01.SP02.A01 paso 1 · PO.04 | El stock es de Inventarios; en Comercial solo sería una simulación con datos fijos | STK-01 | `ConsultarStock` |
| S1-39 | Reservas con vencimiento; firmes al confirmar la OV (Activa → Comprometida → Consumida / Liberada) | PO.02.P01.SP02.A01 pasos 2–3 · PO.02.P04.SP01.A01 paso 3 | La reserva es un documento de Logística | RES-01 | `Reservar`, `ConfirmarReserva` |
| S1-40 | Pantallas de stock por sede y reservas | PO.04 | Depende de S1-38 y S1-39 | — | — |
| S1-41 | Distribuir la OV: despacho MTS (o demanda MTO) con aviso al cliente; la OV pasa a Liberada | PO.02.P04.SP01.A02 | Es el paso de Comercial a Logística: sin despacho no hay a quién entregar la OV. **Toca código de Comercial › Ventas**, pero se hace en este sprint | DIS-01 | `LiberarOrdenDespacho` |
| S1-47 | Reposición por punto de reorden y transferencias con guía de remisión e incidencias | PO.04.P01.SP01.A02 · PO.04.P02.SP02.A02 · PO.04.P04.SP02.A02 | Proceso interno de Logística; Comercial no lo usa | — | `SugerirReposicion` |
| S1-48 | Bandeja de despacho y POD con firma y foto simuladas; la OV pasa a Entregada | PO.05.P01.SP01.A01 · PO.05.P03.SP02.A02 | Proceso de Despacho; su POD es la base de la facturación y la garantía | — | `RegistrarPod` |
| S1-51 | Pantallas de transferencias, bandeja de despacho y POD en vista móvil, con su ficha, historial y cadena | PO.04 · PO.05 | Pantallas de los documentos de Logística. La tarjeta incluye también comprobantes y cartera: el `/planning` separa esa parte para el sprint de Finanzas | — | — |
| S1-46 | Capítulo semana-02 y tag | — | Capítulo del sprint 2 | — | — |

**Lo que el TO-BE Comercial espera de Logística:**

- Consultar stock por producto y sede (PO.02.P01.SP02.A01).
- Reservar stock con vencimiento; la reserva se vuelve firme al confirmar la OV.
- Recibir las OV confirmadas MTS para despacho (PO.02.P04.SP01.A02).
- Constancia de entrega al cliente (POD), que después usan Finanzas (comprobante) y Postventa (garantía).

**Al terminar estas tarjetas:** la OV avanza Confirmada → Liberada → En preparación → Entregada (D15), con la orden de despacho y el POD en su cadena documental. La demanda MTO de S1-41 queda con un doble de prueba hasta el sprint de Planta.

**Después de este sprint, Logística también resolverá** el reingreso al almacén de cuarentena de Postventa (S1-62, `MoverStockCuarentena`), cuando Comercial retome Postventa ([pendientes de Comercial](comercial.md#pendientes-del-área)).

## Núcleo

*(por definir con la fuente de Logística)*

## Si alcanza

*(por definir)*

## Simulado

Igual que todo el curso (D12). La app móvil del chofer es una vista web adaptada a celular.

## Regla de recorte

*(por definir: base del área y puntos de control)*

## Pendientes del área

*(se completa al cerrar el sprint del área)*
