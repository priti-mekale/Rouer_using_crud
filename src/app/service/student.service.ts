import { Injectable } from '@angular/core';
import { Istudent } from '../model/student';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Istudent[] = [
  {
     fullName:"Priti M",
    contact:7766554433,
    email:"priti1@gmail.com",
    stdId:'1'
}
  
];

  constructor() { }
editObj$:Subject<Istudent>=new Subject()
stdUpdateFlag$:Subject<string>=new Subject<string>()
fetchAllStudent():Observable<Istudent[]>{
  return of(this.students)
}

addStudent(newObj:Istudent):Observable<Istudent>{
  this.students.unshift(newObj);
  return of(newObj)
}

removeStd(id:string):Observable<string>{
    let getIndex=this.students.findIndex(std=>std.stdId===id);
    this.students.splice(getIndex,1)
  return of(id)
}

updatStd(updatedObj:Istudent):Observable<Istudent>{
  let getIndex=this.students.findIndex(std=>std.stdId===updatedObj.stdId);
  this.students[getIndex]=updatedObj;
  return of(updatedObj)
}
}
