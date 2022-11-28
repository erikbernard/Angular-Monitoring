import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormDataDrivenComponent } from './form-data-driven/form-data-driven.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormMovieComponent } from './form-movie/form-movie.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateDrivenComponent,
    FormDataDrivenComponent,
    FormMovieComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
