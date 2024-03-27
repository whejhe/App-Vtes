import { Pipe, PipeTransform } from '@angular/core';
import { Card, Clan } from '../models/vtes.model';

@Pipe({
  name: 'filterByClan',
  standalone: true
})
export class FilterByClanPipe implements PipeTransform {
  transform(cards: Card[], searchClan: string): Card[] {
    if (!searchClan) {
      return cards;
    }
    return cards.filter(card => card._name.toLowerCase().includes(searchClan.toLowerCase()));
  }
}
