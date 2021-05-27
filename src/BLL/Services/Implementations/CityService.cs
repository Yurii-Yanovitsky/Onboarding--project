using BLL.Services.Interfaces;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BLL.Services.Implementations
{
    public class CityService : ICityService
    {
        private readonly ICityRepository _cityRepository;

        public CityService(ICityRepository cityRepository)
        {
            _cityRepository = cityRepository;
        }

        public async Task<bool> AddRange(IEnumerable<City> cities)
        {
            double delta = 0.15;

            if (!await ValidateCityUniqueness(cities, delta))
            {
                return false;
            }

            await _cityRepository.AddCities(cities);

            return true;
        }

        private async Task<bool> ValidateCityUniqueness(IEnumerable<City> cities, double delta)
        {
            if (!CheckCoordUniquenessSet(cities, delta))
            {
                return false;
            }

            if (!await CheckCoordUniquenessDb(cities, delta))
            {
                return false;
            }


            return true;
        }

        private bool CheckCoordUniquenessSet(IEnumerable<City> cities, double delta)
        {
            int counter = 1;

            foreach (var city in cities)
            {
                var leftCities = cities.Skip(counter);

                if (leftCities.Any(c => Math.Abs(c.X - city.X) < delta || Math.Abs(c.Y - city.Y) < delta))
                {
                    return false;
                }

                counter++;
            }

            return true;
        }

        private async Task<bool> CheckCoordUniquenessDb(IEnumerable<City> cities, double delta)
        {
            var allCities = await _cityRepository.GetAllCities();

            if (allCities.Any(a => cities.Any(b => Math.Abs(b.X - a.X) < delta || Math.Abs(b.Y - a.Y) < delta)))
            {
                return false;
            }

            return true;
        }
    }
}
