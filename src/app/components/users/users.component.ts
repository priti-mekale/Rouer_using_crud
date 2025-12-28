import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
userArr:IUser[]=[]
  constructor(private _UsersService:UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }
getUsers(){
this._UsersService.fetchUsers()
.subscribe({
  next:data=>{
   this.userArr=data.data
  },
  error:err=>{
    console.log(err);
    
  }
})
}
}
