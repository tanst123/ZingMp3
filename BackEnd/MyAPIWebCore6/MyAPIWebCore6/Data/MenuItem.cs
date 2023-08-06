using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyAPIWebCore6.Data
{
    [Table("Menu")]
    public class MenuItem
    {
        [Key]
        public Guid Id { get; set; }
        [Range(1, 50)]
        public int Key { get; set; }
        [MaxLength(100)]
        public string? label { get; set; }
        public List<MenuItem>? children { get; set; }
        [MaxLength(30)]
        public string? icon { get; set; }
        [MaxLength(20)]
        public string? type { get; set; }

    }
}
