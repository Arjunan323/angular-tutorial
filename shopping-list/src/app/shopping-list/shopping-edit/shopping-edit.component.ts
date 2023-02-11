import { Component , ElementRef, ViewChild, EventEmitter , Output} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('name', {static: false}) nameInputRef : ElementRef;
  @ViewChild('amount', {static: false}) amountInputRef : ElementRef;
  @Output() ingredentAdded = new EventEmitter<Ingredient>();
  constructor(){

  }

  onAddItem(){
    this.ingredentAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value ,  this.amountInputRef.nativeElement.value))
  }
}
