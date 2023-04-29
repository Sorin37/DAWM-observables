import { Component, Input } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() userData?: User;
  ngOnChanges() {
    // console.log(this.userData);
  }
}
