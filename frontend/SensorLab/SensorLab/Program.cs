using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using SensorLab;
using SensorLab.Services;
using SensorLab.Services.Api;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddSingleton<IModalService, ModalService>();
builder.Services.AddScoped(sp => new HttpClient
{
    BaseAddress = new Uri("http://localhost:4000/")
});
builder.Services.AddSingleton<SidebarState>();
builder.Services.AddScoped<HttpService>();
builder.Services.AddScoped<DeviceService>();
await builder.Build().RunAsync();