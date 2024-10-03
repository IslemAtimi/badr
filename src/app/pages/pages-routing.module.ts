import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path:'',redirectTo:'products',pathMatch:'full'
  },
  {
    path:'products',
    component:ProductsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'product-detail/:id',
    component:ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
  
 }
