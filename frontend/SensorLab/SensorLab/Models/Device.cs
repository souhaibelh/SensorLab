namespace SensorLab.Models
{
    public class Device
    {
        public string name { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public bool isActive { get; set; } = false;
        public double? Range { get; set; }
        public DateTime LastUpdated { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
