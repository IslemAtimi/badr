import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreatorTaskComponent } from './creator-task/creator-task.component';
import { ImportantDirective } from './derivitve/important.directive';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { AppRoutingModule } from './app-routing.module';
import { Cp1Component } from './cp1/cp1.component';
import { Cp2Component } from './cp2/cp2.component';
import { Cp3Component } from './cp3/cp3.component';
import { SettingModule } from './setting/setting.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TaskCreatorComponent,
    TaskListComponent,
    CreatorTaskComponent,
    ImportantDirective,
    C1Component,
    C2Component,
    C3Component,
    Cp1Component,
    Cp2Component,
    Cp3Component,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SettingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
      }
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
