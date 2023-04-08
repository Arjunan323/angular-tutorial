import { NgModule } from "@angular/core";
import { RouterModule , Routes} from "@angular/router";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeHomeComponent } from "./recipes/recipe-home/recipe-home.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path : '' , redirectTo: '/recipes' , pathMatch : 'full' } ,
    { path : 'recipes' , component : RecipesComponent , children : [
        {path : '' , component : RecipeHomeComponent} , 
        {path : 'recipe-list' , component : RecipeListComponent} ,
        {path : 'new' , component : RecipeEditComponent} ,
        {path : ':id' , component : RecipeDetailsComponent} ,
        {path : ':id/edit' , component : RecipeEditComponent} ,

    ]} ,
    { path : 'shopping-list' , component : ShoppingListComponent  , children : [
      
    ]}
];


@NgModule({

    imports : [RouterModule.forRoot(appRoutes)] ,
    exports : [RouterModule]
})
export class AppRoutingModule {


}