import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IUser } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';
import { GetGetfirmComponent } from '../get-getfirm/get-getfirm.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
id !:string
userInfo!:IUser
  constructor(private _route:ActivatedRoute,
    private _router:Router,
    private _UsersService:UsersService,
   private _matDialog:MatDialog
  ) { }

  ngOnInit(): void {
this.getDetails()
    
//     console.log(this._route)
//     this.id=this._route.snapshot.params['id']
//     if(this.id){
// this._UsersService.fetchUser(+this.id)
// .subscribe({
// next:data=>{
//   this.userInfo=data
// }
// })


  }

getDetails(){

  //here  params is behavoir subject hai
  this._route.params.subscribe((param:Params)=>{
    this.id=param['id']
    if(this.id){
      this._UsersService.fetchUser(+this.id)
      .subscribe({
        next:data=>{
          this.userInfo=data
        },
        error:err=>{

        }
      })
    }
    
  })
}

//     }
   goBack(){
    this._router.navigate(['users'])
  }

onRemove() {
  const matConfig = new MatDialogConfig();
  matConfig.width = '450px';
  matConfig.data = `Are you sure you want to remove user with id ${this.id}?`;

  // Open dialog
  const dialogRef = this._matDialog.open(GetGetfirmComponent, matConfig);

  // After dialog close
  dialogRef.afterClosed().subscribe((result) => {
    if (result === true) {
      // Call delete API
      this._UsersService.removeUsers(this.id).subscribe({
        next: (data) => {
          console.log(data);
          this._router.navigate(['/users']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      console.log('Delete cancelled');
    }
  });
}



  }
