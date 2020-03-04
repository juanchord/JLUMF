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
        [HttpPost]
        public ActionResult Formulario(Persona estudi, HttpPostedFileBase[] Files)
        {
            if (ModelState.IsValid)
            {
                List<string> routes = new List<string>();
                foreach (HttpPostedFileBase img in Files)
                {
                    string nombreFoto = img.FileName;
                    routes.Add("/Fotoss/" + nombreFoto);
                    img.SaveAs(Server.MapPath(routes.Last()));
                }


                ViewBag.Files = routes;

                return View("ResultFormulario", estudi);
            }
            else
            {
                return View("Formulario");
            }
        }


        public ActionResult ResultFormulario(Persona estudi)
        {
            return View(estudi);

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
        public ActionResult DownloadCV(string route)
        {
            return File(route, MimeMapping.GetMimeMapping(route));
        }
    }
}
