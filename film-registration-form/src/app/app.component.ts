import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormUserComponent } from './users/components/form-user/form-user.component';
import { TableUserComponent } from './users/components/table-user/table-user.component';
import { User } from './users/models/user.model';


type PropsForm = {
  genre: string;
  releaseDate: string;
  title: string
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private datePipe: DatePipe ){}

  isACtive: boolean = true
  movieList: Array<PropsForm> = [];

  setFormValue(event: PropsForm): void {
    console.log(event)
    this.movieList.push(event);
  }
  updateTable(table: TableUserComponent): void {
    table.getAllUsers();
  }

  updateForm(form: FormUserComponent, user: User): void {
    form.userId = user.id;
    form.form.patchValue({
       name: user.name,
       email: user.email,
       birthDate: this.datePipe.transform(user.birthDate, 'yyyy-MM-dd')
    })
  }

  title = 'film-registration-form--strict';
}
