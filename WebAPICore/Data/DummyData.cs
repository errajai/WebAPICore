using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using WebAPICore.Models;

namespace WebAPICore.Data
{
    public class DummyData
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<NextonContext>();
                context.Database.EnsureCreated();

                if (context.Missions != null && context.Missions.Any())
                    return;

                var missions = GetMissions().ToArray();
                context.Missions?.AddRange(missions);
                context.SaveChanges();

                var nextones = GetNextones(context).ToArray();
                context.Nextones?.AddRange(nextones);
                context.SaveChanges();
            }
        }
        public static List<Mission> GetMissions()
        {
            List<Mission> missions = new List<Mission>()
            {
                new Mission {Client = "Canal+"},
                new Mission {Client = "SUEZ"},
                new Mission {Client = "Orange"}
            };

            return missions;
        }

        public static List<Nextone> GetNextones(NextonContext db)
        {
            List<Nextone> nextones = new List<Nextone>()
            {
                new Nextone {
                    FirstName = "Mouhssine",
                    ExpYears = 3,
                    LastName = "ERRAJAI",
                    UrlImage = "",
                    Missions = new List<Mission>(db.Missions.Take(1))
                },

                new Nextone {
                    FirstName = "Ame",
                    ExpYears = 2,
                    LastName = "AG",
                    UrlImage = "",
                    Missions = new List<Mission>(db.Missions.Skip(2).Take(1))
                },

                new Nextone {
                    FirstName = "Ousama",
                    ExpYears = 3,
                    LastName = "Belatar",
                    UrlImage = "",
                    Missions = new List<Mission>(db.Missions.Take(1))
                },
            };

            return nextones;
        }
    }
}
