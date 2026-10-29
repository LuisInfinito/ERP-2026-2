# Anexo A — Catálogo de reglas de negocio

[← Índice](../README.md)

Cada regla debe tener: módulo, condición y conclusión, fuente, tipo de fuente, microproceso del TO-BE y prueba xUnit.

**Tipo de fuente:**
- `NORMA`: ley o formato oficial (SUNAT, RENIEC).
- `TO-BE`: lo dice el [Documento TO-BE](fuentes/to-be-comercial.md).
- `SUPUESTO`: decisión del equipo, sin respaldo en norma ni en el TO-BE. Se presenta como tal.

**Estado:** ⬜ pendiente · 🟨 en curso · ✅ con prueba pasando. Los nombres de prueba son la convención `Clase_Condicion_Resultado` y se ajustan al implementar.

## Comercial — Cliente y oportunidad (tarjetas S1-08, S1-11)

| ID | Regla | Tipo | Microproceso / origen | Prueba | Estado |
|---|---|---|---|---|---|
| CLI-01 | Se busca al cliente por DNI o RUC; si no existe, se crea | TO-BE | PO.02.P01.SP01.A01 | `ClienteService_DocumentoInexistente_CreaCliente` | ⬜ |
| CLI-02 | El DNI tiene 8 dígitos y el RUC 11, solo numéricos | NORMA | Formato oficial de documento (RENIEC / SUNAT) | `Cliente_DniNoTieneOchoDigitos_EsRechazado` | ⬜ |
| CLI-03 | No se repite el documento: un cliente, una ficha | TO-BE | Sección 2 (CRM: "ficha única de cliente") | `ClienteService_DocumentoRepetido_EsRechazado` | ⬜ |
| OPO-01 | La oportunidad nace en estado "Nueva" con los productos de interés | TO-BE | PO.02.P01.SP01.A01 | `OportunidadService_Crear_EstadoNueva` | ⬜ |
| OPO-02 | Al registrar la oportunidad se asignan canal, sede y vendedor (en el prototipo: canal Retail, sede y vendedor del usuario simulado) | TO-BE | PO.02.P01.SP01.A01 | `OportunidadService_Crear_AsignaCanalSedeVendedor` | ⬜ |
| OPO-03 | La oportunidad pasa a "Ganada" al crearse la OV | SUPUESTO | Sección 4: la tabla de estados no dice qué evento la gana | `OportunidadService_OvCreada_EstadoGanada` | ⬜ |

## Comercial — Precios y cotización (tarjetas S1-09, S1-10, S1-11)

| ID | Regla | Tipo | Microproceso / origen | Prueba | Estado |
|---|---|---|---|---|---|
| PRE-01 | El precio sale de la lista vigente según canal y tipo de cliente | TO-BE | PO.02.P02.SP01.A01 | `PrecioService_ListaVigenteRetail_DevuelvePrecio` | ⬜ |
| PRE-02 | El precio de una línea no se edita a mano | TO-BE | PO.02.P02.SP01.A01 | `Cotizacion_EditarPrecioManual_EsRechazado` | ⬜ |
| PRE-03 | Solo las listas "Vigentes" se aplican; las "Vencidas" no | TO-BE | Sección 4 (Lista de precios) | `PrecioService_ListaVencida_NoSeAplica` | ⬜ |
| COT-01 | La cotización se crea desde la oportunidad con correlativo único (formato `COT-AAAA-NNNNN`) | TO-BE | PO.02.P02.SP02.A01 (el formato es SUPUESTO) | `CotizacionService_Crear_AsignaCorrelativoUnico` | ⬜ |
| COT-02 | La cotización tiene vigencia de 15 días, configurable | SUPUESTO | PO.02.P02.SP02.A01 pide vigencia pero no fija el plazo | `Cotizacion_Crear_VigenciaQuinceDias` | ⬜ |
| COT-03 | IGV = 18 % del subtotal; total = subtotal + IGV | NORMA | Ley del IGV (16 % + 2 % IPM) | `Cotizacion_CalcularTotal_AplicaIgv18` | ⬜ |
| COT-04 | Estados: Borrador → Aprobada → Enviada → Aceptada / Rechazada / Vencida. Sin descuento pendiente, pasa a Aprobada sola (D14) | TO-BE | Sección 4; el paso automático es SUPUESTO | `Cotizacion_TransicionInvalida_EsRechazada` | ⬜ |
| COT-05 | Rechazar una cotización exige un motivo | TO-BE | PO.02.P02.SP02.A02 | `Cotizacion_RechazarSinMotivo_EsRechazado` | ⬜ |
| COT-06 | Una cotización "Enviada" con vigencia vencida pasa a "Vencida" (se evalúa al consultarla) | TO-BE | PO.02.P02.SP02.A02 (el mecanismo es SUPUESTO) | `Cotizacion_EnviadaVigenciaVencida_PasaAVencida` | ⬜ |

## Comercial — Anticipo (tarjeta S1-12)

| ID | Regla | Tipo | Microproceso / origen | Prueba | Estado |
|---|---|---|---|---|---|
| PAG-01 | El anticipo se registra con su comprobante (número de operación) | TO-BE | PO.02.P03.SP01.A01 | `PagoService_RegistrarSinComprobante_EsRechazado` | ⬜ |
| PAG-02 | Tesorería confirma el anticipo: Registrado → Confirmado (D17) | TO-BE | PO.02.P03.SP01.A01 | `PagoService_ConfirmarComoAsesor_EsRechazado` | ⬜ |
| PAG-03 | Al confirmar el anticipo, la cotización queda marcada "Pago validado" | TO-BE | PO.02.P03.SP01.A01 | `PagoService_Confirmar_MarcaPagoValidado` | ⬜ |
| PAG-04 | El anticipo mínimo es 50 % del total de la cotización, configurable | SUPUESTO | D18 | `PagoService_AnticipoMenorAlMinimo_EsRechazado` | ⬜ |
| PAG-05 | El anticipo solo se registra sobre una cotización "Aceptada" | SUPUESTO | PO.02.P03 (orden implícito del proceso) | `PagoService_CotizacionNoAceptada_EsRechazado` | ⬜ |

## Comercial — Orden de venta (tarjeta S1-13)

| ID | Regla | Tipo | Microproceso / origen | Prueba | Estado |
|---|---|---|---|---|---|
| OV-01 | Ninguna cotización pasa a OV sin "Pago validado" | TO-BE | PO.02.P03 (introducción) y PO.02.P04.SP01.A01 | `OrdenVentaService_SinPagoValidado_EsRechazada` | ⬜ |
| OV-02 | Solo se convierte una cotización "Aceptada" y vigente | TO-BE | PO.02.P03 (introducción) | `OrdenVentaService_CotizacionNoAceptada_EsRechazada` | ⬜ |
| OV-03 | La OV copia cliente, líneas y precios de la cotización, sin volver a digitar | TO-BE | PO.02.P04.SP01.A01 | `OrdenVentaService_Convertir_CopiaClienteLineasYPrecios` | ⬜ |
| OV-04 | La OV nace "Confirmada" (D15) | TO-BE | PO.02.P04.SP01.A01 | `OrdenVentaService_Convertir_EstadoConfirmada` | ⬜ |
| OV-05 | Una cotización genera una sola OV | SUPUESTO | Evita doble conversión | `OrdenVentaService_ConvertirDosVeces_EsRechazada` | ⬜ |

## Para semanas siguientes (aún sin tarjeta)

Cliente "Bloqueado por mora" no cotiza (PA.01 / PO.02.P03.SP02), reserva de stock con vencimiento (PO.02.P01.SP02.A01), descuento con límite por rol (PO.02.P02.SP01.A02), distribución de la OV (PO.02.P04.SP01.A02).
