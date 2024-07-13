import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryMenu, Dish, ResponseCategoryMenu, ResponseDish } from '../types/ResponseTypes';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private arrCategoryMenu: CategoryMenu[] = []; 
  private arrDishes: Dish[] = [];

  constructor(private http: HttpClient) { }

  // method for fetch all categories of menu
  fetchDataCategoryMenu(): void {
    if (this.arrCategoryMenu.length == 0) {
      this.http.get('https://pipe-without.pockethost.io/api/collections/categorie_menu/records?sort=order,name&filter=(order>0)').subscribe(
        (res: any) => {
          res.items.forEach((c: ResponseCategoryMenu) => {
            this.setCategoryMenu(c);
          });
        }
      );
    }
  }

  // method for fetch all dishes of menu
  fetchDataDishes(): void {
    if (this.arrDishes.length == 0) {
      this.http.get('https://pipe-without.pockethost.io/api/collections/piatti/records?perPage=54').subscribe(
        (res: any) => {
          res.items.forEach((d: ResponseDish) => {
            this.setDish(d);
          });
        }
      );
    }
  }

  // get list of all categories of menu
  getCategoriesMenu(): CategoryMenu[] {
    return this.arrCategoryMenu;
  }

  // adds new category of menu inside an array
  setCategoryMenu(c: ResponseCategoryMenu): void {
    this.arrCategoryMenu.push({
      id: c.id,
      name: c.name
    });
  }

  // get all dishes of menu
  getDishes(): Dish[] {
    return this.arrDishes;
  }

  // adds new dish inside an array
  setDish(d: ResponseDish): void {
    this.arrDishes.push({
      idCategory: d.categoria_menu,
      typeDish: d.tipologia,
      name: d.nome
    });
  }
}
