using DAL;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : Controller
    {
        private readonly ICityRepository _repository;

        public CityController(ICityRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<City>>> GetAll()
        {
            return new ObjectResult(await _repository.GetAllCities());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<City>> Get(int id)
        {
            return await _repository.GetCityById(id);
        }

        [HttpPost]
        public async Task Post(City[] cities)
        {
            await _repository.AddCities(cities);
        }
    }
}
