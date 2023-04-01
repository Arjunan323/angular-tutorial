import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shopping: ShoppingService) {

    }

    private recipes: Array<Recipe> = [
        new Recipe('Test Recipe',
            'Test',
            'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg',
            [
                new Ingredient('Meat' , 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Test Recipe1',
            'Test1',
            'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 20)
            ])
    ]

    getRecipes() {
        return this.recipes.slice();
    }


    addIngredentsToShoppinList(ingredient: Ingredient[]){
        this.shopping.addIngredients(ingredient);
    }
}