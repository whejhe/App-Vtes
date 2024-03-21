import { Component } from '@angular/core';
import { Card } from '../../models/vtes.model';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-imput',
  standalone: true,
  imports: [
    BrowserModule,
    FormsModule
  ],
  templateUrl: './search-imput.component.html',
  styleUrl: './search-imput.component.scss'
})
export class SearchImputComponent {

  filtro:string = '';
  cards:Card[] = [];

}
