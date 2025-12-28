import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Istudent } from 'src/app/model/student';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { StudentService } from 'src/app/service/student.service';
import { GetGetfirmComponent } from '../get-getfirm/get-getfirm.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

studentArr:Array<Istudent>=[]
editedId!:string
  private _studentService=inject(StudentService);
  private _snackbarSer=inject(SnackbarService)
  constructor(private _matDialog:MatDialog) { }

  ngOnInit(): void {
    this._studentService.fetchAllStudent()
    .subscribe({
      next:res=>{
        this.studentArr=res
      },
      error:err=>{
        console.log(err);
        
      }
    })
    this._studentService.stdUpdateFlag$.subscribe(res=>{
      this.editedId=res
    })
  }
  trackById(index:number,student:Istudent){
    return student.stdId
  }

  removeStd(id:string){
let matDialogConfig=new MatDialogConfig();
matDialogConfig.width='450px';
matDialogConfig.maxWidth='90%';
matDialogConfig.data=`Are you sure you want to remove this student with id ${id}`

let matDialogRef=this._matDialog.open(GetGetfirmComponent,matDialogConfig)

matDialogRef.afterClosed()
.subscribe(res=>{
  if(res){
    this._studentService.removeStd(id)
    .subscribe({
      next:data=>{
        this._snackbarSer.openSnackbar('This student removed successfully !')
      },
      error:err=>{
        this._snackbarSer.openSnackbar(err)
      }
    })
  }
})


  }

  editStd(editedObj:Istudent){

    this.editedId=editedObj.stdId
   this._studentService.editObj$.next(editedObj)
  }

}
