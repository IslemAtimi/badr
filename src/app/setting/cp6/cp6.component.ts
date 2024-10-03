import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cp6',
  templateUrl: './cp6.component.html',
  styleUrls: ['./cp6.component.css']
})
export class Cp6Component implements OnInit {

  formulaire: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formulaire = fb.group({
      name: ['e@ma.il',[Validators.email,Validators.required]],
      pass:['132456',Validators.required]
    });
   }


  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(form)
    console.log(this.formulaire.controls['name'].value);
  }

}
