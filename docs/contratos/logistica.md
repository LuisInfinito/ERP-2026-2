# Contrato de integración — Módulo Logística

[← Índice](../../README.md)

**Sprint en que se construye:** 2 (10/11 – 16/11), por confirmar con el profesor · **Dueño del módulo:** Miguel · **Estado:** Borrador (S1-04)

## 1. Qué hace el módulo
Submódulos **Inventarios** (stock por sede, reservas, reposición, transferencias y cuarentena) y **Despacho** (órdenes de despacho, programación y POD): `PO.04` y `PO.05`. En el sprint 1 no se construye: Comercial deja la OV Confirmada para este sprint (D06).

## 2. Qué expone (interfaz pública en `Contratos`)
| Operación | Entrada | Salida | Quién la usa | Estado |
|---|---|---|---|---|
| `ConsultarStock` | producto, sede | cantidad disponible y comprometida | Comercial › Ventas al cotizar | Sprint de Logística (S1-38) |
| `Reservar` | producto, sede, cantidad | reserva Activa con vencimiento | Comercial › Ventas | Sprint de Logística (S1-39) |
| `ConfirmarReserva` | reserva | reserva Comprometida (firme con la OV) | Comercial › Ventas | Sprint de Logística (S1-39) |
| `LiberarOrdenDespacho` | orden de venta confirmada | orden de despacho Creada | Comercial › Ventas | Sprint de Logística (S1-48) |
| `RegistrarPod` | orden de despacho, firma y foto simuladas | POD registrado; la OV pasa a Entregada | Comercial › Ventas | Sprint de Logística (S1-48) |
| `MoverStockCuarentena` | producto, sede, cantidad | stock Bloqueado o liberado según Calidad | Comercial › Postventa | Cuando se retome Postventa (S1-62, pendiente de Comercial) |
| `SugerirReposicion` | punto de reorden | solicitud Sugerida → Aprobada | Tablero por rol | Sprint de Logística (S1-47) |

## 3. Qué consume de otros módulos
| Módulo | Operación | Para qué | Mientras no exista (doble de prueba) |
|---|---|---|---|
| Comercial › Ventas | `ObtenerOrdenVentaConfirmada`, cliente y dirección | Armar la orden de despacho y el POD | — (se construye en el sprint 1, S1-16) |
| Planta › Producción | ingreso a producto terminado | Sumar stock al cerrar una orden de producción | Versión mínima o datos semilla hasta el sprint de Planta (S1-42) |
| Compartido | `RegistrarCambioDeEstado`, `RegistrarOrigen` | Historial y cadena (D25) | — (preparación y sprint 1: S1-08, S1-09) |

## 4. Datos maestros
- **Stock por sede, reserva, guía de remisión, orden de despacho y POD:** dueño Logística.
- **Producto y lista de precios:** dueño Comercial en el sprint 1 (datos semilla).
- **Sede:** dato semilla; candidato a `Compartido`.

## 5. Cambios de estado que otros módulos esperan
- Reserva **Comprometida** → Ventas puede confirmar la OV.
- OV **Entregada** (POD) → Finanzas emite el comprobante y Postventa cuenta la garantía desde esa fecha.
- Stock **Bloqueado** → Calidad decide reproceso, saldo o baja.

## 6. Reglas de integración en el catálogo
`STK-01`, `RES-01`, `DES`, `MOR` (reserva y despacho) en [docs/reglas.md](../reglas.md).

## 7. Cambios acordados
*(ninguno todavía)*

> La fuente de verdad de Logística aún no está confirmada (D02): estas operaciones son un supuesto y se revisan cuando llegue el área.
