import { Component, OnInit, Input } from '@angular/core';

import { Recepie } from '../../recepie.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrls: ['./recepies-item.component.css']
})
export class RecepiesItemComponent implements OnInit {
  @Input() recipe: Recepie;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {}
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
