using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace VoyagePoint.Controllers
{
    [Authorize]
    public class FoodController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}