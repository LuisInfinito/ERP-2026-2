# Contrato de integración — Módulo Planta

[← Índice](../../README.md)

**Sprint en que se construye:** el de Planta, por confirmar ([alcance/planta.md](../alcance/planta.md)) · **Dueño del módulo:** Miguel · **Estado:** Borrador (S1-04)

## 1. Qué hace el módulo
Submódulos **Ingeniería** (requerimiento técnico, especificación, BOM y costo estándar) y **Producción** (demanda, órdenes de producción e ingreso a producto terminado): `PO.01` y `PO.03`. En el sprint 1 no se construye: el caso MTO espera este sprint (D06, D19).

## 2. Qué expone (interfaz pública en `Contratos`)
| Operación | Entrada | Salida | Quién la usa | Estado |
|---|---|---|---|---|
| `CrearRequerimientoMto` | oportunidad MTO y especificación | requerimiento Registrado → En costeo → Costeado | Comercial › Ventas | Sprint de Planta (S1-33) |
| `ObtenerCostoBase` | requerimiento costeado | costo estándar Calculado → Aprobado por Contabilidad | Comercial › Ventas (margen MTO) | Sprint de Planta (S1-34) |
| `CrearDemanda` | orden de venta MTO | demanda Consolidada y orden de producción Planificada | Comercial › Ventas | Sprint de Planta (S1-42) |
| `CrearOrdenReproceso` | ticket de Postventa con dictamen de reproceso | orden de reproceso Planificada → Terminada | Comercial › Postventa | Cuando se retome Postventa (S1-60, pendiente de Comercial) |
| `RegistrarIngresoProductoTerminado` | orden de producción terminada | stock disponible asignado a su OV | Logística, Comercial | Sprint de Planta (S1-42) |

## 3. Qué consume de otros módulos
| Módulo | Operación | Para qué | Mientras no exista (doble de prueba) |
|---|---|---|---|
| Comercial › Ventas | oportunidad MTO y orden de venta | Origen del requerimiento y de la demanda | — (la OV se construye en el sprint 1; la oportunidad MTO, en el sprint de Planta) |
| Logística › Inventarios | consumo de insumos y stock de producto terminado | Cerrar la orden de producción | Datos semilla |
| Compartido | `RegistrarCambioDeEstado`, `RegistrarOrigen` | Historial y cadena (D25) | — (preparación y sprint 1: S1-08, S1-09) |

## 4. Datos maestros
- **Requerimiento técnico, especificación, BOM, costo estándar, demanda y orden de producción:** dueño Planta.
- **Producto:** dueño Comercial en el sprint 1 (datos semilla).

## 5. Cambios de estado que otros módulos esperan
- Costo estándar **Aprobado** → Ventas habilita la cotización MTO con margen (`MTO-01`).
- Producción **Terminada** → el ingreso a producto terminado asigna la OV a "Lista para despacho" y avisa al vendedor.
- Si falta información, el requerimiento **vuelve al ejecutivo** comercial.

## 6. Reglas de integración en el catálogo
`MTO-01` y las reglas de Ingeniería y Producción del TO-BE en [docs/reglas.md](../reglas.md).

## 7. Cambios acordados
*(ninguno todavía)*
