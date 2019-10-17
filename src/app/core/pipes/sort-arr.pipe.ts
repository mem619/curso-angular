import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArr'
})
export class SortPipe implements PipeTransform {

  transform(val: any[], order: string, prop: string){
   return val.sort((a , b) => {
      let factor = (order != 'asc') ? 1 : -1;

      return (a[prop] > b[prop]) ? -1 * factor : ((b[prop] > a[prop]) ? 1 * factor : 0);
    });
  }

}
