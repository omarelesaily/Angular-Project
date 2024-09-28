import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../Models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]= [
    { name: 'Recipe 1', description: 'This is recipe 1',imagePath: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'},
    { name: 'Recipe 2', description: 'This is recipe 2',imagePath: 'https://www.century-foods.com/wp-content/uploads/2023/01/px653047-image-kwvxn16x.jpg' },
    { name: 'Recipe 3', description: 'This is recipe 3',imagePath: 'https://images.squarespace-cdn.com/content/v1/5cfb2d62ad3fa300014b98bb/1644103534272-HG13OU56CT98RJQLYQ62/Bacon+Wrapped+Brisket.jpg' }
  ];
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
