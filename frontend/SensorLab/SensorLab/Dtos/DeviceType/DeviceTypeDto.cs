using System.ComponentModel.DataAnnotations;

namespace SensorLab.Dtos.DeviceType
{
    public class DeviceTypeDto
    {
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public int Category_Id { get; set; }

        public string? Description { get; set; }
    }
}
