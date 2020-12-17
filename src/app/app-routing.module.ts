import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipeComponent } from './recipe/recipe.component';


const routes: Routes = [
  {
    path: '',
    component : RecipeComponent 
  }
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
