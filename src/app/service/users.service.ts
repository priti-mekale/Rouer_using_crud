import { Injectable } from '@angular/core';
import { IUser, UserRole } from '../model/user';
import { Observable, of } from 'rxjs';
import { IgenericResponse } from '../model/generic';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
 users: IUser[] = [
  {
    id: 1,
    name: 'Rahul',
    email: 'rahul@gmail.com',
    age: 25,
    role: UserRole.ADMIN
  },
  {
    id: 2,
    name: 'Priya',
    email: 'priya@gmail.com',
    age: 23,
    role: UserRole.USER
  },
  {
    id: 3,
    name: 'Amit',
    email: 'amit@gmail.com',
    age: 28,
    role: UserRole.MANAGER
  }
];


fetchUsers():Observable<IgenericResponse<IUser[]>>{
   return of({
        status: 'sucess',
        message: 'New todo added Sucessfully',
        data:this.users
      })

}

fetchUser(Id:number):Observable<IUser>{
  let user=this.users.find(u=>u.id===Id) as IUser
  return of(user)
  
}

createUsers(user:IUser):Observable<IUser>{
  this.users.push(user)
  return of(user)

}

updateUsers(updateUsers:IUser):Observable<IUser>{
let getIndex=this.users.findIndex(u=>u.id===updateUsers.id)
this.users[getIndex]=updateUsers
return of(updateUsers)
}


removeUsers(id:string):Observable<IUser>{
  let getIndex=this.users.findIndex(u=>u.id===id)
  const removedUser =  this.users.splice(getIndex,1)
 
  return of(removedUser[0])
}
}


