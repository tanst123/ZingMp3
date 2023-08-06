using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyAPIWebCore6.Data;
using MyAPIWebCore6.Models;
using MyAPIWebCore6.Repositories;

namespace MyAPIWebCore6.Controllers
{
    [Route("[controller]/api/menu")]
    [ApiController]
    public class ZingController : ControllerBase
    {
        private readonly IMenuItemRepository _menuRep;

        public ZingController(IMenuItemRepository menuItemRepository) {
            _menuRep = menuItemRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMenuItem()
        {
            try
            {
                return Ok(await _menuRep.GetAllMenuItem());

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMenuItem(Guid id)
        {
            var menuItem = await _menuRep.GetMenuItemById(id);
            return menuItem == null ? NotFound() : Ok(menuItem);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMenuItem(MenuItemModel model)
        {
            try
            {
                var menuItemId = await _menuRep.CreateMenuItem(model);
                var menuItem = await _menuRep.GetMenuItemById(menuItemId);
                return menuItem == null ? NotFound() : Ok(menuItem);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMenuItem(Guid id, MenuItemModel model)
        {
            if (id == model.Id)
            {
                await _menuRep.UpdateMenuItem(id, model);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenuItem(Guid id)
        {
                await _menuRep.DeleteMenuItem(id);
                return Ok();    
        }

    }
}
