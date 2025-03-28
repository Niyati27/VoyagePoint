using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace VoyagePoint.Controllers
{
    [Authorize]
    public class MasterController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}