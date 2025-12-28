import { Component, inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from 'src/app/model/student';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { StudentService } from 'src/app/service/student.service';
import { TodoService } from 'src/app/service/todo.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class StudentDashboardComponent implements OnInit {

   isInEditMode:boolean=false
@ViewChild('studentForm') studentForm!:NgForm
editedObj!:Istudent
private _uuid=inject(UuidService);
private _studentSer=inject(StudentService);
private _snackbarSer=inject(SnackbarService)
  constructor() { }

  ngOnInit(): void {
    this._studentSer.editObj$.subscribe(res=>{
      this.isInEditMode=true
       this.editedObj=res;
       this.studentForm.form.patchValue(this.editedObj)
    })
  }
studentAdd(){
if(this.studentForm.valid){
  let studentObj={
    ...this.studentForm.value,
    id:this._uuid.Uuid()
  }
  this.studentForm.reset()
this._studentSer.addStudent(studentObj)
.subscribe({
  next:res=>{
    this._snackbarSer.openSnackbar('Student added successfully !')
  },
  error:err=>{
    this._snackbarSer.openSnackbar('Something went wrong while posting the data !')
  }

})
}else{
  alert('Add all the field first to add')
}
}

updateStd(){
  if(this.studentForm.valid){
    let updatedObj:Istudent={
      ...this.studentForm.value,
      id:this.editedObj.stdId
    }
    this.isInEditMode=false;
    this._studentSer.stdUpdateFlag$.next('')
    this.studentForm.reset()
    this._studentSer.updatStd(updatedObj)
    .subscribe({
      next:res=>{
        this._snackbarSer.openSnackbar('Student updated successfully')
      },
      error:err=>{
        this._snackbarSer.openSnackbar('Something went wrong while updating student !')
      }
    })
  
  }else{
    alert('Fill up all the field to update')
  }
}
}
