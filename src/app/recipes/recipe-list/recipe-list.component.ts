import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Grilled meat', 'For 4 people', 'http://www.thehonestbison.com/wp-content/uploads/2015/04/bison-brisket-recipe-ingredients.jpg');

  constructor() { }

  ngOnInit() {
  }

}
