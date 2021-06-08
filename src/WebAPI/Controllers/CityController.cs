using BLL.Services.Interfaces;
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
        private readonly ICityService _cityService;

        public CityController(ICityRepository repository, ICityService cityService)
        {
            _repository = repository;
            _cityService = cityService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<City>>> GetAll()
        {
            return new ObjectResult(await _repository.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<City>> Get(int id)
        {
            return await _repository.GetById(id);
        }

        [HttpPost]
        public async Task<ActionResult> Post(City[] cities)
        {
            if (await _cityService.AddRange(cities))
            {
                return StatusCode(201, cities);
            }

            return BadRequest(new { Error = "Coordinates are invalid" });
        }
    }
}
