using Microsoft.EntityFrameworkCore;

namespace MyAPIWebCore6.Data
{
    public class MenuStoreContext : DbContext
    {
        public MenuStoreContext(DbContextOptions<MenuStoreContext> options) : base(options) {}

        public DbSet<MenuItem>? MenuItems { get; set; }

        internal Task SaveAsChangeAsync()
        {
            throw new NotImplementedException();
        }
    }
}
