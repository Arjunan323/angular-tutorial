import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingService {
    ingredentChanged  = new Subject<Ingredient[]>();
    ingredients:Array<Ingredient> = [
        new Ingredient("Apple", 5),
        new Ingredient("Orange", 5)
      ]

    getIngredients()  {
        return this.ingredients.slice();
    } 

    addIngredient(ingredient: Ingredient) {
         this.ingredients.push(ingredient);
        this.ingredentChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]) {
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients);
        this.ingredentChanged.next(this.ingredients.slice());
    }
}