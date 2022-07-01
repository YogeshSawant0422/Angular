import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'ReactiveForms';

  ImagePath: any;

  constructor(public fbobj : FormBuilder) {
    //image location
    this.ImagePath = '../assets/Laptop.png'
  }

  profileForm = this.fbobj.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    MobNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    mail:['',Validators.required]
  }
  );

  ngOnInit() {
  }
}
