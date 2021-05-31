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
        public override async Task Add(City city)
        {
            await base.Add(city);
        }
        public override async Task AddRange(IEnumerable<City> cities)
        {
            await base.AddRange(cities);
        }

        public override async Task Delete(int id)
        {
            await base.Delete(id);
        }

        public override async Task<IEnumerable<City>> GetAll()
        {
            return await base.GetAll();
        }

        public override async Task<City> GetById(int id)
        {
            return await base.GetById(id);
        }

        public override async Task Update(City city)
        {
            await base.Update(city);
        }
    }
}
