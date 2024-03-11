import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../../../services/json-service.service';
import { Card } from '../../../models/cards.model';
import { Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FichaCardComponent } from "../../../components/ficha-card/ficha-card.component";

@Component({
    selector: 'app-cripta',
    standalone: true,
    templateUrl: './cripta.component.html',
    styleUrl: './cripta.component.scss',
    imports: [AsyncPipe, CommonModule, FichaCardComponent]
})
export class CriptaComponent implements OnInit {
  public cards$!:Observable<Card[]>
  public url: string = '';


  constructor(
    private jsonSvc: JsonServiceService
  ) {}

  setUrlImage(url: string):void {
    this.url = url;
    // console.log(this.url);
  }

  clearUrlImage():void{
    this.url = '';
  }

  filtarTypes(types: string):void {
    this.jsonSvc.getJsonData().subscribe(
      cards => {
        this.cards$ = of(cards.filter(card => (card.types.includes('Vampire')) || (card.types.includes('Imbued'))));
      }
    )
  }

  ngOnInit(): void {
    // this.cards$ = this.jsonSvc.getJsonData();
    // console.log(this.cards$)
    this.filtarTypes('Vampire');
  }
}