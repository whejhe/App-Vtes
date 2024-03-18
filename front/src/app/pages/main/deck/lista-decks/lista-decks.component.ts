import { Component } from '@angular/core';
import { FichaDeckComponent } from "../ficha-deck/ficha-deck.component";

@Component({
    selector: 'app-lista-decks',
    standalone: true,
    templateUrl: './lista-decks.component.html',
    styleUrl: './lista-decks.component.scss',
    imports: [FichaDeckComponent]
})
export class ListaDecksComponent {

}
