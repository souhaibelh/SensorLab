using Microsoft.AspNetCore.Components;

namespace SensorLab.Services
{
    public interface IModalService
    {
        event Action<RenderFragment, string>? OnShow;
        event Action? OnClose;
        void Show<T>(string title) where T : ComponentBase;
        void Close();
    }
}
