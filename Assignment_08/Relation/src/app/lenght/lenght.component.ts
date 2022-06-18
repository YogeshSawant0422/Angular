import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenght',
  templateUrl: './lenght.component.html',
  styleUrls: ['./lenght.component.css']
})
export class LenghtComponent implements OnInit
{
  i: number;
  constructor() {
    this.i = 0;
  }

  ngOnInit(): void {
  }

  public Data: any;


  abc(Value:any)
  {
    for (let final of Value)
    {
      this.Data = this.i++;
    }
  }
}
