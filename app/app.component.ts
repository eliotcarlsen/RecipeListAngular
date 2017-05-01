import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <h1>Recipe Box</h1>
    <div *ngFor="let currentRecipe of recipes">
      <h3>{{currentRecipe.name}}</h3>
      <h4>Ingredients</h4>
      <ul>
        <li *ngFor="let ingredient of currentRecipe.ingredients">{{ingredient}}</li>
      </ul>
      <h4>Directions</h4>
      <ol>
        <li *ngFor="let direction of currentRecipe.directions">{{direction}}</li>
      </ol>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe("Xing's Amazing Chicken Feet", ["Chicken Feet", "Chicken Stock", "Sriracha Sauce", "Seasonings"], ["Bring 64 ounces of water to boil", "add chicken feet", "place lid on pot and reduce heat", "simmer chicken feet for 30 minutes or until skin is soft"])
  ];
}

export class Recipe {
  constructor(public name: string, public ingredients: string[], public directions: string[]) {
}
}
