import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingService {
    ingredentChanged  = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();
    ingredients:Array<Ingredient> = [
        new Ingredient("Apple", 5),
        new Ingredient("Orange", 5)
      ]

    getIngredients()  {
        return this.ingredients.slice();
    } 

    getIngredient(index: number)  {
        return this.ingredients[index];
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

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredentChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredentChanged.next(this.ingredients.slice())
    }
}