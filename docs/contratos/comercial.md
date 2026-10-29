# Contrato de integración — Módulo Comercial

[← Índice](../../README.md)

**Semana en que se construye:** 1 · **Dueño del módulo:** A · **Estado:** Borrador (las operaciones se confirman con Logística en el planning de la semana 2)

## 1. Qué hace el módulo
Atención retail, precios, cotización, anticipo y orden de venta (`PO.02`, microprocesos `P01` a `P04`).

## 2. Qué expone (interfaz pública en `Contratos`)
| Operación | Entrada | Salida | Quién la usa | Estado |
|---|---|---|---|---|
| `ObtenerOrdenVentaConfirmada` | Id de OV | OV con cliente, líneas, precios y sede | Logística (despacho), Finanzas | Por implementar (semana 2) |
| `ListarOrdenesVentaConfirmadas` | Sede, fecha | Lista de OV pendientes de despacho | Logística (bandeja de despachos) | Por implementar (semana 2) |
| `ObtenerCliente` | DNI/RUC | Datos básicos del cliente | Logística (entrega), Postventa | Por implementar |

## 3. Qué consume de otros módulos
| Módulo | Operación | Para qué | Mientras no exista (doble de prueba) |
|---|---|---|---|
| Logística / Inventario | `ConsultarStock(producto, sede)` | Ver stock al cotizar (`PO.02.P01.SP02.A01`) | Devuelve stock fijo de datos semilla |
| Logística / Inventario | `Reservar(producto, sede, cantidad)` | Reserva con vencimiento; se vuelve firme al confirmar la OV | Devuelve "reservado" siempre |
| Finanzas | `ConfirmarAnticipo(pago)` | Conciliar el anticipo con el banco | En semana 1 lo hace el rol Tesorería simulado dentro de Comercial |

## 4. Datos maestros
- **Cliente, Oportunidad, Cotización, Pago, OV:** dueño Comercial.
- **Producto y lista de precios:** en semana 1 viven en Comercial (datos semilla). Si más adelante Inventario necesita el catálogo, se decide el dueño en una decisión `Dnn` y se mueve a `Compartido` o a Inventario.
- **Sede:** dato semilla; candidato a `Compartido`.

## 5. Cambios de estado que otros módulos esperan
OV pasa a **Confirmada** → para MTS, Logística recibe la orden de despacho; para MTO, Planificación recibe la demanda (`PO.02.P04.SP01.A02`, fuera de la semana 1).

## 6. Reglas de integración en el catálogo
`OV-03`, `OV-04` y, cuando existan, las de reserva.

## 7. Cambios acordados
*(ninguno todavía)*
