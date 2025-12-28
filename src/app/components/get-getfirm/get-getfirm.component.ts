import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-getfirm',
  templateUrl: './get-getfirm.component.html',
  styleUrls: ['./get-getfirm.component.scss']
})
export class GetGetfirmComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<GetGetfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}
  ngOnInit(): void {
   
  }

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }


}
