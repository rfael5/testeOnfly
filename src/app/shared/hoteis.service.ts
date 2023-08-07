import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from './hotel';
import { Observable, map, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HoteisService {

  private readonly apiHotel = "http://localhost:3000/banco";
  // private readonly apiPlace = "/assets/place.json";
  dadosHoteis:any;

  totalItems!:number;

  constructor(private http:HttpClient) { }

  listarHoteis():Observable<any>{
    return this.http.get<any>(this.apiHotel).pipe(
      map((dados:any) => {
        return dados[0].bancoHoteis;
      }))
  }

  listarCidades():Observable<any>{
    return this.http.get<any>(this.apiHotel).pipe(
      map((dados:any) => {
        return dados[1].bancoCidades;
      })
    )
  }

  getItems(page=1, itemsPerPage=10):Observable<any[]>{
    const startIndex= (page-1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = [];
    for(let i = startIndex; i < endIndex; i++){
      if(i < this.totalItems){
        items.push(`Item ${i + 1}`);
      }
    }
    return of(items).pipe(delay(500)); 
  }

}
