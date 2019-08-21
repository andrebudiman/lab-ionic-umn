import { Injectable } from '@angular/core';
import { Recipe } from './recipe,model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
      private recipes: Recipe[] = [
        
            {
              id: 'r1',
              title: 'Gado-gado',
              imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSriC8',
              ingredients: ['Lontong','Sawi','Bumbu Kecap','Tauge']
            },
            {
              id: 'r2',
              title: 'Indomie',
              imageUrl: 'https://cdn.webshopapp.com/shops/225503/files/125394395/900x900x2/indomie-instant-noodles-mi-goreng-80g.jpg',
              ingredients: ['Mie','Mecin','Bumbu Kecap','Sambal']
            },
            {
              id: 'r3',
              title: 'KFC',
              imageUrl: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/kfc-partners-grubhub-mother-s-day-free-delivery-deal-1557405129.jpg?itok=UVtkTyx8,',
              ingredients: ['Ayam','Mecin','Tepung']
            }
      ]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];}
    
  getRecipe(recipeId: string){
    
  }
}

