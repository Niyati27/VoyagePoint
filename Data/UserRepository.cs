using System.Data;
using VoyagePoint.Models;

public class UserRepository
{
    private readonly DatabaseHelper _dbHelper = new DatabaseHelper();

    public List<User> GetAllUsers()
    {
        List<User> users = new List<User>();
        string query = "SELECT * FROM Users";

        DataTable table = _dbHelper.ExecuteQuery(query);

        foreach (DataRow row in table.Rows)
        {
            users.Add(new User
            {
                Id = Convert.ToInt32(row["id"]),
                Username = row["Username"].ToString(),
                Password = row["Password"].ToString()
            });
        }

        return users;
    }

    public void AddUser(User user)
    {
        string query = $"INSERT INTO Users (Username, Password) VALUES ('{user.Username}', '{user.Password}')";
        _dbHelper.ExecuteNonQuery(query);
    }
}
