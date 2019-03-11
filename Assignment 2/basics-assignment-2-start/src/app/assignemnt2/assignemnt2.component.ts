import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignemnt2',
  templateUrl: './assignemnt2.component.html',
  styleUrls: ['./assignemnt2.component.css']
})
export class Assignemnt2Component implements OnInit {
  userName='basic Username';
  constructor() { }

  ngOnInit() {
  }

  IsUserNameEmpty() {
    return this.userName == "";
  }

  resetUserName() {
    this.userName='';
  }

}
