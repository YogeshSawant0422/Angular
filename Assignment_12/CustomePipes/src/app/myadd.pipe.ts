import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myadd'
})
export class MyaddPipe implements PipeTransform 
{

  transform(value:number,Param:number): number 
  {
    return value + Param;
  }

}
