import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { GetGetfirmComponent } from './components/get-getfirm/get-getfirm.component';



import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentTableComponent } from './components/student-table/student-table.component';


import { PassengerModule } from './passenger/passenger/passenger.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { ApproutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './components/user/user.component';
import { UserFormComponent } from './components/user-form/user-form.component';

import { MatCardModule } from '@angular/material/card';  // Add this import
import { MaterialModule } from './material/material/material.module';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatDialogModule } from '@angular/material/dialog';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FairsDashboardComponent } from './components/fairs-dashboard/fairs-dashboard.component';
import { FairCardComponent } from './components/fair-card/fair-card.component';
import { FairDetailsComponent } from './components/fair-details/fair-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    GetGetfirmComponent,
    StudentDashboardComponent,
    StudentTableComponent,
    NavbarComponent,
    UsersComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserComponent,
    UserFormComponent,
    ProductComponent,
    ProductListComponent,
    FairsDashboardComponent,
    FairCardComponent,
    FairDetailsComponent,
  
  
    

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
   MatIconModule, PassengerModule, ApproutingModule,
    RouterModule,MatButtonModule,MatIconModule,MatCardModule,MaterialModule,FormsModule,MatFormFieldModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
