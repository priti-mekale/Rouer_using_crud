import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { TodoService } from 'src/app/service/todo.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
isInEditMode = false;
  editedId = '';

  @ViewChild('todoForm') todoForm!: NgForm;
   constructor(
    private _uuid: UuidService,
    private _TodoService: TodoService,
    private _snackbar: SnackbarService
  ) {}



  ngOnInit(): void {
    this._TodoService.editTodo$.subscribe((todo: Itodo) => {
      this.isInEditMode = true;
      this.editedId = todo.todoId;
      this.todoForm?.form.patchValue(todo);
    });
  }

  addTodo() {
    if (!this.todoForm.valid) {
      this._snackbar.openSnackbar('Please enter todo');
      return;
    }

    const newTodo: Itodo = {
      todoItem: this.todoForm.value.todoItem,
      todoId: this._uuid.Uuid()
    };

    this._TodoService.addTodo(newTodo).subscribe({
      next: res => {
        this._snackbar.openSnackbar(res.message);
        this.todoForm.reset();
      },
      error: err => this._snackbar.openSnackbar(err?.message || 'Add failed')
    });
  }

  updateTodo() {
    if (!this.todoForm.valid) return;

    const updatedTodo: Itodo = {
      todoItem: this.todoForm.value.todoItem,
      todoId: this.editedId
    };

    this._TodoService.updateTodo(updatedTodo).subscribe({
      next: (res: { message: string; }) => {
        this._snackbar.openSnackbar(res.message);
        this.isInEditMode = false;
        this._TodoService.disableFlag.next('');
        this.todoForm.reset();
      },
      error: (err: { message: any; }) => this._snackbar.openSnackbar(err?.message || 'Update failed')
    });
  }
}
