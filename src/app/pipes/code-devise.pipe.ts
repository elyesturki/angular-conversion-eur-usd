import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeDevise'
})
export class CodeDevisePipe implements PipeTransform {

  transform(value: string, args?: string): string {
    switch (value) {
      case '€':
          value = 'eur'
          break;
      case '$':
        value = 'usd'
          break;
      default:
          break;
  }
    return value;
  }

}
