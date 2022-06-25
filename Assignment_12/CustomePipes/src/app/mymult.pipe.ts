import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult'
})
export class MymultPipe implements PipeTransform 
{

  transform(value:number,Param:number): number
  {
    return value * Param;
  }

}
