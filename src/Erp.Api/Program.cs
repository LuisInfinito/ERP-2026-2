var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// La interfaz conservada de wwwroot se sirve como archivos estáticos.
// No se modifica su contenido: COM-003 revisa textos y roles.
app.UseDefaultFiles();
app.UseStaticFiles();

// Estado mínimo del servicio. No valida base de datos ni módulos:
// eso corresponde a COM-005 en adelante.
app.MapGet("/api/estado", () => Results.Ok(new
{
    servicio = "Erp.Api",
    estado = "en marcha",
    version = typeof(Program).Assembly.GetName().Version?.ToString()
}));

app.Run();

// Permite que las pruebas de integración inicien la API.
public partial class Program { }
