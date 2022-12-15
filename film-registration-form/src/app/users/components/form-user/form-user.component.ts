import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  @Output() registeredUser = new EventEmitter();

  userId?: string;

  form = this.build.group({
    name: ['', [
      Validators.required,
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    birthDate: ['', [
      Validators.required,
    ]]
  })

  constructor(private build: FormBuilder, private service: UserService) { }
  ngOnInit(): void { }

  isFieldInvalid(formControlName: string): boolean | undefined {
    return this.form.get(formControlName)?.invalid && (this.form.get(formControlName)?.touched || this.form.get(formControlName)?.dirty)
  }

  getError(formControlName: string): string | null {
    if (this.form.get(formControlName)?.hasError('required')) {
      return 'Campo obrigatório';
    } else if (this.form.get(formControlName)?.hasError('email')) {
      return 'E-mail inválido';
    } else {
      return '';
    }
  }
  registerUser(): void {
    if (this.userId) {
      this.service.editUser(this.userId,
        {
          name: this.form.value.name!,
          email: this.form.value.email!,
          birthDate: new Date(this.form.value.birthDate!),

        }).subscribe(() => {
          this.registeredUser.emit();
        })
      // this.sumitForm.emit(this.form.value);
      this.form.reset();

    } else {
      this.service.registerUser(
        {
          name: this.form.value.name!,
          email: this.form.value.email!,
          birthDate: new Date(this.form.value.birthDate!),

        }).subscribe(() => {
          this.registeredUser.emit();
        })
      this.form.reset();
    }
  }
}
