import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {
  name: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  displayValues(): void {
    console.log(this.name)
  }
}
