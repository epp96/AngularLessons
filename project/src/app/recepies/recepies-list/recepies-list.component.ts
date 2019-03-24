import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  recepies: Recepie[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recepies = this.recipeService.getRecipes();
  }
}
