using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL
{
    public class CityRepository : Repository<City, ApplicationDbContext>, ICityRepository
    {
        public CityRepository(ApplicationDbContext dbContext)
            : base(dbContext)
        {

        }
        public async Task AddCity(City city)
        {
            await Add(city);
        }

        public async Task DeleteCity(int id)
        {
            await Delete(id);
        }

        public async Task<IEnumerable<City>> GetAllCities()
        {
            return await GetAll();
        }

        public async Task<City> GetCityById(int id)
        {
            return await GetById(id);
        }

        public async Task UpdateCity(City city)
        {
            await Update(city);
        }
    }
}
