using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL
{
    public interface ICityRepository
    {
        Task<IEnumerable<City>> GetAllCities();
        Task<City> GetCityById(int id);
        Task AddCity(City city);
        Task UpdateCity(City city);
        Task DeleteCity(int id);
    }
}
