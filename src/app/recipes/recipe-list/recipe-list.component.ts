import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Grilled beef', 'For 4 people', 'http://blog.plated.com.s3.amazonaws.com/2013/05/Steak-Meat-Beef-Tomato-Grilled-Seared-Rosemary.jpg'),
    new Recipe('Roasted chicken', 'For 3 people', 'https://ehonami.blob.core.windows.net/media/2015/01/kitchen-kelley-roasted-chicken.jpg'),
    new Recipe('Haru sushi', 'For 5 people', 'http://www.harusushi.com/wp-content/uploads/2015/06/sushi_and_sashimi_for_two.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
