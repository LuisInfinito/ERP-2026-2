# Contratos mínimos previstos — Comercial

[Índice](../../README.md)

Diseño pendiente de implementar. Se valida en COM-001 y se concreta en COM-008. El consumidor no lee tablas del proveedor.

| Proveedor | Operación | Entrada | Respuesta mínima | Rechazo verificable |
|---|---|---|---|---|
| Logística simulada | ConsultarYReservar | Producto, sede, cantidad, oportunidad | ReservaId, disponibilidad, vencimiento | Sin stock o cantidad inválida |
| Logística simulada | ComprometerReserva | ReservaId, CotizacionId | Estado y referencia de confirmación | Reserva vencida |
| Logística simulada | SolicitarDespacho | OvId, líneas, sede | SolicitudId, estado simulado | Solicitud no aceptada |
| Finanzas simulada | ConfirmarAnticipo | AnticipoId, comprobante, actor/rol | Confirmado o Rechazado, fecha y referencia | Sin comprobante o rol no permitido |
| Comercial | ConsultarOrden | OvId | Cliente, líneas copiadas, cotización origen y estado | No encontrada |

No se crean dependencias físicas entre tablas de módulos. El prototipo conserva identificadores de reserva y confirmación.
Cotización, anticipo y OV mantienen sus propios estados; pago validado no sustituye al estado Aceptada de la cotización.
Diseñar conversión idempotente: una repetición no crea otra OV ni otro despacho. Si falla un proveedor, mostrar estado recuperable y no declarar éxito completo.
Los proveedores reales se desarrollan y validan en sus respectivos sprints, sin cambiar estas responsabilidades.
