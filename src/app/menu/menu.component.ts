import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { CategoryMenu, Dish } from '../types/ResponseTypes';

@Component({
  selector: 'ols-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  arrCategoryMenu: CategoryMenu[] = []
  arrDishes: Dish[] = [];
  
  constructor(private serviceMenu: MenuService) { }
  
  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // to fetch all data from API
    this.serviceMenu.fetchDataCategoryMenu();
    this.serviceMenu.fetchDataDishes()

    // saves the data into an array
    this.arrCategoryMenu = this.serviceMenu.getCategoriesMenu();
    this.arrDishes = this.serviceMenu.getDishes();
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
