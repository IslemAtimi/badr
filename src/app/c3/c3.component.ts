import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css'],
  providers:[ProductService]
})
export class C3Component implements OnInit {

  constructor(private sr:ProductService) { }

  ngOnInit(): void {
  }

  View(){
    console.log(this.sr.getTasks())
  }

}
