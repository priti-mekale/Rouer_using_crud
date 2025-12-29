import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IFair } from 'src/app/model/fair';
import { FairsService } from 'src/app/service/fairs.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-fairs-dashboard',
  templateUrl: './fairs-dashboard.component.html',
  styleUrls: ['./fairs-dashboard.component.scss']
})
export class FairsDashboardComponent implements OnInit {
fairArr:IFair[]=[]
  constructor(private _FairsService:FairsService,
    private _snackbar :SnackbarService,
    private _router:Router,

  ) { }

  ngOnInit(): void {
    this.getFairs()
    this._router.navigate(['fairs', this.fairArr[0].id]);

  }

  getFairs(){
this._FairsService.fetchFairs()
.subscribe({
  next:data=>{
    this.fairArr=data
  },
  error:err=>{
  this._snackbar.openSnackbar(err)
  }
})
  }
}
