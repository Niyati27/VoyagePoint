
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using VoyagePoint.Models;


namespace VoyagePoint.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserRepository _userRepository = new UserRepository();

        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Register(User model)
        {
            List<User> usersDb = _userRepository.GetAllUsers();

            if (usersDb.Any(u => u.Username == model.Username))
            {
                ModelState.AddModelError("Username", "Username already exists.");
                return View(model);
            }

            model.Id = usersDb.Count + 1; // Simple ID generation
            usersDb.Add(model);
            _userRepository.AddUser(model);
            return RedirectToAction("Login"); // Redirect to login after registration
        }

        public ActionResult Login()
        {
            return View();
        }

       
        [Authorize]
        public ActionResult ProtectedAction()
        {
            return View();
        }



        [HttpPost]
        public async Task<IActionResult> Login(User model, string returnUrl)
        {
            List<User> usersDb = _userRepository.GetAllUsers();
            var user = usersDb.FirstOrDefault(u => u.Username == model.Username && u.Password == model.Password); // Again, hash passwords!

            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, model.Username)
                };

                var claimsIdentity = new ClaimsIdentity(
                    claims, CookieAuthenticationDefaults.AuthenticationScheme);

                var authProperties = new AuthenticationProperties
                {
                    // You can add properties like IsPersistent here
                };
                await HttpContext.SignInAsync(
                    CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(claimsIdentity),
                    authProperties);

                if (Url.IsLocalUrl(returnUrl) && returnUrl.Length > 1 && returnUrl.StartsWith("/")
                    && !returnUrl.StartsWith("//") && !returnUrl.StartsWith("/\\"))
                {
                    return Redirect(returnUrl);
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            else
            {
                ModelState.AddModelError("", "Invalid username or password.");
            }
            return View(model);
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Index", "Home");
        }

    }
}

