import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from './pets.component';

@Pipe({
  name: 'tagsTransform'
})
export class TagsTransformPipe implements PipeTransform {

  transform(items: Tag[]): string {
    let returnStr = '';
    for (const [index, item] of items.entries()) {
      returnStr += `${index !== 0 ? ', ' : ''}${item.name}`;
    }
    return returnStr;
  }
}
