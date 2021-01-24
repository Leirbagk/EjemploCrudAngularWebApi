using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using webApiInventario.Models;

//hacemos inyecion de la dependencia para hacer acciones en la api inventario
namespace webApiInventario.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventarioController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public InventarioController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //agregamos metodo a la api para obtener todos los detalles de la tbla inventario

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select AutosId, NombreAuto, NumeroEconomico, MarcaAuto,ModeloAuto, PlacaFederal, 
                convert(varchar(10), AnoOperacion,120) as AnoOperacion from dbo.autos";
            DataTable table = new DataTable();
            //se define una variable para almacenar la cadena de conexion de la bd
            string sqlDataSource = _configuration.GetConnectionString("InventarioAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            //devuelve la tabla como resultado json
            return new JsonResult(table);
        }
        //metodo post para insertar datos despues de verificarlo en el postman
        [HttpPost]
        public JsonResult Post(Inventario inv)
        {
            string query = @"
                insert into dbo.autos 
                (NombreAuto,NumeroEconomico,MarcaAuto,ModeloAuto,PlacaFederal,AnoOperacion)
                    values 
                        (
                            '"+inv.NombreAuto+ @"',
                            '" + inv.NumeroEconomico + @"',
                            '" + inv.MarcaAuto + @"',
                            '" + inv.ModeloAuto + @"',
                            '" + inv.PlacaFederal + @"',
                            '" + inv.AnoOperacion + @"'
                        )";

            DataTable table = new DataTable();
            //se define una variable para almacenar la cadena de conexion de la bd
            string sqlDataSource = _configuration.GetConnectionString("InventarioAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("AGREGADO CORRECTAMENTE");
        }


        //metodo put para actulizar datos despues de verificarlo en el postman
        [HttpPut]
        public JsonResult Put(Inventario inv)
        {
            string query = @"
                update dbo.autos set
                NombreAuto = '" + inv.NombreAuto + @"',
                NumeroEconomico= '" + inv.NumeroEconomico + @"',
                MarcaAuto= '" + inv.MarcaAuto + @"',
                ModeloAuto= '" + inv.ModeloAuto + @"',
                PlacaFederal= '" + inv.PlacaFederal + @"',
                AnoOperacion= '" + inv.AnoOperacion + @"'
          
                where AutosId = " + inv.AutosId + @"";  


            DataTable table = new DataTable();
            //se define una variable para almacenar la cadena de conexion de la bd
            string sqlDataSource = _configuration.GetConnectionString("InventarioAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("actualizado CORRECTAMENTE");
        }
        //metodo delete para eliminar datos despues de verificarlo en el postman
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                delete from  dbo.autos
                  where AutosId = "+ id + @"";
            DataTable table = new DataTable();
            //se define una variable para almacenar la cadena de conexion de la bd
            string sqlDataSource = _configuration.GetConnectionString("InventarioAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Eliminado CORRECTAMENTE");
        }

    }
}
