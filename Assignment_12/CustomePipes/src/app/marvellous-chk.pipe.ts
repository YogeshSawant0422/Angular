import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform
 {

  transform(value: number,Param:string): string
  {
     var Ret:string = ""; 

     if(Param == "Prime")
     {
       var i = 0;
      
        for(i = 2 ; i < value;i++)
        {
           if(value % i != 0)
           {
             Ret = "It is prime number";
             break;
           }
           else
           {
             Ret = "It is prime Not number";
             break;
           }
        }
     }
     if(Param == "Even")
     {
       if(value % 2 == 0)
       {
        Ret = "Number is even.";
       }
     }
      if(Param == "Odd")
     {
       if(value % 2 != 0)
       {
        Ret = "Number is Odd.";
       }
     }
     if(Param == "Perfect")
     {
      var sum = 0;

       for(let i = 0 ; i < value ; i++)
       {
         if(value % i == 0)
         {
            sum = sum + i;
         }
       }

       if(sum == value)
       {
         Ret = "Given Number is Perfect";
       }
       else
       {
        Ret = "Given Number is Not Perfect";
       }
     }

     return Ret;
  }

}
