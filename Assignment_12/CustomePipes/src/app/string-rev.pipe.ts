import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringRev'
})
export class StringRevPipe implements PipeTransform {

  transform(value:string): string
  {
   var temp:string = value;

    return temp.split("").reverse().join("");
  }

}
