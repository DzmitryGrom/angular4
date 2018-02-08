import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {HoverDirective} from "./hover.directive";


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
