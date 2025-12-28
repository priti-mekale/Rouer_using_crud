import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { SnackbarService } from './snackbar.service';
import { TodoService } from './todo.service';
import { GetGetfirmComponent } from '../components/get-getfirm/get-getfirm.component';

@Injectable({
  providedIn: 'root'
})
export class MatDialogService {


  constructor(
  private _matDialog: MatDialog,
  private _todosSer: TodoService,
  private _snackBar: SnackbarService
) {}

removeTodo(todoId: string) {

  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '400px';
  dialogConfig.maxWidth = '90%';
  dialogConfig.disableClose = true;
  dialogConfig.data = 'Are you sure you want to remove  ?';

  const dialogRef = this._matDialog.open(
    GetGetfirmComponent,
    dialogConfig
  );

  dialogRef.afterClosed().subscribe(res => {
    if (res === true) {
      this._todosSer.removeTodo(todoId).subscribe({
        next: (res: { message: string; }) => this._snackBar.openSnackbar(res.message),
        error: (err: { message: any; }) =>
          this._snackBar.openSnackbar(err?.message || 'Delete failed')
      });
    }
  });
}

}
