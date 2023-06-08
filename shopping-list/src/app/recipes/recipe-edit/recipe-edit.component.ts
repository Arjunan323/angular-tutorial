import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param : Params) => {
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '',  recipeImagePath = '' , recipeDesc = '' , recipeIngredients = new FormArray([]);

    if(this.editMode) {
     const recipe =  this.recipeService.getRecipeById(this.id);
     recipeName = recipe.name;
     recipeImagePath = recipe.imagePath;
     recipeDesc = recipe.description;

     if(recipe['ingredients']) {
      for(let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name,  Validators.required),
              'amount' : new FormControl(ingredient.amount,  [Validators.required, Validators.pattern(/^[1-9]+\d*$/)]),
            })
          )
      }
     }
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName , Validators.required),
       'imagePath' : new FormControl(recipeImagePath,  Validators.required),
       'description' : new FormControl(recipeDesc ,  Validators.required),
       'ingredients' : recipeIngredients,
    });
  }

  onSubmit() {
    const   newRecipe = new Recipe(
     this.recipeService.getRecipes().length + 1,
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    )
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe );
    } else {
      this.recipeService.addRecipe(newRecipe);
    }

    this.onCancel();
  }

  get controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls
  }

  addIngredent() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'amount' : new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+\d*$/)]),
      })
    )
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo : this.route})
  }

  deleteIngredent(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }
}
