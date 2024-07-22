import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // TODO: change the type
  arrCategoryMenu$: BehaviorSubject<any>;
  arrDishes$: BehaviorSubject<any>;

  constructor(private http: HttpClient, private translateService: TranslateService) {
    this.arrCategoryMenu$ = new BehaviorSubject([]);
    this.arrDishes$ = new BehaviorSubject([]);
  }

  // method for fetch all categories of menu
  fetchDataCategoryMenu(): void {
    this.http.get('https://pipe-without.pockethost.io/api/collections/categorie_menu/records?sort=order,name&filter=(order>0)').subscribe(
      (res: any) => {
        this.arrCategoryMenu$.next(res.items)
      }
    );
  }

  // method for fetch all dishes of menu
  fetchDataDishes(): void {
    this.http.get('https://pipe-without.pockethost.io/api/collections/piatti_' + this.translateService.currentLang + '/records?perPage=54').subscribe(
      (res: any) => {
        this.arrDishes$.next(res.items);
      }
    );
  }

  // get list of all categories of menu
  getCategoriesMenu(): BehaviorSubject<any> {
    return this.arrCategoryMenu$;
  }

  // get all dishes of menu
  getDishes(): BehaviorSubject<any> {
    return this.arrDishes$;
  }
}
