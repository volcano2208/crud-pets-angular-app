import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from './pets.component';

@Pipe({
  name: 'tagsTransform'
})
export class TagsTransformPipe implements PipeTransform {

  transform(items: Tag[], index: number, item: any): string {
    let returnStr = '';
    for ([index, item] of items.entries()) {
      if (items.length >= 4) {
        items.splice(4, 1);
        returnStr += `${index !== 0 ? ' | ' : ''}${item.name}`;
      } else {
        returnStr += `${index !== 0 ? ' | ' : ''}${item.name}`;
      }
    }
    return returnStr;
  }
}
