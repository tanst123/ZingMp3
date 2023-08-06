using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyAPIWebCore6.Repositories;

namespace MyAPIWebCore6.Controllers
{
    [Route("api/menu/[controller]")]
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

    }
}
