import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private sr:ProductService) { }

  produits:any[]=[]
  ngOnInit(): void {
    this.sr.getProducts().subscribe(x=>{
      this.produits=x.products
    })
  }

}
