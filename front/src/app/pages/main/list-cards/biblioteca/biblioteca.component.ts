//src/app/pages/main/list-cards/biblioteca/biblioteca.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule, NgOptimizedImage } from '@angular/common';
import { FiltroLibraryComponent } from '../../../../components/filtro-library/filtro-library.component';
import { Card, Clan, Type } from '../../../../models/vtes.model';
import { JsonServiceService } from '../../../../services/json-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsCardLibraryComponent } from '../../../../components/details-card-library/details-card-library.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../../pipes/filter.pipe';
import { FilterByNamePipe } from '../../../../pipes/filter-by-name.pipe';
import { ImageStoreService } from '../../../../services/image-store.service';
import { IconService } from '../../../../services/icon.service';
import { __values } from 'tslib';
// import { InfiniteScrollPipe } from '../../../../pipes/infinite-scroll.pipe';

@Component({
    selector: 'app-biblioteca',
    standalone: true,
    templateUrl: './biblioteca.component.html',
    styleUrl: './biblioteca.component.scss',
    imports: [
      AsyncPipe,
      CommonModule,
      FiltroLibraryComponent,
      FormsModule,
      FilterPipe,
      FilterByNamePipe,
      // InfiniteScrollPipe
    ]
  })
export class BibliotecaComponent implements OnInit {

  public cards!: Card[];
  public types = Object.values(Type);
  public url: string = '';
  public clans = Object.values(Clan);

  public filter!: string;
  public searchName:string = '';
  public searchType!: string;
  public searchClan!: string;
  imageStyles!: { width: string; height: string; };


  constructor(
    private jsonSvc: JsonServiceService,
    public dialog: MatDialog,
    private iconSvc: IconService
  ) {}


  setUrlImage(url: string):void {
    this.url = url;
  }

  clearUrlImage():void{
    this.url = '';
  }


  openModal(card:Card):void{
    this.dialog.open(DetailsCardLibraryComponent, {
      data: {card}
    });
  }

  // getIcons(url:string){
  //   const bloodCostImage = this.iconSvc.getBloodCostImage(this.url);
  //   const poolCostImage = this.iconSvc.getPoolCostImage(this.url);
  //   return {bloodCostImage, poolCostImage};
  // }


  getBloodCostImage(bloodCost: string | undefined): string {
    switch (bloodCost) {
      case '1':
        return 'assets/img/icons-vtes/others/costBlood-1.png';
      case '2':
        return 'assets/img/icons-vtes/others/costBlood-2.png';
      case '3':
        return 'assets/img/icons-vtes/others/costBlood-3.png';
      case '4':
        return 'assets/img/icons-vtes/others/costBlood-4.png';
      default:
        return '';
    }
  }

  getPoolCostImage(poolCost: string | undefined): string {
    switch (poolCost) {
      case '1':
        return 'https://static.krcg.org/svg/icon/pool1.svg';
      case '2':
        return 'https://static.krcg.org/svg/icon/pool2.svg';
      case '3':
        return 'https://static.krcg.org/svg/icon/pool3.svg';
      case '4':
        return 'https://static.krcg.org/svg/icon/pool4.svg';
      case '5':
        return 'https://static.krcg.org/svg/icon/pool5.svg';
      case '6':
          return 'https://static.krcg.org/svg/icon/pool6.svg';
      default:
        return '';
    }
  }

  ngOnInit(): void {
    this.jsonSvc.getJsonData().subscribe((cards) => {
      this.cards = cards;
    });
    // console.log(this.getPoolCostImage)
    // console.log(this.getBloodCostImage)
  }
}
