import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router , private serive:ProductService) { }

  ngOnInit(): void {
    //this.serive.getUsers().subscribe(x=>console.log(x))
  }

  goTORegister(){
    this.route.navigate(['/sign-up'])
  }


  goToProducts(){
    this.route.navigate(['/products'])
  }

  

}
