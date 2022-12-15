import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userId?: string;

  LoginForm = this.build.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]]
  })

  constructor(private build: FormBuilder, private service: AuthService) { }
  ngOnInit(): void { }

  isFieldInvalid(formControlName: string): boolean | undefined {
    return this.LoginForm.get(formControlName)?.invalid && (this.LoginForm.get(formControlName)?.touched || this.LoginForm.get(formControlName)?.dirty)
  }

  getError(formControlName: string): string | null {
    if (this.LoginForm.get(formControlName)?.hasError('required')) {
      return 'Campo obrigatório';
    } else if (this.LoginForm.get(formControlName)?.hasError('email')) {
      return 'E-mail inválido';
    } else if (this.LoginForm.get(formControlName)?.hasError('minlength')) {
      let requiredLength = this.LoginForm.get(formControlName)?.getError('minlength').requiredLength
       return ` Mínimo ${requiredLength} caracteres`;
    } else {
      return '';
    }
  }
  LoginUser(): void {
    this.service.signin(
      this.LoginForm.value.email!, 
      this.LoginForm.value.password!,
      ).subscribe(() => {
          // this.registeredUser.emit();
      })
      // this.LoginForm.reset();
  }
}
