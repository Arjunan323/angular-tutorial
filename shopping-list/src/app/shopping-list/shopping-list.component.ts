import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients:Array<Ingredient> = [
    new Ingredient("Apple", 5),
    new Ingredient("Orange", 5)
  ]

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient)
  }

}
