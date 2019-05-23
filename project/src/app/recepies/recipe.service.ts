import { Injectable, EventEmitter } from '@angular/core';
import { Recepie } from './recepie.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  private recipes: Recepie[] = [
    new Recepie('chick fil a Sandwich',
     'this is a chick fil a Sandwich',
     'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1519844002%2Ffast-food-mobile-apps-chick-fil-a-FT-BLOG0218.jpg%3Fitok%3D7d_gu0JA&w=800&c=sc&poi=face&q=85',
     [
       new Ingredient('Buns', 2),
       new Ingredient('Fried chicken', 1),
       new Ingredient('pickels', 2)
     ]
   ),
    new Recepie('chicken salad',
     'this is a chicken salad',
     'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
     [
       new Ingredient('Chicken' , 1),
       new Ingredient('salad', 1)
     ]
   )
  ];
  constructor(private slService: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recepie>();

  getRecipes() {
    return this.recipes.slice(); // slice with no parameters makes a new array this is bc if we just return the array where it is returned will be able to modify the array in the services class
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
