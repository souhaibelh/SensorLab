using Microsoft.AspNetCore.Components;

namespace SensorLab.Services
{
    public class ModalService : IModalService
    {
        public event Action<RenderFragment, string>? OnShow;
        public event Action? OnClose;

        public void Show<T>(string title) where T : ComponentBase
        {
            var content = new RenderFragment(builder =>
            {
                builder.OpenComponent(0, typeof(T));
                builder.CloseComponent();
            });

            OnShow?.Invoke(content, title);
        }

        public void Close()
        {
            OnClose?.Invoke();
        }
    }
}
