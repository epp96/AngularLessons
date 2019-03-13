import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrls: ['./recepies-detail.component.css']
})
export class RecepiesDetailComponent implements OnInit {
  @Input() recipe: Recepie;
  constructor() { }

  ngOnInit() {
  }

}
