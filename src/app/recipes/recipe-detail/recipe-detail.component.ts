import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;
  constructor(private recipeService: RecipeService,
              private sls: ShoppingListService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params:Params) =>{
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        } 
      );
  }

  onAddIngredientsToShoppingList(){
  	this.sls.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe(){
    //not Working...used routerLink
    this.router.navigate(['../'],{relativeTo: this.route});
    //this.router.navigate(['../',this.id, 'edit'],{relativeTo: this.route});
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'],{relativeTo: this.route});
  }

}
