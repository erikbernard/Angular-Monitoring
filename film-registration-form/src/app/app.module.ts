import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  FormTemplateDrivenComponent } from './components/form-template-driven/form-template-driven.component';
import { FormDataDrivenComponent } from './components/form-data-driven/form-data-driven.component';
import { FormMovieComponent } from './components/form-movie/form-movie.component';
import { TableComponent } from './components/table/table.component';
import { NgxMaskModule } from 'ngx-mask';
import { UsersModule } from './users/users.module';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateDrivenComponent,
    FormDataDrivenComponent,
    FormMovieComponent,
    TableComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
