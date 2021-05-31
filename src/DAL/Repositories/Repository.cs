using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL
{
    public abstract class Repository<TEntity, TContext> : IRepository<TEntity>
        where TEntity : class
        where TContext : DbContext
    {
        private readonly TContext _dbContext;
        private readonly DbSet<TEntity> _dbEntity;

        public Repository(TContext dbContext)
        {
            _dbContext = dbContext;
            _dbEntity = _dbContext.Set<TEntity>();
        }

        public virtual async Task Add(TEntity entity)
        {
            await _dbEntity.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
        }

        public virtual async Task AddRange(IEnumerable<TEntity> entities)
        {
            await _dbEntity.AddRangeAsync(entities);
            await _dbContext.SaveChangesAsync();
        }

        public virtual async Task Delete(int id)
        {
            var entity = await _dbEntity.FindAsync(id);
            if (entity != null)
            {
                _dbEntity.Remove(entity);
                await _dbContext.SaveChangesAsync();
            }
        }

        public virtual async Task<IEnumerable<TEntity>> GetAll()
        {
            return await _dbEntity.ToListAsync();
        }

        public virtual async Task<TEntity> GetById(int id)
        {
            return await _dbEntity.FindAsync(id);
        }

        public virtual async Task Update(TEntity entity)
        {
            _dbEntity.Update(entity);
            await _dbContext.SaveChangesAsync();
        }
    }
}
