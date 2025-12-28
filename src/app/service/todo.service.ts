import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Itodo } from '../model/todo';
import { IgenericResponse } from '../model/generic';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
editTodo$: Subject<Itodo> = new Subject<Itodo>()
  disableFlag:Subject<string>=new Subject<string>()
  constructor() { }

  todoArr=[{
    todoItem:'Red',
    todoId:'1'
  },
{
    todoItem:'Blue',
    todoId:'1'
  }]
fetchTodos():Observable<Itodo[]>{
  return of (this.todoArr)
}


 addTodo(newTodo: Itodo): Observable<IgenericResponse<Itodo>> {
    this.todoArr.unshift(newTodo)
    return of({
      status: 'sucess',
      message: 'New todo added Sucessfully',
      data: newTodo
    })
  }



  updateTodo(updatedObj: Itodo): Observable<IgenericResponse<Itodo>> {
    let getIndex = this.todoArr.findIndex(todo => todo.todoId === updatedObj.todoId);
    this.todoArr[getIndex] = updatedObj;
    return of({
      status: 'sucess',
      message: 'Todo Item updated Sucessfully',
      data: updatedObj
    })
  }


  removeTodo(todoId: string): Observable<IgenericResponse<string>> {
    let getIndex = this.todoArr.findIndex(todo => todo.todoId === todoId)
    this.todoArr.splice(getIndex, 1)
    return of({
      status: 'sucess',
      message: 'Todo Item updated Sucessfully',
      data: todoId
    })

  }


 
}
