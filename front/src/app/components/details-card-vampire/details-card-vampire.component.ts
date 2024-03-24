import { Component, Inject, OnInit } from '@angular/core';
import { Card } from '../../models/vtes.model';
import { Observable, of } from 'rxjs';
import { JsonServiceService } from '../../services/json-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-card-vampire',
  standalone: true,
  imports: [],
  templateUrl: './details-card-vampire.component.html',
  styleUrl: './details-card-vampire.component.scss'
})
export class DetailsCardVampireComponent implements OnInit{


  constructor(
    private jsonSvc: JsonServiceService,
    @Inject(MAT_DIALOG_DATA) public data: {card: Card}

  ) {}

  ngOnInit(): void {
      this.jsonSvc.getJsonData().subscribe(data => {
      })
  }

}
