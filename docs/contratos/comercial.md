# Contrato de integración — Módulo Comercial

[← Índice](../../README.md)

**Sprint en que se construye:** 1 (03/11 – 09/11), núcleo esencial (D19) · **Dueño del módulo:** Miguel · **Estado:** Borrador; se completa en S1-04 junto con los contratos de Finanzas, Logística, Planta y Compartido

## 1. Qué hace el módulo
Submódulos **CRM** (clientes, leads, oportunidades), **Ventas** (cotización, anticipo, orden de venta) y **Postventa** (reclamos, garantía, servicio, nota de crédito): `PO.02` y `PO.06`. Postventa usa directamente la OV de Ventas (mismo módulo, sin contrato).

## 2. Qué expone (interfaz pública en `Contratos`)
| Operación | Entrada | Salida | Quién la usa | Estado |
|---|---|---|---|---|
| `ObtenerOrdenVentaConfirmada` | Id de OV | OV con cliente, líneas, precios y sede | Logística (despacho), Finanzas | Sprint 1 (S1-16); se consume desde el sprint de Logística (S1-41) |
| `ListarOrdenesVentaConfirmadas` | Sede, fecha | Lista de OV pendientes de despacho | Logística (bandeja de despachos) | Sprint de Logística (S1-41) |
| `ObtenerCliente` | DNI/RUC | Datos básicos del cliente | Logística (entrega), Finanzas (crédito, comprobantes) | Por implementar |

## 3. Qué consume de otros módulos
En el sprint 1 Comercial **solo consume Compartido** (D06). Las demás operaciones se conectan en el sprint del área dueña; si para entonces el otro módulo aún no existe, se usa el doble de prueba de la última columna.

| Módulo | Operación | Para qué | Mientras no exista (doble de prueba) |
|---|---|---|---|
| Compartido | `RegistrarCambioDeEstado`, `RegistrarOrigen` | Historial y cadena documental de cada documento (D25) | — (preparación y sprint 1: S1-08, S1-09) |
| Planta › Ingeniería y Producción | `CrearRequerimientoMto`, `ObtenerCostoBase`, `CrearDemanda` | Caso MTO (S1-33, S1-35, S1-41) | Sprint de Planta |
| Finanzas › Créditos y Cobranzas | `ConsultarCredito(cliente, monto)` | Compuerta de pago con crédito B2B y bloqueo por mora (S1-36) | Sprint de Finanzas; mientras tanto la compuerta es solo el anticipo |
| Finanzas › Tesorería | `ConfirmarAnticipo(pago)` | Confirmación del anticipo desde el sprint de Finanzas (D17) | En el sprint 1, Tesorería confirma desde Ventas |
| Logística › Inventarios | `ConsultarStock(producto, sede)` | Ver stock al cotizar (`PO.02.P01.SP02.A01`) | Devuelve stock fijo de datos semilla |
| Logística › Inventarios | `Reservar(producto, sede, cantidad)` | Reserva con vencimiento; se vuelve firme al confirmar la OV | Devuelve "reservado" siempre |
| Logística › Despacho | `LiberarOrdenDespacho(ov)` | Despacho MTS de la OV confirmada (`PO.02.P04.SP01.A02`) | Sprint de Logística (S1-41, S1-48) |
| Finanzas › Tesorería | `ConciliarAnticipo(pago)` | Pasar el anticipo a Conciliado con el extracto (`PA.01.P01.SP02.A01`) | En el sprint 1 no hay conciliación; llega con el sprint de Finanzas (S1-50) |
| Finanzas › Facturación | `EmitirComprobante(ov)` | Boleta o factura desde la OV (`PA.01.P01.SP01.A01`) | Sprint de Finanzas (S1-49) |

## 4. Datos maestros
- **Cliente, Oportunidad, Cotización, Pago, OV:** dueño Comercial.
- **Producto y lista de precios:** en el sprint 1 viven en Comercial (datos semilla). Si más adelante Inventario necesita el catálogo, se decide el dueño en una decisión `Dnn` y se mueve a `Compartido` o a Inventario.
- **Sede:** dato semilla; candidato a `Compartido`.

## 5. Cambios de estado que otros módulos esperan
OV pasa a **Confirmada** → para MTS, Logística recibe la orden de despacho; para MTO, Planificación recibe la demanda (`PO.02.P04.SP01.A02`). En el sprint 1 la OV se queda en Confirmada; la distribución llega con el sprint de Logística (y la demanda MTO con el de Planta).

## 6. Reglas de integración en el catálogo
`OV-03`, `OV-04` y, cuando existan, las de reserva.

## 7. Cambios acordados
*(ninguno todavía)*

> Las operaciones que consume de Logística son un supuesto hasta conocer la fuente de Logística (D02).
