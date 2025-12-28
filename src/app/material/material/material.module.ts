import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const Arr=[MatDialogModule,
    MatSnackBarModule,]
@NgModule({
  declarations: [],
  imports: [
    ...Arr],
    exports:[...Arr]
})
export class MaterialModule { }
