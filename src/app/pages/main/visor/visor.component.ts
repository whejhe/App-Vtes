import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../../models/cards.model';
import { JsonServiceService } from '../../../services/json-service.service';

@Component({
  selector: 'app-visor',
  standalone: true,
  imports: [AsyncPipe,CommonModule],
  templateUrl: './visor.component.html',
  styleUrl: './visor.component.scss'
})
export class VisorComponent implements OnInit {
  public cards$!:Observable<Card[]>
  public url: string = '';
  public loadedCards: Card[] = [];
  public numCard = 20;
  public totalCardsLoaded = 0;

  constructor(
    private jsonSvc: JsonServiceService
  ){}

  getImage(url: string):void{
    this.url = url;
  }

  loadMoreItems(): void {
    this.totalCardsLoaded += this.numCard;
    this.cards$ = this.jsonSvc.getJsonData();
    console.log(this.totalCardsLoaded);
  }

  ngOnInit():void{
    this.cards$ = this.jsonSvc.getJsonData();
    this.cards$.subscribe((data) => {

    });
  }
}


