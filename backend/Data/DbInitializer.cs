using backend.Models;

namespace backend.Data;
    public static class DbInitializer
{
    public static void Seed(AppDbContext context)
    {
        {
            if (context.Users.Any())
                return; // Database has been seeded

            var users = new List<User>
           {
                new User { Name = "Leonardo", Email = "leo@turtles.com" },
                new User { Name = "Donatello", Email = "don@turtles.com" },
                new User { Name = "Raphael", Email = "raph@turtles.com" },
                new User { Name = "Michelangelo", Email = "mike@turtles.com" }
            };
                
            context.Users.AddRange(users);
            context.SaveChanges();
            }
        }
    }
