import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private serive:ProductService) { }

  ngOnInit(): void {
    //this.serive.getUsers().subscribe(x=>console.log(x))
  }

}
