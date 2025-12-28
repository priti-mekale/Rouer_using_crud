import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Itodo } from 'src/app/model/todo';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { TodoService } from 'src/app/service/todo.service';
import { GetGetfirmComponent } from '../get-getfirm/get-getfirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
 
todosArr: Itodo[] = [];
  editedId: string = '';

  private _TodoserviceService = inject(TodoService);

  constructor(
     private _dialog: MatDialog,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.fetchTodos();

    this._TodoserviceService.disableFlag.subscribe(id => {
      this.editedId = id;
    });
  }

  trackById(index: number, todo: Itodo) {
    return todo.todoId;
  }

  fetchTodos() {
    this._TodoserviceService.fetchTodos().subscribe({
      next: res => this.todosArr = res,
      error: () => this._snackbar.openSnackbar('Failed to load todos')
    });
  }

  editTodo(todo: Itodo) {
    this.editedId = todo.todoId;
    this._TodoserviceService.editTodo$.next(todo);
  }

  removeTodo(todoId: string) {
    const config = new MatDialogConfig();
    config.width = '400px';
    config.data = 'Are you sure you want to remove this todo?';

    const dialogRef = this._dialog.open(GetGetfirmComponent, config);

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this._TodoserviceService.removeTodo(todoId).subscribe({
          next: (res: { message: string; }) => this._snackbar.openSnackbar(res.message),
          error: (err: { message: any; }) => this._snackbar.openSnackbar(err?.message || 'Delete failed')
        });
      }
    });
  }


}
