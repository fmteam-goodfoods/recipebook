import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
    new Ingredient('another', 7),
    new Ingredient('yet another', 12),
  ];

  constructor() {}

  ngOnInit() {}

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
