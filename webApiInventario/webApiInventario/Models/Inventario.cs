using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webApiInventario.Models
{
    public class Inventario
    {
        public int AutosId { get; set; }
        public string NombreAuto { get; set; }
        public string NumeroEconomico { get; set; }
        public string MarcaAuto { get; set; }
        public string ModeloAuto { get; set; }
        public string PlacaFederal { get; set; }
        public string  AnoOperacion { get; set;}

    }
}
