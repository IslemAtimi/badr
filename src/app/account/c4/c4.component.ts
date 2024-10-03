import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {
mForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.mForm = fb.group({
      name: ['e@ma.il',Validators.email]
    });
   }

  ngOnInit(): void {
  }


  onSubmit(form:any){
    console.log(form)
    console.log(this.mForm.controls['name']);
  }

}
