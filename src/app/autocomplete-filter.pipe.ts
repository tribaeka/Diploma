import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'autocompleteFilter'
})
export class AutocompleteFilterPipe implements PipeTransform {
  transform(value: any, search: string): any {
    if  (!search) {return value; }
    return value.filter(v => {
      if (!v) {
        return;
      }
      return v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
