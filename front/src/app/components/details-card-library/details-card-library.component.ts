import { Component, Inject } from '@angular/core';
import { Card } from '../../models/vtes.model';
import { Observable, of } from 'rxjs';
import { JsonServiceService } from '../../services/json-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-card-library',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './details-card-library.component.html',
  styleUrl: './details-card-library.component.scss'
})
export class DetailsCardLibraryComponent {

  constructor(
    private jsonSvc: JsonServiceService,
    @Inject(MAT_DIALOG_DATA) public data: {card: Card},
    public dialogRef: MatDialogRef<DetailsCardLibraryComponent>
  ) {}

  ngOnInit(): void {
      this.jsonSvc.getJsonData().subscribe(data => {
      })
  }

  closeModal():void{
    this.dialogRef.close();
  }

}
