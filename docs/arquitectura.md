# 3. Arquitectura

[← Índice](../README.md)

Decisiones D03 a D06 y D12 (ver [decisiones](decisiones.md)). Esta página es el mapa; los porqués están en las decisiones.

## 3.1 Vista general

Un solo sistema (monolito modular): **una solución .NET, una base SQL Server**. Cada área del ERP es un módulo con sus propias capas, su propio esquema SQL y una interfaz pública para que otros módulos hablen con él.

```
erp-famihogar/
└── src/
    ├── Erp.Api/              # host único: arranca el sistema, registra módulos, sirve la API
    ├── Erp.Compartido/       # lo que todos usan: Dinero, Resultado/errores, catálogos comunes
    ├── Erp.Comercial/        # módulo Comercial
    │   ├── Contratos/        # interfaz PÚBLICA: lo único que otros módulos pueden usar
    │   ├── Api/              # controladores
    │   ├── Servicios/        # reglas de negocio
    │   └── Datos/            # entidades, DbContext del módulo, repositorios (EF Core)
    └── Erp.Logistica/        # (semana 2) misma forma
tests/
    └── Erp.Tests/            # xUnit, una carpeta por módulo
```

*Es la forma propuesta; se confirma al crear el esqueleto (S1-04) y se anota en `docs/contexto.md`.*

## 3.2 Reglas de dependencia

1. Dentro de un módulo: **Api → Servicios → Datos**. Nunca al revés; los controladores no tienen reglas de negocio y los repositorios tampoco.
2. Entre módulos: un módulo solo usa `Contratos` del otro. **Prohibido** referenciar sus Servicios o Datos, y **prohibido** leer sus tablas.
3. `Compartido` no depende de ningún módulo.
4. Las reglas de negocio viven solo en `Servicios`, para poder probarlas con xUnit sin base de datos.

## 3.3 Base de datos

- Una base, un **esquema por módulo**: `comercial.Cliente`, `comercial.Cotizacion`, `logistica.Almacen`.
- Un módulo no hace `JOIN` con tablas de otro. Si necesita un dato ajeno, lo pide por su contrato (y guarda solo el identificador).
- Migraciones con EF Core, **creadas solo por A**; se versionan en el repo.
- Datos semilla ficticios (muebles, lista de precios, sedes).

## 3.4 Cómo se integra un área nueva

1. Antes de programar, se escribe el [contrato](contratos/_plantilla.md) del módulo: qué expone y qué consume.
2. Si necesita algo de un módulo que ya existe, ese módulo agrega la operación a su `Contratos`; no se "asoma" a sus tablas.
3. Mientras el otro módulo no exista, se usa un **doble de prueba** (una clase que devuelve datos fijos) detrás de la misma interfaz.
4. La integración real se prueba de punta a punta en el sprint en que ambos existen.

## 3.5 Front

Pendiente (D13). Cualquiera sea la opción (HTML + Bootstrap + `fetch`, o Angular), consume la misma API, así que el back no cambia. Si es HTML estático, se sirve desde la misma Api (`wwwroot`) para evitar configurar CORS.

## 3.6 Simulaciones (D12)

Login: selector de rol (Asesor, Jefatura, Tesorería…). Facturación y SUNAT: simulados. Correo y WhatsApp: simulados con un mensaje en pantalla o en el registro.
