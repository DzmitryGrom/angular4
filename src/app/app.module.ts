import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {HoverDirective} from "./hover.directive";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./search.pipe";


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HoverDirective,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
