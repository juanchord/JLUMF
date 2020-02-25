using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Tarea01.Models
{
    public class Persona
    {
         
        [Required(ErrorMessage = "La cédula es Obligatoria")]
        public string Cedula { get; set; }
        [Required(ErrorMessage = "El nombre es Obligatorio")]
        public string Nombre { get; set; }
        [Required(ErrorMessage = "El apellido es Obligatorio")]
        public string Apellido { get; set; }
        [Range(15, 100, ErrorMessage = "Debes ser mayor a 15 años")]
        public string Edad { get; set; }
        public string Telefono { get; set; }
        [Required(ErrorMessage = "Correo es Requerido")]
        [DataType(DataType.EmailAddress)]
        [MaxLength(50)]
        [RegularExpression(@"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}", ErrorMessage = "Formato Incorrecto")]
        public string CorreoElectronico { get; set; }
        public Puestoo Puesto { get; set; }
        public string Genero { get; set; }
    }

    public enum Puestoo
    {
        Gerente, SubGerente, Asistente, Colaborador, Temporero
    }


}

