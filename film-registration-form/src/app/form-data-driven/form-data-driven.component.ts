import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../model/custom-validators';

@Component({
  selector: 'app-form-data-driven',
  templateUrl: './form-data-driven.component.html',
  styleUrls: ['./form-data-driven.component.css']
})
export class FormDataDrivenComponent implements OnInit {

  form = this.build.group({
    name: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    email: ['', [
      Validators.required, 
      Validators.email
    ]],
    cpf: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    password:['', [
      Validators.required, 
      Validators.minLength(8)
    ]],
    confirmPassword: ['', [
      Validators.required, 
      Validators.minLength(8),
      CustomValidators.match('password')
    ]]
  })

  constructor(private build: FormBuilder ) { }

  ngOnInit(): void {
  }

  isFieldInvalid(formControlName: string): boolean | undefined {
    return this.form.get(formControlName)?.invalid && (this.form.get(formControlName)?.touched || this.form.get(formControlName)?.dirty)
  }

  getError(formControlName: string): string {
    if (this.form.get(formControlName)?.hasError('required')) {
      return 'Campo obrigatório';
    } else if (this.form.get(formControlName)?.hasError('email')) {
      return 'E-mail inválido';
    } else if (this.form.get(formControlName)?.hasError('minlength')) {
      let requiredLength = this.form.get(formControlName)?.getError('minlength').requiredLength
       return ` Mínimo ${requiredLength} caracteres`;
    } else if (this.form.get(formControlName)?.hasError('match')) {
      let field = this.form.get(formControlName)?.getError('match').field
       return `A ${field}  deve ser igaual em ambos os campos`;
    } else{
      return '';
    }
  }
  displayValues(): void {
    console.log(this.form.value)

  }
}
