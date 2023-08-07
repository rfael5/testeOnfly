import { Component, OnInit } from '@angular/core';
import { HoteisService } from '../shared/hoteis.service';
import { Hotel } from '../shared/hotel';
import { Place } from '../shared/place';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hoteis!:any[];
  cidades!:any[];
  cardsPorPagina: any[] = [];
  options: any[] = [];

  arrayHoteis:Hotel[] = [];

  selectedValue!:Place;

  ordemLista:string = "melhor-avaliados";
  nomeHotel!:string;
  txtBtnPesquisa: string = "Buscar";

  loading:boolean = false;

  constructor(private hoteisService:HoteisService) {}

  ngOnInit():void {
    this.buscarHoteisCidades();
  }

  buscarHoteisCidades(){
    this.loading = true;
    this.hoteisService.listarHoteis().subscribe((dados:Hotel[]) => {
      this.hoteis = dados;
      this.ordenarLista();

    }).add(() => this.loading = false);

    this.hoteisService.listarCidades().subscribe((dados:Place[]) => {
      this.cidades = dados;
      this.options = this.cidades;
    })
  }

  selecionarCidade(){
    this.loading = true;
    this.hoteisService.listarHoteis().subscribe(
      (dados:any) => {
        this.hoteis = []
        let dadosFiltrados = dados.filter((hotel:any) => hotel.placeId == this.selectedValue.placeId);
        this.hoteis = dadosFiltrados;
        this.ordenarLista();
        this.txtBtnPesquisa = "Alterar Busca";
      }).add(() => this.loading = false);
  }

  filtrarPorNomeHotel(){
    let dadosFiltrados = this.arrayHoteis.filter((hotel) => hotel.name.includes(this.nomeHotel));
    console.log(dadosFiltrados);
    this.arrayHoteis = dadosFiltrados;
    
    // this.hoteis.map((dados:any) => {
    //   console.log(dados.hotels);
    //   dados.hotels.map((hotel:Hotel) => {
    //     if(hotel.name.includes(nomeHotel) =)
    //   })
    // })
  }

  formatarOptionsLabel(option:any){
    let nome = ""
    if (option === this.selectedValue){
      nome = `${option.name}, ${option.state.shortname}`
    } else{
      nome = `${option.name}, ${option.state.name}`
    }
    return nome
  }

  ordenarLista(){
    this.arrayHoteis = [];
    if(this.ordemLista == 'recomendados'){
      this.hoteis.forEach((dados:any) => {
        dados.hotels.sort((a:any, b:any) => a.id - b.id);
      })
    }else{
      this.hoteis.forEach((dados:any) => {
        dados.hotels.sort((a:any, b:any) => parseInt(b.stars) - parseInt(a.stars));
      })
    }

    this.hoteis.map((listaHoteis:any) => {
      listaHoteis.hotels.map((hotel:Hotel) => {
        this.arrayHoteis.push(hotel);
      })
    });
  }
  
}
