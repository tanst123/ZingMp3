using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MyAPIWebCore6.Data;
using MyAPIWebCore6.Models;

namespace MyAPIWebCore6.Repositories
{
    public class MenuItemRepository : IMenuItemRepository
    {
        private MenuStoreContext _menuStoreContext;
        private IMapper _mapper;

        public MenuItemRepository(MenuStoreContext menuStoreContext, IMapper mapper) { 
            _menuStoreContext = menuStoreContext;
            _mapper = mapper;
        }
        public async Task<Guid> CreateMenuItem(MenuItemModel model)
        {
            var menuItem = _mapper.Map<MenuItem>(model);
            _menuStoreContext.MenuItems!.Add(menuItem);
            await _menuStoreContext.SaveChangesAsync();
            return menuItem.Id;
        }

        public async Task DeleteMenuItem(Guid id)
        {
            var menuItem = await _menuStoreContext.MenuItems!.FindAsync(id);
            if(menuItem != null)
            {
                _menuStoreContext.MenuItems!.Remove(menuItem);
                await _menuStoreContext.SaveChangesAsync();
            }
        }

        public async Task<List<MenuItemModel>> GetAllMenuItem()
        {
            var Menu = await _menuStoreContext.MenuItems!.ToListAsync();
            return _mapper.Map<List<MenuItemModel>>(Menu);
        }

        public async Task<MenuItemModel> GetMenuItemById(Guid id)
        {
             var menuItem = await _menuStoreContext.MenuItems!.FindAsync(id);
            return _mapper.Map<MenuItemModel>(menuItem);
        }

        public async Task UpdateMenuItem(Guid id, MenuItemModel model)
        {
            if(id == model.Id)
            {
                var menuItem = _mapper.Map<MenuItem>(model);
                _menuStoreContext.MenuItems!.Update(menuItem);
                await _menuStoreContext.SaveChangesAsync();
            }
        }
    }
}
