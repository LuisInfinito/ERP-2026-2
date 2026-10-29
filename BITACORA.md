# Bitácora de sesiones

[← Índice](README.md)

Una entrada por sesión, la más reciente arriba. Tres líneas bastan.

## Plantilla

```
### AAAA-MM-DD · [Nombre] · [horas] h
- Hice:
- Falló / dudas:
- Siguiente paso exacto:
```

## Control semanal

| Sem. | Área | Entregable (Sí/Parcial/No) | Horas A | Horas B | Horas C | ¿Qué se recorta? |
|---|---|---|---|---|---|---|
| 1 | Comercial | | | | | |
| 2 | Logística | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |

## Sesiones

### 2026-10-29 · Luis (B) · Acceso y aplicaciones
- Hice: preparé en el fork el acceso simulado con nombre y rol, selector de Comercial y Logística, filtro y salida; documenté ejecución y revisión manual. Alcance adicional acordado con Miguel al inicio del sprint 1.
- Falló / dudas: validación en navegador bloqueada por descarga de Chromium (HTTP 403); sintaxis JavaScript y formato correctos. Falta aceptación de Luis y confirmar el catálogo final. La API y las pantallas internas siguen pendientes; este avance no cierra las tarjetas previas ni la parte de C.
- Siguiente paso exacto: Luis prueba la rama `b/acceso-aplicaciones` siguiendo `docs/guias/acceso-aplicaciones.md` y confirma o reporta ajustes antes de integrar al original.

### 2026-10-28 · Definición del flujo de trabajo
- Hice: analizamos mina-experta y el TO-BE de FAMIHOGAR; adaptamos el flujo (sprints semanales, monolito modular, contratos entre módulos, reglas con fuente TO-BE) y dejamos listos el plan, las decisiones D01–D19, el catálogo de 25 reglas y las 18 tarjetas del sprint 1.
- Falló / dudas: falta confirmar la fecha de la primera presentación (29/10 o 05/11), el idioma de los identificadores (D16), el front (D13) y el anticipo de 50 % (D18).
- Siguiente paso exacto: S1-01 (A): crear el repositorio en GitHub con esta estructura, el tablero y cargar las tarjetas con `scripts/crear-tarjetas.sh`.
