import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy  {
  @ViewChild('f', {static : false}) slForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shopping: ShoppingService) {

  }
  
  ngOnInit(): void {
    this.subscription = this.shopping.startEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shopping.getIngredient(index);
      this.slForm.setValue({
        name : this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  onAddItem(ngForm:  NgForm) {
    const value = ngForm.value;
    const newIngredient = new Ingredient(value.name,value.amount);

    if(this.editMode) {
      this.shopping.updateIngredient(this.editedItemIndex, newIngredient)
      this.editMode = false;
    } else {
      this.shopping.addIngredient(newIngredient);
    }
    ngForm.reset()
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shopping.deleteIngredient(this.editedItemIndex);
    this.onClear()
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

}
