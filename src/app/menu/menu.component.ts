import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { CategoryMenu, Dish } from '../types/ResponseTypes';
import { BehaviorSubject } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ols-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {  
  arrCategoryMenu$: BehaviorSubject<any>;
  arrDishes$: BehaviorSubject<any>;
  
  constructor(private serviceMenu: MenuService, private translateService: TranslateService) {
    this.arrCategoryMenu$ = new BehaviorSubject([]);
    this.arrDishes$ = new BehaviorSubject([]);
  }
  
  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    this.serviceMenu.fetchDataCategoryMenu();
    this.serviceMenu.fetchDataDishes();
    
    this.arrCategoryMenu$ = this.serviceMenu.getCategoriesMenu();
    this.arrDishes$ = this.serviceMenu.getDishes();
    
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.serviceMenu.fetchDataCategoryMenu();
      this.serviceMenu.fetchDataDishes();
      
      this.arrCategoryMenu$ = this.serviceMenu.getCategoriesMenu();
      this.arrDishes$ = this.serviceMenu.getDishes();
    });
  }
  
  // create a function for return all dishes with only specific parameters
  getArrDishes(idCategory: string, typeDish: string) {
    let dishes: any[] = [];
    console.log(typeDish)
    
    this.arrDishes$.forEach((el) => {
      for(let i = 0; i < el.length; i++) {
        if (el[i].categoria_menu == idCategory && el[i].tipologia == typeDish) {
          dishes.push(el[i])
        }
      }
    })
    
    return dishes;
  }
  
  getTypeNumColumn(arr: Dish[]): number {
    let iLen: number = 0;
    
    if (arr.length == 1) {
      iLen = 1;
    }
    
    if (arr.length == 2) {
      iLen = 2;
    }
    
    if (arr.length >= 3) {
      iLen = 3
    }
    
    return iLen;
  }
}