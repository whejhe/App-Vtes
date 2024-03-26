import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/vtes.model';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(cards: Card[], searchName: string): Card[] {
    if (!searchName) {
      return cards;
    }
    return cards.filter(card => card._name.toLowerCase().includes(searchName.toLowerCase()));
  }

}
