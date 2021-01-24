import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-inv',
  templateUrl: './show-inv.component.html',
  styleUrls: ['./show-inv.component.css']
})
export class ShowInvComponent implements OnInit {

  constructor(private service: SharedService) { }

  inventariolista:any=[];
   ModalTitle:string;
   ActivateAddEditInvComponent:boolean=false;
   inv:any;

  ngOnInit(): void {
    //ng on init es el primer metodo qe se ejecuta cuando este componente esta dentro del alcance
    this.refreshInventariolista();
  }
//funciones del modal, botones

addClick(){
  this.inv={
    AutosId:0,
    NombreAuto:"",
    NumeroEconomico:"",
    MarcaAuto:"",
    ModeloAuto:"",
    PlacaFederal:"",
    AnoOperacion:""

  }
  this.ModalTitle="Agregar Auto";
  this.ActivateAddEditInvComponent=true;

}

editClick(item){

// this.inv=item;
// this.ModalTitle="Editar Registro";
// this.ActivateAddEditInvComponent=true;
// console.log(item);
    this.inv=item;
    this.ModalTitle="Editar Registro";
    this.ActivateAddEditInvComponent=true;
}

  deleteClick(item){
    if(confirm('Estas seguro de eliminar este registro??')){
      this.service.deleteInventario(item.AutosId).subscribe(data=>{
        alert(data.toString());
 this.refreshInventariolista();      })
    }
  }

  closeClick(){
    this.ActivateAddEditInvComponent=false;
    //y para que refresque la lista en caso de ingresar uno nuevo
    this.refreshInventariolista();
  }
  //metodo para actualizar la variavble de la lista de inventario desde metodo api
  refreshinvlista(){
    this.service.getInventariolista().subscribe(data=> {
      this.inventariolista=data;
      this.ActivateAddEditInvComponent=true;
    });
  }
 refreshInventariolista(){
    this.service.getInventariolista().subscribe(data=>{
      this.inventariolista=data;
    });
  }
}
