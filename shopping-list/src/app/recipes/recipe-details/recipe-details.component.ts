import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{
   recipe: Recipe;

  constructor(private recipeService: RecipeService , private route : ActivatedRoute) {

  }
  ngOnInit(): void {
   this.route.params.subscribe(
    (param : Params) => {
      let id = +param['id'];
      this.recipe = this.recipeService.getRecipeById(id);
    }
   )
  }

  onAddToShoppingList() {
    this.recipeService.addIngredentsToShoppinList(this.recipe.ingredients)
  }
}
