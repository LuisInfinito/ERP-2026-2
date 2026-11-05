# Contrato de integración — Módulo Finanzas

[← Índice](../../README.md)

**Sprint en que se construye:** el de Finanzas, por confirmar ([alcance/finanzas.md](../alcance/finanzas.md)) · **Dueño del módulo:** Miguel · **Estado:** Borrador (S1-04)

## 1. Qué hace el módulo
Submódulos **Tesorería** (confirmación y conciliación de anticipos), **Créditos y Cobranzas** (crédito B2B, cartera y bloqueo por mora) y **Facturación** (boletas, facturas y notas de crédito): `PA.01` y `PO.02.P03.SP02`. En el sprint 1 no se construye: Comercial confirma el anticipo desde Ventas (D17) y la OV queda lista para facturar (D06).

## 2. Qué expone (interfaz pública en `Contratos`)
| Operación | Entrada | Salida | Quién la usa | Estado |
|---|---|---|---|---|
| `ConsultarCredito` | cliente, monto | línea disponible, mora y decisión (automática o del rol Créditos) | Comercial › Ventas | Sprint de Finanzas (S1-36) |
| `ConfirmarAnticipo` | anticipo registrado | anticipo con pago validado | Comercial › Ventas | Sprint 1 desde Ventas; desde el sprint de Finanzas aquí (S1-50, D17) |
| `ConciliarAnticipo` | anticipo, extracto bancario | anticipo Conciliado | Comercial › Ventas | Sprint de Finanzas (S1-50) |
| `EmitirComprobante` | orden de venta | boleta o factura con respuesta SUNAT simulada | Comercial › Ventas | Sprint de Finanzas (S1-49) |
| `EmitirNotaCredito` | RMA aprobada | nota de crédito aplicada a la cuenta del cliente | Comercial › Postventa | Cuando se retome Postventa (S1-61, pendiente de Comercial) |
| `ConsultarCartera` | cliente, fecha | cuentas por cobrar Vigente / Vencida / Pagada | Comercial, tablero por rol | Sprint de Finanzas (S1-50) |

## 3. Qué consume de otros módulos
Si el módulo dueño aún no existe cuando llegue este sprint, se usa una **versión mínima** o el doble de prueba de la última columna (D06).

| Módulo | Operación | Para qué | Mientras no exista (doble de prueba) |
|---|---|---|---|
| Comercial › Ventas | `ObtenerOrdenVentaConfirmada` | Emitir el comprobante sin redigitar y generar la cuenta por cobrar | — (se construye en el sprint 1, S1-16) |
| Comercial › Ventas | anticipo registrado | Confirmarlo y conciliarlo | — (se registra en el sprint 1, S1-15) |
| Comercial › Postventa | dictamen con RMA aprobada | Emitir la nota de crédito | Pendiente de Comercial (Postventa) |
| Logística › Despacho | POD de la entrega | Fecha de entrega para el comprobante y la garantía | Sprint de Logística (S1-48) |
| Compartido | `RegistrarCambioDeEstado`, `RegistrarOrigen` | Historial y cadena de cada documento (D25) | — (preparación y sprint 1: S1-08, S1-09) |

## 4. Datos maestros
- **Anticipo, comprobante, nota de crédito, línea de crédito y cuenta por cobrar:** dueño Finanzas.
- **Cliente:** dueño Comercial; Finanzas guarda solo su identificador.
- **Extracto bancario:** dato semilla simulado (D12).

## 5. Cambios de estado que otros módulos esperan
- Anticipo **Pago validado** → Ventas puede convertir la cotización en OV.
- Cliente **bloqueado por mora** → Ventas no cotiza ni convierte a OV (`MOR-01`).
- Comprobante **Aceptado por SUNAT** → la OV pasa a Facturada y nace la cuenta por cobrar.

## 6. Reglas de integración en el catálogo
`CRE-01`, `MOR-01`, `FAC-01` en [docs/reglas.md](../reglas.md).

## 7. Cambios acordados
*(ninguno todavía)*
