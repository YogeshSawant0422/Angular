import { Component} from '@angular/core';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css'],
  providers: [NgbTimepickerConfig]
})
export class BugInfoComponent
{

  constructor()
  {

  }

  model:any | NgbDateStruct;

}
