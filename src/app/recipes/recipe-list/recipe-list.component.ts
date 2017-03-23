import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Grilled beef', 'For 4 people', 'http://blog.plated.com.s3.amazonaws.com/2013/05/Steak-Meat-Beef-Tomato-Grilled-Seared-Rosemary.jpg');
  recipe2 = new Recipe('Roasted chicken', 'For 3 people', 'https://ehonami.blob.core.windows.net/media/2015/01/kitchen-kelley-roasted-chicken.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
