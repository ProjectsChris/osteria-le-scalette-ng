import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { CategoryMenu, Dish } from '../types/ResponseTypes';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ols-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {  
  arrCategoryMenu$: BehaviorSubject<any>;
  arrDishes$: BehaviorSubject<any>;
  tempLang: string = ''
  
  constructor(private serviceMenu: MenuService, private translateService: TranslateService) {
    this.arrCategoryMenu$ = new BehaviorSubject([]);
    this.arrDishes$ = new BehaviorSubject([]);
  }
  
  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    combineLatest(this.translateService.currentLang).subscribe((el) => {
      console.log(el);
    })
    
    this.serviceMenu.fetchDataCategoryMenu();
    this.serviceMenu.fetchDataDishes();
    
    this.arrCategoryMenu$ = this.serviceMenu.getCategoriesMenu();
    this.arrDishes$ = this.serviceMenu.getDishes();
    
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(this.translateService.currentLang)
      if (this.tempLang == '') {
        this.tempLang = this.translateService.currentLang;
      }
      
      if (this.tempLang != this.translateService.currentLang) {
        this.serviceMenu.fetchDataCategoryMenu();
        this.serviceMenu.fetchDataDishes();
        
        this.arrCategoryMenu$ = this.serviceMenu.getCategoriesMenu();
        this.arrDishes$ = this.serviceMenu.getDishes();
      }
      
      this.tempLang = this.translateService.currentLang;
    });
  }
  
  // create a function for return all dishes with only specific parameters
  // getArrDishes(idCategory: string, typeDish: string) {
  //   let dishes: Dish[] = [];
    
  //   this.arrDishes.forEach((d) => {
  //     if (d.idCategory == idCategory && d.typeDish == typeDish) {
  //       dishes.push(d);
  //     }
  //   });
    
  //   return dishes;
  // }
}
