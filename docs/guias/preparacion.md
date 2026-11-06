# Preparación técnica desde cero

[Índice](../../README.md)

Esta guía define tareas pendientes de COM-002 a COM-005; no acredita instalación ni funcionamiento en las máquinas del equipo.

1. Cada integrante verifica acceso al repositorio, editor y herramientas. Practicar rama, commit y PR con una tarea real.
2. Elegir una versión LTS compatible de .NET, fijar su SDK en global.json y documentar la instalación.
3. Miguel crea la solución mínima, API y proyecto de pruebas. Respetar los archivos conservados de wwwroot.
4. Verificar build y test en orden; comprobar que se ejecutan pruebas reales. Registrar comandos y resultados.
5. Preparar una instancia SQL Server compatible con el sistema operativo de cada integrante; LocalDB no se presupone disponible en Linux.
6. Documentar la cadena de conexión mediante un ejemplo sin secretos. Cada persona guarda sus valores en configuración ignorada.
7. Miguel crea y aplica las migraciones autorizadas. Verificar lectura y escritura de datos ficticios; un endpoint de salud por sí solo no valida la base.
8. Incluir CI con los comandos y el SDK probados.

No hay servicios ni credenciales de aplicación preconfigurados por este repositorio.

## Estado verificado en la máquina de Miguel
Registro de lo comprobado, no de lo supuesto. No acredita las máquinas de Luis ni de Pablo.

2026-11-05 · COM-002
- SDK 10.0.401 fijado en `global.json`; `dotnet --version` dentro del repositorio devuelve `10.0.401`.
- Solución `Erp.slnx` con `src/Erp.Api` y `tests/Erp.Api.Tests`.
- La API sirve `wwwroot` sin modificarlo: una prueba de integración comprueba que `/` devuelve la interfaz conservada.
- `dotnet build`: 0 advertencias, 0 errores.
- `dotnet test`: 2 superadas, 0 con error.
- No se crearon DbContext ni migraciones; corresponden a COM-005.
