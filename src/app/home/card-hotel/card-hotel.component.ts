import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Hotel } from 'src/app/shared/hotel';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.css']
})
export class CardHotelComponent implements OnInit, OnChanges {

  //Atributos infinite-scroll
  throttle = 300;
  distance = 1;

  //Atributos Drawer
  visible = false;
  size: 'large' | 'default' = 'default';
  
  @Input() listaHoteis!:Hotel[];
  cardsHoteis:Hotel[] = []
  
  detalhesHotel!:Hotel;

  mostrarContador:boolean = false;

  itensPorPagina:number = 10;
  paginaAtual:number = 1
  
  
  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['listaHoteis']){
      this.resetarCardHoteis();
      this.adicionarCards(this.paginaAtual, this.itensPorPagina)
      this.detalhesHotel = this.listaHoteis[0]
    }
  }  

  ngOnInit():void {

  }

  carregarMaisCards(){
    const startIndex = (this.paginaAtual - 1) * this.itensPorPagina;
    const endIndex = startIndex + this.itensPorPagina;
    this.cardsHoteis = this.listaHoteis?.slice(startIndex, endIndex);
    this.paginaAtual++; 
  }

  adicionarCards(page:number, itemsPerPage:number){
    if(this.cardsHoteis.length > 0){
      const startIndex= (page-1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      for(let i = startIndex; i < endIndex; i++){
        if(i < this.listaHoteis.length){
          if(this.listaHoteis[i]){
            this.cardsHoteis.push(this.listaHoteis[i]);
          }
        }
      }
    }else {
      this.loadData();
    }
  }

  resetarCardHoteis(){
    this.paginaAtual = 1;
    this.itensPorPagina = 10
    this.cardsHoteis = []
  }

  loadData = () => {
    let total = 10;
    if(this.listaHoteis.length < 10){
      total = this.listaHoteis.length;
    }
    this.cardsHoteis = this.listaHoteis.slice(0,total);
  }

  parseInt(value: string): number {
    return parseInt(value, 10);
  }

  appendData = () => {
    this.adicionarCards(this.paginaAtual, this.itensPorPagina);
  }

  onScroll = () => {
    this.paginaAtual ++;
    this.appendData();
  }

  //Métodos Drawer

  showLarge(hotel:Hotel): void {
    this.size = 'large';
    this.detalhesHotel = hotel;
    this.open();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
