namespace SensorLab.Dtos.Device
{
    public class DeviceUpdateDto
    {
        public string Name { get; set; } = string.Empty;

        public int Type_Id { get; set; }

        public bool IsActive { get; set; }
    }
}