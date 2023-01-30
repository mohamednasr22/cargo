import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value ? moment(value.split('T')[0]).format('MM/DD/YYYY') : '';
  }

}
