import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService{
	ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
	
	startedEditing = new Subject<number>();
	private ingredients: Ingredient[] =[
		new Ingredient('Apples',10),
		new Ingredient('Tomatoes',5)
	];

	getIngredients(){
		return this.ingredients.slice();
	}

	getIngredient(index){
		return this.ingredients[index];
	}

	addIngredient(ingredient:Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredients(ingredients:Ingredient[]){
		/*
		for( let ingredient of ingredients){
			this.ingredients.push(ingredient);
		}*/

		this.ingredients.push(...ingredients);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	updateIngredient(index: number, updatedIngredient:Ingredient){
		this.ingredients[index] = updatedIngredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	deleteIngredient(index: number){
		this.ingredients.splice(index,1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

}