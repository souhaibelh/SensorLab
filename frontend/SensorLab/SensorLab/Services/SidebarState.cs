using System;
using System.Collections.Generic;

namespace SensorLab.Services
{
    public class SidebarState
    {
        private readonly Dictionary<string, bool> _menuStates = new();

        public event Action<string>? OnToggle;

        public bool IsOpen(string menuId)
        {
            return _menuStates.TryGetValue(menuId, out var open) && open;
        }

        public void Toggle(string menuId)
        {
            bool current = IsOpen(menuId);
            _menuStates[menuId] = !current;
            OnToggle?.Invoke(menuId);
        }

        public void Set(string menuId, bool open)
        {
            _menuStates[menuId] = open;
            OnToggle?.Invoke(menuId);
        }
    }
}
