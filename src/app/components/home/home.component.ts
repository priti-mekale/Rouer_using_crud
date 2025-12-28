import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    //1
    private _router:Router
  ) { }

  ngOnInit(): void {
  }
 
  gotoTodos(){
    this._router.navigate(['todos'])
  }
}
