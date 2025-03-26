import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registerPipe',
})
export class CustomTransformPipe implements PipeTransform {
  transform(value: string, appendSymbol: string): string {
    if (!value) return value;
    const firstChar = value.charAt(0).toUpperCase();
    const restOfString = value.slice(1);
    return `${firstChar}${restOfString}${appendSymbol}`;
  }
}
