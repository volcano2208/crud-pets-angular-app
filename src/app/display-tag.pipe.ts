import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from './pets/pets.component';

@Pipe({
  name: 'displayTags',
})
export class DisplayTagsPipe implements PipeTransform {
  transform(items: Tag[]): string {
    let returnStr = '';
    for (const [index, item] of items.entries()) {
      returnStr += `${index !== 0 ? ', ' : ''}${item.name}`;
    }
    return returnStr;
  }
}
