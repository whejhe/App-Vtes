import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FiltroCryptComponent } from '../../../../components/filtro-crypt/filtro-crypt.component';
import { Card, Type } from '../../../../models/vtes.model';
import { JsonServiceService } from '../../../../services/json-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsCardVampireComponent } from '../../../../components/details-card-vampire/details-card-vampire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from "../../../../pipes/filter.pipe";

@Component({
    selector: 'app-cripta',
    standalone: true,
    templateUrl: './cripta.component.html',
    styleUrl: './cripta.component.scss',
    imports: [
        AsyncPipe,
        CommonModule,
        FiltroCryptComponent,
        FormsModule,
        FilterPipe
    ]
})
export class CriptaComponent implements OnInit {
  // public cards!: Observable<Card[]>;
  public cards!: Card[];
  public url: string = '';

  public filter!: string;
  searchName = '';

  constructor(private jsonSvc: JsonServiceService, public dialog: MatDialog) {}

  setUrlImage(url: string): void {
    this.url = url;
  }

  clearUrlImage(): void {
    this.url = '';
  }

  // filtarTypes(types: string): void {
  //   this.jsonSvc.getJsonData().subscribe((cards) => {
  //     this.cards = of(
  //       cards.filter(
  //         (card) =>
  //           card.types.includes(Type.Vampire) ||
  //           card.types.includes(Type.Imbued)
  //       )
  //     );
  //   });
  // }

  openModal(card: Card): void {
    this.dialog.open(DetailsCardVampireComponent, {
      data: { card },
    });
  }

  ngOnInit(): void {
    // this.filtarTypes('Vampire');
    this.jsonSvc.getJsonData().subscribe((cards) => {
      this.cards = cards;
    });
  }


}
