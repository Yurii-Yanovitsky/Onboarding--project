using DAL;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BLL.Services.Interfaces
{
    public interface ICityService
    {
        Task<bool> AddRange(IEnumerable<City> cities);
    }
}
