import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { BannerComponent } from './banner/banner.component';
import { ListComponent } from './list/list.component';
import { PageComponent } from './page/page.component';
import { ProductService } from '../services/product.service';


@NgModule({
  declarations: [
    ProductDetailComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    BannerComponent,
    ListComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]

})
export class PagesModule { }
