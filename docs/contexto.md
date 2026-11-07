# Contexto del proyecto

- Inicio desde cero. Al 2026-11-07, COM-001 y COM-002 están integradas en `main` mediante el PR #104. COM-003 y COM-004 están en Ready; COM-005 está en In Progress y lista para PR.
- Código conservado: únicamente HTML, CSS y JavaScript de src/Erp.Api/wwwroot.
- Fuente: PDF de Comercial; análisis nuevo en docs/fuentes/analisis-comercial.md.
- Sprint 1: Comercial, 5–11 de noviembre de 2026; recorrido PO.02 MTS trazable.
- Capacidad: Miguel, Luis y Pablo, 3 h diarias cada uno, incluidos fines de semana.
- Plan: 42 h; reserva: 21 h. Miguel tiene mayor experiencia, Luis la segunda y Pablo la menor.
- Primeras tarjetas: COM-001 a COM-004; no hay preparación previa acreditada.
- COM-001 acordó estados de OV y parámetros ficticios (DEC-001). Por acuerdo del equipo, los horarios escalonados no se documentan.
- Calendario y método: docs/plan/sprints.md. Estado de COM-005 en In Progress reportado por Miguel el 2026-11-07; no fue verificado en el tablero remoto.
- Existe `Erp.slnx` con `Erp.Api`, los tres proyectos de Comercial (`Dominio`, `Aplicacion`, `Infraestructura`) y las pruebas. Al 2026-11-07 la base local `ErpFamihogar` tiene el esquema `Comercial` con la migración `Inicial` aplicada; siguen pendientes la cotización, el descuento, el resto del recorrido y el CI.
