import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FiltroLibraryComponent } from '../../../../components/filtro-library/filtro-library.component';
import { Card, Type } from '../../../../models/vtes.model';
import { JsonServiceService } from '../../../../services/json-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsCardLibraryComponent } from '../../../../components/details-card-library/details-card-library.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-biblioteca',
    standalone: true,
    templateUrl: './biblioteca.component.html',
    styleUrl: './biblioteca.component.scss',
    imports: [
      AsyncPipe,
      CommonModule,
      FiltroLibraryComponent,
      FormsModule
    ]
})
export class BibliotecaComponent implements OnInit {

  public cards$!:Observable<Card[]>
  public url: string = '';


  constructor(
    private jsonSvc: JsonServiceService,
    public dialog: MatDialog
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

  openModal(card:Card):void{
    this.dialog.open(DetailsCardLibraryComponent, {
      data: {card}
    });
  }


  ngOnInit(): void {
    // this.cards$ = this.jsonSvc.getJsonData();
    this.filtarTypes('Vampire', 'Imbued');
    console.log(this.cards$)

  }
}
