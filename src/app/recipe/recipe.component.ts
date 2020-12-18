import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service'
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
  constructor(private api: ApicallService){

  }
  recipe: any;
  type: any;
  shareData: any = {}
 
  ngOnInit() {
    this.api.getData().subscribe((data)=>{
     
      
      this.recipe = data
      if((this.recipe.type).toLowerCase()==='veg')
      {
       this.type = 'green';
      }
     else
     {
       this.type = 'red';
     }


     this.shareData.title = this.recipe.name
      this.shareData.text = this.recipe.description
      this.shareData.url = this.recipe.video


    })
  }

async shareBtn()
{
 console.log('hello');
 
}

}