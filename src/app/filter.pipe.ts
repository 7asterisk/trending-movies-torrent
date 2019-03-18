import { Pipe, PipeTransform } from '@angular/core';
import { Movies } from './Movies';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: Movies): any {
        if (!items || !filter) {
            return items;
        }
        filter.sname = filter.sname.toLowerCase();
        return items.filter(item => item.sname.toLowerCase().indexOf(filter.sname) !== -1);
    }
}
