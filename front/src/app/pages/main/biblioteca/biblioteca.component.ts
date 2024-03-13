import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../../../services/json-service.service';
import { Card, Type } from '../../../models/vtes.model';
import { Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";

@Component({
    selector: 'app-biblioteca',
    standalone: true,
    templateUrl: './biblioteca.component.html',
    styleUrl: './biblioteca.component.scss',
    imports: [AsyncPipe, CommonModule, SideBarComponent]
})
export class BibliotecaComponent implements OnInit {

  public cards$!:Observable<Card[]>
  public url: string = '';


  constructor(
    private jsonSvc: JsonServiceService
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


  ngOnInit(): void {
    // this.cards$ = this.jsonSvc.getJsonData();
    this.filtarTypes('Vampire', 'Imbued');
    console.log(this.cards$)

  }
}
