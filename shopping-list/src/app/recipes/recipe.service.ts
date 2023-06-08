import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanges = new Subject<Recipe[]>();
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shopping: ShoppingService) {

    }

    private recipes: Array<Recipe> = [
        new Recipe(
             1,
            'Test Recipe',
            'Test',
            'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg',
            [
                new Ingredient('Meat' , 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe( 2 ,
            'Test Recipe1',
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

    getRecipeById(id: number) : Recipe {
        return this.recipes.slice().find(recipe  => recipe.id === id);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanges.next(this.recipes.slice());
    }

    updateRecipe(index: number , recipe: Recipe) {
        let i =  this.recipes.slice().findIndex(recipe  => recipe.id === index)
        this.recipes[i] = recipe;
        this.recipesChanges.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        let i =  this.recipes.slice().findIndex(recipe  => recipe.id === index)
        this.recipes.splice(i, 1);
        this.recipesChanges.next(this.recipes.slice());
    }
}