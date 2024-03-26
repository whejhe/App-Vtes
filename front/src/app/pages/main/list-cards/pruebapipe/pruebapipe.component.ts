import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card, Type } from '../../../../models/vtes.model';
import { JsonServiceService } from '../../../../services/json-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsCardVampireComponent } from '../../../../components/details-card-vampire/details-card-vampire.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FiltroCryptComponent } from '../../../../components/filtro-crypt/filtro-crypt.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../../pipes/filter.pipe';
import { FilterByNamePipe } from "../../../../pipes/filter-by-name.pipe";

@Component({
    selector: 'app-pruebapipe',
    standalone: true,
    templateUrl: './pruebapipe.component.html',
    styleUrl: './pruebapipe.component.scss',
    imports: [
        CommonModule,
        AsyncPipe,
        FiltroCryptComponent,
        FormsModule,
        FilterPipe,
        FilterByNamePipe
    ]
})
export class PruebapipeComponent {
  // public cards!: Observable<Card[]>;
  public cards!: Card[];
  public url: string = '';

  public filter!: string;
  public searchName:string = '';

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
