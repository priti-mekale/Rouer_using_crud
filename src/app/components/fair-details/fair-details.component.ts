import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFair } from 'src/app/model/fair';
import { FairsService } from 'src/app/service/fairs.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
  fairDetails !:IFair ;

  constructor( private _route:ActivatedRoute,
    private _fairsService:FairsService

  ) { }

  ngOnInit(): void {
    this.getFairsDetails()
  }

  getFairsDetails(){
this._route.paramMap.subscribe( params=>{
  let id=params.get('id')
  // this._fairsService.getFair(id)
  if(id){
     this._fairsService.getFair(id)
     .subscribe({
      next:data=>{
        this.fairDetails=data
        
      }
     })
  }
 
})

  }

}
