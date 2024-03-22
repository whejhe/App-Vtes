import { Component, Input, OnInit } from '@angular/core';
import { JsonServiceService } from '../../services/json-service.service';
import { Observable, of } from 'rxjs';
import { Card, Type } from '../../models/vtes.model';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [

  ],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.scss'
})
export class DetailsCardComponent implements OnInit{
  
  cardInfo:Card[] = [];
  cardInfo$: Observable<Card[]> = of(this.cardInfo);

  constructor(
    private jsonSvc: JsonServiceService
  ) {}

  ngOnInit(): void {
      this.jsonSvc.getJsonData().subscribe(data => {
        this.cardInfo = data;
      })
  }

}
