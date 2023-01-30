import { Pipe, PipeTransform } from '@angular/core';
const options_vals = ['No','Yes','N/A'];
@Pipe({
  name: 'yesno'
})
export class YesnoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    return options_vals[+value];
  }

}
