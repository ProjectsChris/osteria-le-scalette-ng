import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { CategoryMenu, Dish } from '../types/ResponseTypes';

@Component({
  selector: 'ols-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  listDishes: any;
  arrCategoryMenu: CategoryMenu[] = []
  arrDishes: Dish[] = [];
  
  constructor(private serviceMenu: MenuService) { }
  
  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    this.arrCategoryMenu = this.serviceMenu.getNameMenu();
    this.arrDishes = this.serviceMenu.getListDishes();
  }
  
  // create a function for return all dishes with only specific parameters
  getArrDishes(idCategory: string, typeDish: string) {
    let dishes: Dish[] = [];
    
    this.arrDishes.forEach((d) => {
      if (d.idCategory == idCategory && d.typeDish == typeDish) {
        dishes.push(d);
      }
    });
    
    return dishes;
  }
}
