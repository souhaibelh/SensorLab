using SensorLab.Dtos.Device;
using SensorLab.Models;

namespace SensorLab.Services.Api
{
    public class DeviceService(HttpService httpService)
    {
        private const string BaseUrl = "api/devices";

        public Task<List<DeviceDto>?> GetAllAsync()
        {
            return httpService.GetAsync<List<DeviceDto>>(BaseUrl);
        }

        public Task<DeviceDto?> GetByIdAsync(int id)
        {
            return httpService.GetAsync<DeviceDto>($"{BaseUrl}/{id}");
        }

        public Task<DeviceDto?> CreateAsync(DeviceCreateDto device)
        {
            return httpService.PostAsync<DeviceDto>(BaseUrl, device);
        }

        public Task DeleteAsync(int id)
        {
            return httpService.DeleteAsync($"{BaseUrl}/{id}");
        }

        public Task<DeviceDto?> UpdateAsync(int id, DeviceUpdateDto device)
        {
            return httpService.PatchAsync<DeviceDto>($"{BaseUrl}/{id}", device);
        }
    }
}