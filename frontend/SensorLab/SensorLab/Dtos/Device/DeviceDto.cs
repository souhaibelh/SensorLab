namespace SensorLab.Dtos.Device
{
    public class DeviceDto
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public int Type_Id { get; set; }

        public bool IsActive { get; set; }

        public DateTime LastUpdated { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
