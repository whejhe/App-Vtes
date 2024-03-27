import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FiltroCryptComponent } from '../../../../components/filtro-crypt/filtro-crypt.component';
import { Card, Clan, Type } from '../../../../models/vtes.model';
import { JsonServiceService } from '../../../../services/json-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsCardVampireComponent } from '../../../../components/details-card-vampire/details-card-vampire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../../../../pipes/filter.pipe';
import { FilterByNamePipe } from '../../../../pipes/filter-by-name.pipe';
import { FilterByGroupPipe } from '../../../../pipes/filter-by-group.pipe';
import { FilterByClanPipe } from '../../../../pipes/filter-by-clan.pipe';

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
    FilterPipe,
    FilterByNamePipe,
    FilterByGroupPipe,
    FilterByClanPipe,
  ],
})
export class CriptaComponent implements OnInit {
  // public cards!: Observable<Card[]>;
  public cards!: Card[];
  public clans = Object.values(Clan);
  public url: string = '';
  public clan = '';

  public filter!: string;
  public searchName: string = '';
  public searchGroup: string = '';
  public searchClan: string = '';

  constructor(private jsonSvc: JsonServiceService, public dialog: MatDialog) {}

  setUrlImage(url: string): void {
    this.url = url;
  }

  clearUrlImage(): void {
    this.url = '';
  }

  openModal(card: Card): void {
    this.dialog.open(DetailsCardVampireComponent, {
      data: { card },
    });
  }

  ngOnInit(): void {
    this.jsonSvc.getJsonData().subscribe((cards) => {
      this.cards = cards;
    });
    console.log('clan:',this.clan)
  }
}
