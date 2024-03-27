import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/vtes.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(cards: Card[], types: string[], exclude: boolean = false): Card[] {
    return cards.filter(card => exclude ? !card.types.some(type => types.includes(type)) :
    card.types.some(type => types.includes(type)));
  }

}