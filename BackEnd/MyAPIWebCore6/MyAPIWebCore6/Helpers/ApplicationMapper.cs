using AutoMapper;
using MyAPIWebCore6.Data;
using MyAPIWebCore6.Models;

namespace MyAPIWebCore6.Helpers
{
    public class ApplicationMapper : Profile
    {
        public ApplicationMapper() {
            CreateMap<MenuItem, MenuItemModel>().ReverseMap();
        }
    }
}
