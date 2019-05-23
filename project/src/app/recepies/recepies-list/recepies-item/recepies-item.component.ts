import { Component, OnInit, Input } from '@angular/core';

import { Recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrls: ['./recepies-item.component.css']
})
export class RecepiesItemComponent implements OnInit {
  @Input() recipe: Recepie;
  @Input() index: number;

  ngOnInit() {}


}
