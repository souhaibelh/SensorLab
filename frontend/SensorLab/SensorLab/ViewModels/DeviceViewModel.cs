using System.ComponentModel.DataAnnotations;

namespace SensorLab.ViewModels
{
    public class DeviceViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Device name is required")]
        [StringLength(100, ErrorMessage = "Name cannot exceed 100 characters")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "You must select a device type")]
        public int Type_Id { get; set; }

        public bool IsActive { get; set; } = false;

        /** After this line I'll add flags for UI purposes */
    }
}
