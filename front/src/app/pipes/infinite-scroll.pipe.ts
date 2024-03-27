//src/app/pipes/infinite-scroll.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'infiniteScroll',
  standalone: true
})
export class InfiniteScrollPipe implements PipeTransform {

  transform(data: any[], pageSize: number, currentPage: number): any[] {
    // Implementa aquí la lógica del infinite scroll
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }

}
