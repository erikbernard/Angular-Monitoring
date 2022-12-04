import { Component } from '@angular/core';


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
  isACtive: boolean = true
  movieList: Array<PropsForm> = [];

  setFormValue(event: PropsForm): void {
    console.log(event)
    this.movieList.push(event);
  }

  title = 'film-registration-form--strict';
}
