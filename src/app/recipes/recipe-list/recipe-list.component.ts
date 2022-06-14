import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'new recipe',
      'this is the first recipe static item',
      'https://bestbeefrecipes.com/wp-content/uploads/2020/06/air-fried-steak-1.jpg'
    ),
    new Recipe(
      'new recipe',
      'this is the first recipe static item',
      'https://static.onecms.io/wp-content/uploads/sites/9/2021/03/26/beef-wellington-FT-RECIPE0321.jpg'
    ),
    new Recipe(
      'new recipe',
      'this is the first recipe static item',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMYhXWQEPCS-gMjJstqn8hydT0iHNLAevgQ&usqp=CAU'
    ),
    new Recipe(
      'new recipe',
      'this is the first recipe static item',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCpPZjE0f2qoQ1HprUPzgYYKt2UzHHLRdVw&usqp=CAU'
    ),
  ];

  @Output() onRecipeItemClicked = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onShowRecipeDetails(recipe: Recipe) {
    this.onRecipeItemClicked.emit(recipe);
  }
}
