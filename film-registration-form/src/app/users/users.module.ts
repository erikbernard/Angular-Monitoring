import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { TableUserComponent } from './components/table-user/table-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
    declarations: [
        TableUserComponent,
        FormUserComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        UserRoutingModule,
    ],
    exports: [
        TableUserComponent,
        FormUserComponent
    ]
})

export class UsersModule { }