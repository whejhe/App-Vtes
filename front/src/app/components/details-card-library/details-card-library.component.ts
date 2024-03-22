import { Component } from '@angular/core';
import { Card } from '../../models/vtes.model';
import { Observable, of } from 'rxjs';
import { JsonServiceService } from '../../services/json-service.service';

@Component({
  selector: 'app-details-card-library',
  standalone: true,
  imports: [],
  templateUrl: './details-card-library.component.html',
  styleUrl: './details-card-library.component.scss'
})
export class DetailsCardLibraryComponent {
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