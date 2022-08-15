import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searcher'
})
export class SearcherPipe implements PipeTransform {
  transform(items: any, term: any, prop: string): any {
    if (!term || !prop) return items;

    return items.filter((item:any) => 
        item[prop].toString().toLowerCase().includes(term.toLowerCase()));
  }
}
