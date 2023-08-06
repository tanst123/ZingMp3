using System.ComponentModel.DataAnnotations;

namespace MyAPIWebCore6.Models
{
    public class MenuItemModel
    {
        [Key]
        public Guid Id { get; set; }
        [Range(1, 50)]
        public int Key { get; set; }
        [MaxLength(100)]
        public string? label { get; set; }
        public List<MenuItemModel>? children { get; set; }
        [MaxLength(30)]
        public string? icon { get; set; }
        [MaxLength(20)]
        public string? type { get; set; }
    }
}
