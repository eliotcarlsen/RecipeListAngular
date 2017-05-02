import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <h1>Recipe Box</h1>
    <div *ngFor="let currentRecipe of recipes">
      <h3 (click)="showIngredients(currentRecipe)">{{currentRecipe.name}}</h3>
    </div>
      <div *ngIf="selectedRecipe">
        <h3>{{selectedRecipe.name}}</h3>
        <h4>Ingredients</h4>
        <ul>
          <li>{{selectedRecipe.ingredients}}</li>
        </ul>
        <h4>Directions</h4>
        <ol>
          <li>{{selectedRecipe.directions}}</li>
        </ol>
        <button (click)="finishedRecipe()">Done</button>
        <button (click)="editRecipe(selectedRecipe)">Edit Recipe</button>
        <div>
        <form *ngIf="editRecipeForm">
        <label>Enter the new Name:</label>
        <input [(ngModel)]="editRecipeForm.name" name="name">
        <label>Enter the new Ingredients:</label>
        <input [(ngModel)]="editRecipeForm.ingredients" name="ingredients" rows="5">
        <label>Enter the new Directions:</label>
        <textarea [(ngModel)]="editRecipeForm.directions" name="directions" rows="5"></textarea>
        <button (click)="finishedEditing()">Update</button>
        </form>
        </div>
      </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe("Xing's Amazing Chicken Feet", ["Chicken Feet", "Chicken Stock", "Sriracha Sauce", "Seasonings"], ["Bring 64 ounces of water to boil", "add chicken feet", "place lid on pot and reduce heat", "simmer chicken feet for 30 minutes or until skin is soft"]),
    new Recipe("Rob's Spicy Wings", ["Chicken Wings", "BBQ Sauce", "Sriracha Sauce", "Seasonings"], ["Deep fry the wings", "add seasonings and sauce", "add sriracha"])
  ];
  selectedRecipe = null;
  showIngredients(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }
  finishedRecipe(){
    this.selectedRecipe = null;
  }
  editRecipeForm = null;
  editRecipe(editForm){
    this.editRecipeForm = editForm;
  }
  finishedEditing(){
    this.editRecipeForm = null;
  }
}

export class Recipe {
  constructor(public name: string, public ingredients: string[], public directions: string[]) {
}
}
