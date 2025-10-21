using SensorLab.Dtos.DeviceType;

namespace SensorLab.Services.Api
{
    public class DeviceTypeService(HttpService httpService)
    {
        private const string BaseUrl = "api/device-types";

        public Task<List<DeviceTypeDto>?> GetAllAsync()
        {
            return httpService.GetAsync<List<DeviceTypeDto>>(BaseUrl);
        }

        public Task<DeviceTypeDto?> GetByIdAsync(int id)
        {
            return httpService.GetAsync<DeviceTypeDto>($"{BaseUrl}/{id}");
        }

        public Task<DeviceTypeDto?> CreateAsync(DeviceTypeDto device)
        {
            return httpService.PostAsync<DeviceTypeDto>(BaseUrl, device);
        }

        public Task DeleteAsync(int id)
        {
            return httpService.DeleteAsync($"{BaseUrl}/{id}");
        }
    }
}
