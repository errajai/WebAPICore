using System.Collections.Generic;
namespace WebAPICore.Models
{
    public class Nextone
    {
        public int NextoneId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int ExpYears { get; set; }
        public string UrlImage { get; set; }
        public ICollection<Mission> Missions { get; set; }
    }
}
