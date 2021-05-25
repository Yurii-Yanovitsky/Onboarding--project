using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL
{
    public abstract class Repository<TEntity, TContext> : IRepository<TEntity>
        where TEntity : class
        where TContext : DbContext
    {
        public TContext _dbContext { get; }
        public DbSet<TEntity> _dbEntity { get; }

        public Repository(TContext dbContext)
        {
            _dbContext = dbContext;
            _dbEntity = _dbContext.Set<TEntity>();
        }

        public async Task Create(TEntity entity)
        {
            await _dbEntity.AddAsync(entity);
        }

        public async Task Delete(int id)
        {
            var entity = await _dbEntity.FindAsync(id);
            if (entity != null)
            {
                _dbEntity.Remove(entity);
            }
        }

        public async Task<IEnumerable<TEntity>> GetAll()
        {
            return await _dbEntity.ToListAsync();
        }

        public async Task<TEntity> GetById(int id)
        {
            return await _dbEntity.FindAsync(id);
        }

        public async Task Update(TEntity entity)
        {
            _dbEntity.Update(entity);
            await _dbContext.SaveChangesAsync();
        }
    }
}
