import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrls: ['./recepies-item.component.css']
})
export class RecepiesItemComponent implements OnInit {
  @Input() recipe: Recepie;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }


  onSelected() {
    this.recipeSelected.emit();
  }

}
