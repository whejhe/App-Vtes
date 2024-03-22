import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Card, Type } from '../../../../models/vtes.model';
import { JsonServiceService } from '../../../../services/json-service.service';
import { FiltradoPipe } from '../../../../pipes/filtrado.pipe';

@Component({
    selector: 'app-biblioteca',
    standalone: true,
    templateUrl: './biblioteca.component.html',
    styleUrl: './biblioteca.component.scss',
    imports: [
      AsyncPipe,
      CommonModule,
    ]
})
export class BibliotecaComponent implements OnInit {

  public cards$!:Observable<Card[]>
  public url: string = '';
  filtro: string = '';

  filtrar(filtro: string){
    this.filtro = filtro;
  }


  constructor(
    private jsonSvc: JsonServiceService,
  ) {}

  setUrlImage(url: string):void {
    this.url = url;
    // console.log(this.url);
  }

  clearUrlImage():void{
    this.url = '';
  }

  filtarTypes(types: string, types2: string):void {
    this.jsonSvc.getJsonData().subscribe(
      cards => {
        this.cards$ = of(cards.filter(card => !(card.types.includes(Type.Vampire)) && !(card.types.includes(Type.Imbued))));
      }
    )
  }


  ngOnInit(): void {
    // this.cards$ = this.jsonSvc.getJsonData();
    this.filtarTypes('Vampire', 'Imbued');
    console.log(this.cards$)

  }
}
