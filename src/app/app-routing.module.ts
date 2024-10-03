import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageComponent } from './pages/page/page.component';

const routes: Routes = [

  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sign-up',
    component:RegisterComponent
  },
  {
    path:'page',
    component:PageComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  

  {
    path:'**',redirectTo:'page',pathMatch:'full'
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
