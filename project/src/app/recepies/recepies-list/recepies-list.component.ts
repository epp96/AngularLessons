import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recepie>();


  recepies: Recepie[] = [
    new Recepie('A test Recepie', 'this is a test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1519844002%2Ffast-food-mobile-apps-chick-fil-a-FT-BLOG0218.jpg%3Fitok%3D7d_gu0JA&w=800&c=sc&poi=face&q=85'),
    new Recepie('An Other test Recepie', 'this is a test', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recepie) {
    this.recipeWasSelected.emit(recipe);
  }

}
