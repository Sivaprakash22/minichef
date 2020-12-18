import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    dots : true,
    mouseDrag: true,
    autoplay:true,
    autoplayTimeout : 200,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
