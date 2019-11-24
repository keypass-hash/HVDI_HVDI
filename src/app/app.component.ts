import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ui1';
  RegistrationForm:FormGroup;
  city:string[]=['Amravati', 'Nagpur' ,'Pune'];

constructor(private formBuilder:FormBuilder){
  this.RegistrationForm=this.formBuilder.group({
    Name:['',[Validators.required ,Validators.minLength(4),Validators.maxLength(8)]],
    Email:['',[Validators.required ,Validators.minLength(4),Validators.maxLength(8)]],
    city:[''],
    gender:[''],
  })
}
loginFunction()
{
  console.log(this.RegistrationForm.value);
}
}


