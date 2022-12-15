import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Page } from 'src/app/users/models/page.model';
import { User } from '../../models/user.model';
import { UserService } from '../../service/user.service';
import { debounceTime, map, Subject, Subscription } from 'rxjs';

import jsonData from '../../../../../db/db.json';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit, OnDestroy {

  @Output() editUser = new EventEmitter<User>();

  search = new Subject<any>()

  subscrition!: Subscription;

  users: User[] = []
  page: Page = {
    page:1,
    limit: 25,
    filter: {
      name: ''
    }
  }

  constructor(private service: UserService) { }
  
  ngOnInit(): void {
    this.search
    .pipe(
      debounceTime(1500),
      map(event => event.target.value)
    )
    .subscribe((value)=>{
      this.page.page = 1;
      this.page.filter.name = value;
      this.getAllUsers();
      console.log(value )
    });

    this.getAllUsers();
  }

  getAllUsers() {
    this.subscrition = this.service.getAllUsers(this.page).subscribe({
      next: (users) => {
        this.users = users;
      }
    });
  }

  getuserPage(page: number): void {
    this.page.page = page;
    this.getAllUsers();
  }

  removeUser(id: string): void {
    this.service.removeUserById(id).subscribe(()=>{
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }
}
