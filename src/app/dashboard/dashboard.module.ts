import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { UserComponent } from './user/user.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    DashboardPageComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    NzIconModule
  ]
})
export class DashboardModule { }
