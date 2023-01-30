import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'none'
})
export class NonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? value : 'None';
  }

}
