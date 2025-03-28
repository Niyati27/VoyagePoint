using MySql.Data.MySqlClient;
using System.Data;

public class DatabaseHelper
{
    private readonly string _connectionString = "Server=localhost;Database=Database_Name;User=root;Password=;";

    public MySqlConnection GetConnection()
    {
        return new MySqlConnection(_connectionString);
    }

    public DataTable ExecuteQuery(string query)
    {
        using (var connection = GetConnection())
        {
            connection.Open();
            using (var command = new MySqlCommand(query, connection))
            {
                using (var adapter = new MySqlDataAdapter(command))
                {
                    DataTable dataTable = new DataTable();
                    adapter.Fill(dataTable);
                    return dataTable;
                }
            }
        }
    }

    public int ExecuteNonQuery(string query)
    {
        using (var connection = GetConnection())
        {
            connection.Open();
            using (var command = new MySqlCommand(query, connection))
            {
                return command.ExecuteNonQuery();
            }
        }
    }
}
