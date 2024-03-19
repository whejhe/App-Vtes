import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FichaCardComponent } from '../../../../components/ficha-card/ficha-card.component';
import { FiltroCryptComponent } from '../../../../components/filtro-crypt/filtro-crypt.component';
import { Card, Type } from '../../../../models/vtes.model';
import { JsonServiceService } from '../../../../services/json-service.service';
import { DetailsCardComponent } from '../../../../components/details-card/details-card.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-cripta',
    standalone: true,
    templateUrl: './cripta.component.html',
    styleUrl: './cripta.component.scss',
    imports: [
      AsyncPipe,
      CommonModule,
      FichaCardComponent,
      FiltroCryptComponent,
      DetailsCardComponent
    ]
})
export class CriptaComponent implements OnInit {
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

  filtarTypes(types: string):void {
    this.jsonSvc.getJsonData().subscribe(
      cards => {
        this.cards$ = of(cards.filter(card =>
          (card.types.includes(Type.Vampire)) || (card.types.includes(Type.Imbued))));
      }
    )
  }

  openModal(){
    this.dialog.open(DetailsCardComponent);
  }

  ngOnInit(): void {
    // this.cards$ = this.jsonSvc.getJsonData();
    // console.log(this.cards$)
    this.filtarTypes('Vampire');
  }
}
