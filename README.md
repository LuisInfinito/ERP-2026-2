# ERP FAMIHOGAR — prototipo por áreas

Proyecto del curso de ERP. Equipo: 3 integrantes (A, B y C). Stack: C# (.NET) + SQL Server.

ERP web para **FAMIHOGAR SAC** (manufactura y retail de muebles, Perú), construido como **monolito modular**: cada semana se agrega un área nueva (Comercial → Logística → …) al mismo sistema y se presenta el jueves. El alcance de cada área sale del [Documento TO-BE](docs/fuentes/to-be-comercial.md).

## Cómo leer este repositorio

La documentación se lee como un informe, en orden:

### Parte I — Plan
1. [Enfoque](docs/plan/enfoque.md)
2. [Alcance](docs/plan/alcance.md)
3. [Arquitectura](docs/arquitectura.md)
4. [Flujo de trabajo](docs/plan/flujo-de-trabajo.md)
5. [Sprints](docs/plan/sprints.md)
6. [Tablero Kanban](docs/plan/kanban.md)

### Parte II — Desarrollo (un capítulo por semana)
- *(se agrega un capítulo cada semana a partir de la [plantilla](docs/capitulos/_plantilla.md))*

### Anexos
- [Catálogo de reglas de negocio](docs/reglas.md)
- [Registro de decisiones](docs/decisiones.md)
- [Glosario](docs/glosario.md)
- [Contratos de integración entre módulos](docs/contratos/_plantilla.md) · [Comercial](docs/contratos/comercial.md)
- [Fuente: resumen del TO-BE comercial](docs/fuentes/to-be-comercial.md)
- [Guía: CI con GitHub Actions](docs/guias/ci.md)
- [Bitácora de sesiones](BITACORA.md)
- [Contexto vivo del proyecto](docs/contexto.md) *(interno)*
- [Comandos del asistente](docs/comandos/iniciar.md) (`/iniciar`, `/cierre`, `/retro`, `/planning`)

## Cronología del código

Cada semana cerrada se marca con un tag (`semana-01`, `semana-02`, …). Cada capítulo enlaza al tag de su semana.

## Estructura

```
erp-famihogar/
├── README.md · AGENTS.md · BITACORA.md
├── .opencode/command/      # comandos de OpenCode (apuntan a docs/comandos/)
├── .github/                # plantillas de PR y de tarjeta
├── docs/
│   ├── plan/               # enfoque, alcance, flujo, sprints, kanban
│   ├── capitulos/          # un capítulo por semana
│   ├── contratos/          # qué expone y consume cada módulo
│   ├── fuentes/            # TO-BE (resumen + PDF original)
│   ├── guias/              # CI y otras guías cortas
│   ├── comandos/           # /iniciar /cierre /retro /planning (para cualquier asistente)
│   ├── arquitectura.md · reglas.md · decisiones.md · glosario.md · contexto.md
├── scripts/                # carga masiva de tarjetas
├── src/                    # solución .NET (módulos)
└── tests/                  # pruebas xUnit
```

## Usar los comandos con otro asistente

Los comandos viven en `docs/comandos/` como Markdown, así que sirven con cualquier asistente. En OpenCode se invocan como `/iniciar`; en Codex o cualquier otro, se escribe: *"Sigue `docs/comandos/iniciar.md`"*. Ambos leen `AGENTS.md` solos.

## Ejecución

*(se completa cuando exista el primer entregable funcional)*
