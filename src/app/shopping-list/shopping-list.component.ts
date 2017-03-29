import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Chicken', 5),
    new Ingredient('Meat', 4),
    new Ingredient('Fish',6),
    new Ingredient('Rice', 8)
  ];
  // @Output() ingredientClicked = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    let index = this.ingredients.findIndex(elem => elem.name === ingredient.name);
    if(index > -1) {
      this.ingredients[index].amount = +this.ingredients[index].amount
                                     + +ingredient.amount;
    }
    else {
      this.ingredients.push(ingredient);
    }
  }

  onIngredientDeleted(ingredientName: string) {
    let index = this.ingredients.findIndex(elem => elem.name === ingredientName);
    if(index > -1) {
      this.ingredients.splice(index, 1);
    }
  }

  // onIngredientClicked(ingredient: Ingredient) {
  //   this.ingredientClicked.emit(ingredient);
  // }

}
