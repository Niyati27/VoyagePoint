using System;
using System.ComponentModel.DataAnnotations;

namespace VoyagePoint.Models
{
	public class User
	{
        public int Id { get; set; }
        [Required(ErrorMessage = "Username is required.")]
        public required string Username { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        public required string Password { get; set; }

    }
}