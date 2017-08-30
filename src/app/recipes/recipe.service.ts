import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService{
	public selectedRecipe:EventEmitter<Recipe> =new EventEmitter<Recipe>();
	private recipes: Recipe[]=[
		new Recipe('Apple Dish',
			'This is Apple Dish',
			'https://www.thesun.co.uk/wp-content/uploads/2017/01/gettyimages-185071735.jpg',
			[
				new Ingredient('Apple',2),
				new Ingredient('Bun',5)
			]
		),
		new Recipe('Milk and Bread',
			'This is Milk with Bread',
			'https://images.food52.com/zgDJ7fI1J-JgtLAP9fgq39X876k=/753x502/df9f5dfb-22c8-4581-a9c7-8a25ca9d86d1--2017-0519_kindred-restaurant-milk-bread_bobbi-lin_26236.jpg',
			[
				new Ingredient('Milk',1),
				new Ingredient('Bread',4)
			]
		)
	];	

	getRecipes(){
		return this.recipes.slice();
	}
	
	getRecipe(index:number){
		return this.recipes[index];
	}
}