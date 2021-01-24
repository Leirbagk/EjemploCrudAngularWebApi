import { Component, OnInit , Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-inv',
  templateUrl: './add-edit-inv.component.html',
  styleUrls: ['./add-edit-inv.component.css']
})
export class AddEditInvComponent implements OnInit {

  constructor( private service:SharedService) { }
      @Input()inv:any;
      AutosId:string;
      NombreAuto:string;
      NumeroEconomico:string;
      MarcaAuto:string;
      ModeloAuto:string;
      PlacaFederal:string;
      AnoOperacion:string;



  ngOnInit(): void {
        this.AutosId=this.inv.AutosId;
        this.NombreAuto=this.inv.NombreAuto;
        this.NumeroEconomico=this.inv.NumeroEconomico;
        this.MarcaAuto=this.inv.MarcaAuto;
        this.ModeloAuto=this.inv.ModeloAuto;
        this.PlacaFederal=this.inv.PlacaFederal;
        this.AnoOperacion=this.inv.AnoOperacion;


  }
  addInventario(){
var val={AutosId:this.AutosId,
        NombreAuto:this.NombreAuto,
        NumeroEconomico:this.NumeroEconomico,
        MarcaAuto:this.MarcaAuto,
        ModeloAuto:this.ModeloAuto,
        PlacaFederal:this.PlacaFederal,
        AnoOperacion:this.AnoOperacion

  };
      this.service.addInventario(val).subscribe(resp=>{
        alert(resp.toString());
      });

  }

  updateInventario(){
    var val={AutosId:this.AutosId,
        NombreAuto:this.NombreAuto,
        NumeroEconomico:this.NumeroEconomico,
        MarcaAuto:this.MarcaAuto,
        ModeloAuto:this.ModeloAuto,
        PlacaFederal:this.PlacaFederal,
        AnoOperacion:this.AnoOperacion};

      this.service.updateInventario(val).subscribe(resp=>{
        alert(resp.toString());
      });

  }

}
