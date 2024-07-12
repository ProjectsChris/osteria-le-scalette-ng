import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CategoryMenu, Dish, ResDishes } from '../types/ResponseTypes';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnInit {
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    
  }
  
  getNameMenu(): CategoryMenu[] {
    let arrCategoryMenu: CategoryMenu[] = []
    
    this.http.get('https://pipe-without.pockethost.io/api/collections/categorie_menu/records?sort=order,name&filter=(order>0)').subscribe(
      (res: any) => {
        res.items.forEach((c: any) => {
          // adds info category menu inside an array of categories
          arrCategoryMenu.push({
            id: c.id,
            name: c.name
          });
        });
      }
    );
    
    return arrCategoryMenu;
  }
  
  getListDishes(): Dish[] {
    let arrDishes: Dish[] = [];
    
    this.http.get('https://pipe-without.pockethost.io/api/collections/piatti/records?perPage=54').subscribe(
      (res: any) => {
        res.items.forEach((d: any) => {
          arrDishes.push({
            idCategory: d.categoria_menu,
            typeDish: d.tipologia,
            name: d.nome
          });
        });
      }
    );
    
    return arrDishes;
  }
}
