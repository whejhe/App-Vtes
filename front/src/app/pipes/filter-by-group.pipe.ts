import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/vtes.model';

@Pipe({
  name: 'filterByGroup',
  standalone: true
})
export class FilterByGroupPipe implements PipeTransform {

  transform(cards: Card[], searchGroup: string): Card[] {
    if (!searchGroup || searchGroup === '*') {
      return cards;
    }
    return cards.filter(card => card.group === searchGroup);
  }

}
