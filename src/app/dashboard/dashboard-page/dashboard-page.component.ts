import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  users: User[] = [];
  firstName: string = '';
  lastName: string = '';
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUserList().subscribe({
      next: (response) => (this.users = response),
      error: (r) => console.log('eroare'),
    });
  }

  createNew() {
    this.userService
      .createUser(this.firstName, this.lastName)
      .subscribe({ next: (response) => console.log(response) });
      console.log("in create");
  }
}
