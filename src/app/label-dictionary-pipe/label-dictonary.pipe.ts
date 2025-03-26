import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelDictonaryPipe'
})
export class LabelDictonaryPipe implements PipeTransform {

  transform(dictionary: { [key: string]: any }, key: string): string {
    if (key in dictionary) {
      const value = dictionary[key];
      return `${key}_${value}`;
    } else {
      return 'Key not found';
    }
  }

}
