import { Component, Input, OnInit } from '@angular/core';
import { Amenity } from 'src/app/shared/amenity';
import { Hotel } from 'src/app/shared/hotel';



@Component({
  selector: 'app-detalhes-hotel',
  templateUrl: './detalhes-hotel.component.html',
  styleUrls: ['./detalhes-hotel.component.css']
})
export class DetalhesHotelComponent implements OnInit {

  @Input() detalhesHotel!:Hotel;

  mostrarContador:boolean = true;
  mostrarFacilidades:boolean = false;

  txtBotao:string = "Mostrar todas as facilidades";

  visible = false;


  ngOnInit(): void {}
  
  close(): void {
    this.visible = false;
  }

  parseInt(value: string): number {
    return parseInt(value, 10);
  }

  mostrarOcultarFacilidades(){
    if(this.mostrarFacilidades == false){
      this.mostrarFacilidades = true;
      this.txtBotao = "Ocultar facilidades"
    }else{
      this.mostrarFacilidades = false;
      this.txtBotao = "Mostrar todas as facilidades"
    }

  }

}
