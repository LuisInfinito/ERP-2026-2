# Alcance — Área Planta

[← Índice](../../README.md) · [Cómo se define el alcance](../plan/alcance.md)

**Sprint:** por confirmar con el profesor (una semana, de martes a lunes) · **Fuente de verdad:** por conocer (la indicará el profesor) · **Contrato:** [planta](../contratos/planta.md) · **Estado:** sin definir; se completa en su `/planning`.

Submódulos (D03): **Ingeniería** y **Producción**.

## De dónde parte

El caso MTO del TO-BE Comercial depende de Ingeniería y Producción, así que se construye completo aquí, en el sprint de Planta, no en el de Comercial (D06, D19). Sus tarjetas se redactaron en el planning del sprint 1 y están en el tablero, en Backlog, con el hito **Sprint Planta**; el `/planning` las revisa contra la fuente de Planta y las ajusta, divide o descarta.

**Qué deja listo el sprint 1:** oportunidad y cotización con historial y cadena documental. El caso MTO les agrega el requerimiento técnico como documento de origen de la cotización MTO.

| Tarjeta | Qué hace | Microproceso | Por qué es de Planta | Reglas | Contrato |
|---|---|---|---|---|---|
| S1-33 | Requerimiento MTO (Registrado → En costeo → Costeado); si falta información vuelve al ejecutivo | PO.02.P01.SP02.A02 · PO.01.P02.SP01.A02 | El costeo lo hace Ingeniería; sin Planta el requerimiento no avanza | — | `CrearRequerimientoMto` |
| S1-34 | Ingeniería: especificación versionada, BOM y costo estándar aprobado por Contabilidad; publicación del costo base | PO.01.P02.SP01.A02 · PO.01.P04.SP01.A02 | Proceso de Planta › Ingeniería | — | `ObtenerCostoBase` |
| S1-35 | Margen sobre el costo base y cotización MTO que guarda su requerimiento de origen | PO.02.P02.SP01.A01 paso 2 · PO.02.P01.SP02.A02 paso 3 | **Toca código de Comercial › Ventas**, pero necesita el costo publicado por Ingeniería | MTO-01 | — |
| S1-42 | Producción: demanda Consolidada → orden de producción Planificada → Terminada; ingreso a producto terminado asignado a su OV (Lista para despacho) | PO.03.P01.SP01.A01 · PO.03.P06.SP01.A01 | Proceso de Planta › Producción | — | `CrearDemanda`, `RegistrarIngresoProductoTerminado` |
| S1-43 | Pantalla de Planta con las fichas del requerimiento, la BOM y la orden de producción | PO.01 · PO.03 | Depende de S1-34 y S1-42 | — | — |
| S1-45 | Prueba de punta a punta del caso MTO (requerimiento → costo → cotización → anticipo o crédito → OV → demanda → OP → producto terminado) con su cadena completa, y ensayo de la demo | PO.02 · PO.01 · PO.03 | Prueba final del sprint de Planta | — | — |

**Necesita antes:** la distribución de la OV (S1-41, Logística) para recibir la demanda MTO, y el stock de producto terminado de Logística. Si Planta llega antes, usa dobles de prueba detrás de esos contratos.

**Al terminar estas tarjetas:** el caso MTO completo (requerimiento → costo → cotización MTO → anticipo → OV → demanda → orden de producción → producto terminado → despacho), que el TO-BE pide probar junto al MTS (pág. 87). El indicador "tiempo de costeo MTO" (S1-66) se agrega aquí.

**Después de este sprint, Planta también resolverá** la orden de reproceso de Postventa (S1-60, `CrearOrdenReproceso`), cuando Comercial retome Postventa ([pendientes de Comercial](comercial.md#pendientes-del-área)).

## Núcleo

*(por definir con la fuente de Planta)*

## Si alcanza

*(por definir)*

## Simulado

Igual que todo el curso (D12).

## Regla de recorte

*(por definir: base del área y puntos de control)*

## Pendientes del área

*(se completa al cerrar el sprint del área)*
