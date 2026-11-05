# Arquitectura objetivo

[Índice](../README.md)

Diseño para construir durante los sprints; no describe componentes ya existentes.

Monolito modular en C# / ASP.NET Core / EF Core / SQL Server; front HTML, CSS y JavaScript servido por la API.
Áreas: Comercial (CRM, Ventas, Postventa), Logística (Inventarios, Despacho), Finanzas (Tesorería, Créditos y Cobranzas, Facturación), Planta (Ingeniería, Producción).
Compartido contiene capacidades transversales, construidas cuando las necesita un área.

Cada módulo mantiene Api → Servicios → Datos. Servicios aplica reglas; Datos persiste; la API adapta HTTP.
Las pantallas consumen la API y muestran sus errores; no deciden reglas de negocio.
Entre módulos, solo contratos públicos. No consultar tablas ni usar clases internas ajenas.
Una base con esquema por módulo; propietario explícito de cada dato maestro.
Miguel define DbContext y migraciones en la tarjeta de base; la estructura concreta de proyectos se decide al crear el esqueleto, sin generar módulos vacíos innecesarios.

Historial y cadena son parte de la misma operación de negocio que registra el documento. Evitar guardar un documento sin su trazabilidad.
Historial inmutable; documentos anulables con motivo, sin borrado físico. Dinero con decimal.
Parámetros en configuración; secretos en configuración local ignorada, nunca en el repositorio.
Fijar SDK en global.json al crear la solución. Incorporar CI con comandos probados.
Los adaptadores de dependencias simuladas se sustituyen por implementaciones reales sin cambiar el contrato consumidor.
