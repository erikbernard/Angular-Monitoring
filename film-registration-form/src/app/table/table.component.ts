import { Component, Input, OnInit } from '@angular/core';

type PropsForm = {
  genre: string;
  releaseDate: string;
  title: string
} 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() movieList!: Array<PropsForm>;
  constructor() { }

  ngOnInit(): void {
  }

}
