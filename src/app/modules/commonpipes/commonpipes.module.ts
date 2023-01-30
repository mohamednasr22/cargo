import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesnoPipe } from '../../shared/pipes/yesno.pipe';
import { ZeroidPipe } from '../../shared/pipes/zeroid.pipe';
import { NonePipe } from '../../shared/pipes/none.pipe';
import { CustomdatePipe } from '../../shared/pipes/customdate.pipe';



@NgModule({
  declarations: [YesnoPipe,ZeroidPipe,NonePipe , CustomdatePipe],
  imports: [
    CommonModule
  ],
  exports:[YesnoPipe,ZeroidPipe,NonePipe , CustomdatePipe]
})
export class CommonpipesModule { }
