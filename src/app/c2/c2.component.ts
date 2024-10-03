import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private sr:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  View(){
    console.log(this.sr.getTasks())
    //this.router.navigate(['c1',2])
    this.router.navigate(['/first'], { queryParams: { param1: 'valeur1', param2: 'valeur2' } });
  }

}
