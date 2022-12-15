import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './components/form-user/form-user.component';
import { TableUserComponent } from './components/table-user/table-user.component';

const routes: Routes  = [
  { path: '', component: TableUserComponent },
  { path: 'new', component: FormUserComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
