using BLL.Services.Interfaces;
using DAL;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("{controller=City}")]
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : Controller
    {
        private readonly ICityRepository _repository;
        private readonly ICityService _cityService;

        public CityController(ICityRepository repository, ICityService cityService)
        {
            _repository = repository;
            _cityService = cityService;
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
        public async Task<ActionResult> Post(City[] cities)
        {
            if (await _cityService.AddRange(cities))
            {
                return Ok();
            }

            return BadRequest(new { Error = "Coordinates are invalid" });
        }
    }
}
