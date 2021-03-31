import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.scss']
})
export class MainframeComponent implements OnInit {
  isCollapsed = false;
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  exitDashboard(){
    this._router.navigateByUrl('/connect');
  }
}
