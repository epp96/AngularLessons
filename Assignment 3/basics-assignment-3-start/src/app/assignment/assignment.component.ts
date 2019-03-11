import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  buttonClicked = false;
  logs = [];
  // const date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  buttonClick() {
    this.buttonClicked = !this.buttonClicked;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }

}
