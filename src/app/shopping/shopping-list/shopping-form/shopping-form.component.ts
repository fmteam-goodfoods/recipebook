import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css'],
})
export class ShoppingFormComponent implements OnInit {
  ingredient: string = '';
  amount: number = 1;
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() onItemAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  onSubmitForm() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    if (!name || !amount) return;
    this.onItemAdded.emit(new Ingredient(name, amount));
  }
}
