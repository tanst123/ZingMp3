using MyAPIWebCore6.Data;
using MyAPIWebCore6.Models;

namespace MyAPIWebCore6.Repositories
{
    public interface IMenuItemRepository
    {
        public Task<List<MenuItemModel>> GetAllMenuItem();
        public Task<MenuItemModel> GetMenuItemById(Guid id);
        public Task<Guid> CreateMenuItem(MenuItemModel model);
        public Task UpdateMenuItem(Guid id, MenuItemModel model);
        public Task DeleteMenuItem(Guid id);
    }
}
