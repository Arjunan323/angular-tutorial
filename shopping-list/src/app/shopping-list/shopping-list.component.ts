import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit , OnDestroy {

  ingredients: Array<Ingredient>;
  private idChangeSubscription: Subscription;

  constructor(private shopping: ShoppingService) {

  }
  

  ngOnInit(): void {
    this.ingredients = this.shopping.getIngredients();
    this.idChangeSubscription =  this.shopping.ingredentChanged.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }

  ngOnDestroy(): void {
    this.idChangeSubscription.unsubscribe();
  }

}
