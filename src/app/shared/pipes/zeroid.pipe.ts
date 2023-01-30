import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroid'
})
export class ZeroidPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let zerostr = '';
    if(value < 10){
      zerostr = '000';
    } else if(value < 100){
      zerostr = '00';
    }else if(value < 1000){
      zerostr = '000';
    }
    return `${zerostr}${value}`;
  }

}
