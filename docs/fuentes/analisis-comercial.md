# Lectura del PDF Comercial y selección semanal

[Índice](../../README.md) · [PDF](Documento_TO_BE_FAMIHOGAR.pdf)

## Qué pide la fuente
El documento tiene 87 páginas y 35 microprocesos distribuidos entre núcleo comercial e interfaces con otras áreas (p. 1).
No equivale a un compromiso de implementar los 35 procesos en siete días.
Sus principios son reutilizar los datos, auditar aprobaciones con usuario y hora y bloquear operaciones inválidas (p. 4).
La recomendación expresa es empezar por PO.02: CRM, cotización, validación de pago y OV, y después probar MTS y MTO (p. 87).

## Mapa leído
| Parte | Páginas | Relación principal | Selección |
|---|---|---|---|
| Visión, actores y estados | 1–7 | Oportunidad, cotización, OV y áreas proveedoras | Base del diseño |
| Ingeniería | 7–13 | Requerimiento MTO, BOM y costo aprobado | Fuera del núcleo; requiere otro proveedor |
| PO.02 Ventas | 13–36 | Cliente → oportunidad → cotización → pago/OV | Núcleo MTS |
| Producción | 36–42 | Demanda MTO → producción → ingreso | Fuera del núcleo |
| Inventario y traslados | 42–51 | Reposición, transferencia y recepción | Contrato mínimo de stock/reserva, sin traslados |
| Despacho y entrega | 52–57 | Orden liberada → despacho → POD | Solo constancia de entrega al contrato, sin entrega física |
| Postventa | 57–77 | Ticket → OV/producto → POD → dictamen | Fuera del compromiso: exige entrega y resolución |
| Finanzas | 77–85 | OV → comprobante, abono, cuenta por cobrar | Confirmación de pago simulada; sin contabilidad |
| Pantallas y prioridades | 85–87 | Acciones, problemas e indicadores | Guion de aceptación, no una lista de pantallas obligatorias |

## Por qué este núcleo
PO.02 reúne los problemas de doble digitación, descuentos informales, ventas sin pago e historial disperso (pp. 86–87).
El caso retail MTS permite mostrar esas relaciones con pocos documentos y sin construir Ingeniería.
Postventa añade evidencia, garantía, POD, diagnósticos y resoluciones (pp. 59–76): su valor es real, pero introducirlo ahora aumenta las dependencias y reduce la probabilidad de terminar la venta trazable.
MTO, crédito, despacho real, facturación y Postventa quedan explícitamente fuera de esta semana; no se consideran resueltos.

## Referencias que generan trabajo
| Código | Página | Comportamiento seleccionado |
|---|---|---|
| PO.02.P01.SP01.A01 | 15 | Buscar o crear cliente; oportunidad con productos, canal, sede y vendedor |
| PO.02.P01.SP02.A01 | 18 | Disponibilidad y reserva con vencimiento, mediante adaptador simulado |
| PO.02.P02.SP01.A01 | 22 | Lista vigente por canal y tipo de cliente; precio bloqueado |
| PO.02.P02.SP01.A02 | 23 | Descuento con motivo y aprobación según límite; auditoría |
| PO.02.P02.SP02.A01 | 25 | Cotización desde oportunidad, correlativo, vigencia, impuesto y plazo |
| PO.02.P02.SP02.A02 | 27 | Envío y resultado: aceptada, rechazada con motivo o vencida |
| PO.02.P03.SP01.A01 | 29 | Anticipo con comprobante; confirmación por Tesorería |
| PO.02.P04.SP01.A01 | 34–35 | Bloquear sin pago, copiar datos y comprometer reserva |
| PO.02.P04.SP01.A02 | 35 | Entregar orden al contrato de despacho MTS |

## Ambigüedades y decisiones propuestas para la demo
- El texto de p. 34 dice OV Confirmada; la tabla de p. 5 y el diagrama de p. 35 muestran Registrada → Liberada. Propuesta: seguir tabla y diagrama, documentar ambas referencias y validar con el responsable en COM-001.
- El PDF no fija porcentajes de descuento, anticipo, impuestos, vigencia ni redondeo concretos para la demo. Acordar valores ficticios configurables en COM-001; no copiar valores del plan eliminado ni presentarlos como norma.
- El PDF exige PDF oficial (p. 25). Esta semana se propone ficha imprimible desde el navegador; la plantilla oficial no se implementa y se declara como simplificación.
- MTS/MTO de punta a punta es una meta del documento (p. 87). Esta semana cubre MTS solamente.
- Historial genérico inmutable, consulta de relaciones, transacciones y conversión idempotente son decisiones de diseño del prototipo, derivadas del objetivo de trazabilidad; no citas literales del PDF.
