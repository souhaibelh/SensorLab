using System.Net.Http.Json;
using System.Runtime.CompilerServices;
using System.Text;
using System.Text.Json;

namespace SensorLab.Services.Api
{
    public class HttpService(HttpClient httpClient)
    {
        public Task<T?> GetAsync<T>(string url)
        {
            return httpClient.GetFromJsonAsync<T>(url);
        }

        public async Task<T?> PostAsync<T>(string url, object data)
        {
            var response = await httpClient.PostAsJsonAsync(url, data);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadFromJsonAsync<T>();
        }

        public async Task DeleteAsync(string url)
        {
            var response = await httpClient.DeleteAsync(url);
            response.EnsureSuccessStatusCode();
        }

        public async Task<T?> PutAsync<T>(string url, object data)
        {
            var response = await httpClient.PutAsJsonAsync(url, data);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadFromJsonAsync<T>();
        }

        public async Task<T?> PatchAsync<T>(string url, object data)
        {
            var json = JsonSerializer.Serialize(data);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var request = new HttpRequestMessage(new HttpMethod("PATCH"), url) { Content = content };
            var response = await httpClient.SendAsync(request);
            response.EnsureSuccessStatusCode();

            return await response.Content.ReadFromJsonAsync<T>();
        }
    }
}