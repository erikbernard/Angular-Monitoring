import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../model/custom-validators';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  ListGenres: Array<string> = [
    "Action",
    "Adventure",
    "Animated",
    "Biography",
    "Comedy",
    "Crime",
    "Dance",
    "Disaster",
    "Documentary",
    "Drama",
    "Erotic",
    "Family",
    "Fantasy",
    "Found Footage",
    "Historical",
    "Horror",
    "Independent",
    "Legal",
    "Live Action",
    "Martial Arts",
    "Musical",
    "Mystery",
    "Noir",
    "Performance",
    "Political",
    "Romance",
    "Satire",
    "Science Fiction",
    "Short",
    "Silent",
    "Slasher",
    "Sports",
    "Spy",
    "Superhero",
    "Supernatural",
    "Suspense",
    "Teen",
    "Thriller",
    "War",
    "Western"
  ]

  formMovie = this.build.group({
    title: ['', [
      Validators.required,
    ]],
    genre: ['', [
      Validators.required, 
    ]],
    releaseDate: ['', [
      Validators.required,
      CustomValidators.Date()
    ]]
  })

  @Output() sumitForm = new EventEmitter() 

  constructor(private build: FormBuilder ) { }

  ngOnInit(): void {
  }

  isFieldInvalid(formControlName: string): boolean | undefined {
    return this.formMovie.get(formControlName)?.invalid && (this.formMovie.get(formControlName)?.touched || this.formMovie.get(formControlName)?.dirty)
  }

  getError(formControlName: string): string | null {
    if (this.formMovie.get(formControlName)?.hasError('required')) {
      return 'Campo obrigatório';
    } else if (this.formMovie.get(formControlName)?.hasError('Date')) {
      let field = this.formMovie.get(formControlName)?.getError('Date').field;
       return `${field}`;
    } else {
      return null;
    }
  }
  displayValues(): void {
    this.sumitForm.emit(this.formMovie.value);
    this.formMovie.reset();

  }
}
