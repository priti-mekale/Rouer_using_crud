import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { PassengerDashboardComponent } from 'src/app/components/passenger-dashboard/passenger-dashboard.component';



@NgModule({
  declarations: [PassengerDashboardComponent],
  imports: [
    CommonModule,MatButtonModule,
    
  ],
  exports:[PassengerDashboardComponent]
})

export class PassengerModule { }
