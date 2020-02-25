using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Tarea01.Controllers
{
    public class LeyController : Controller
    {
        // GET: Ley
        public ActionResult OpcionesGenerales()
        {
            return View();
        }

        public ActionResult Formulario()
        {
            return View();
        }

        public ActionResult ResultFormulario()
        {
            return View();
        }

        public ActionResult Noticias()
        {
            return View();
        }

        public ActionResult Musica()
        {
            return View();
        }
        public ActionResult Peliculas()
        {
            return View();
        }
        public ActionResult AcercaDe()
        {
            return View();
        }
    }
}