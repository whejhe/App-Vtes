import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/vtes.model';
import { Observable, of } from 'rxjs';
import { JsonServiceService } from '../../services/json-service.service';

@Component({
  selector: 'app-details-card-vampire',
  standalone: true,
  imports: [],
  templateUrl: './details-card-vampire.component.html',
  styleUrl: './details-card-vampire.component.scss'
})
export class DetailsCardVampireComponent implements OnInit{
  
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
