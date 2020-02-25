using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using ExcelDataReader;
using System.Data;

namespace Tarea01.Controllers
{
    public class JuanchoController : Controller
    {
        // GET: Juancho
        public ActionResult Conversor()
        {
            return View();
        }

        public ActionResult CargaExcel()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult CargaExcel(HttpPostedFileBase carga)
        {
            if (ModelState.IsValid)
            {

                if (carga != null && carga.ContentLength > 0)
                {
                    Stream stream = carga.InputStream;
                    IExcelDataReader reader = null;

                    if (carga.FileName.EndsWith(".xls"))
                    {
                        reader = ExcelReaderFactory.CreateBinaryReader(stream);
                    }
                    else if (carga.FileName.EndsWith(".xlsx"))
                    {
                        reader = ExcelReaderFactory.CreateOpenXmlReader(stream);
                    }
                    else
                    {
                        ModelState.AddModelError("File", "This file format is not supported");
                        return View();
                    }

                    DataSet result = reader.AsDataSet();
                    reader.Close();

                    return View(result.Tables[0]);
                }
                else
                {
                    ModelState.AddModelError("File", "Please Upload Your file");
                }
            }
            return View();
        }

    }
}