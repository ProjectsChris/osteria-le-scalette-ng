import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, pipe, tap } from 'rxjs';
import { Languages, ResponseLanguages } from '../types/Languages';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  arrLanguages$: BehaviorSubject<Array<Languages>>;

  constructor(private http: HttpClient) {
    this.arrLanguages$ = new BehaviorSubject<Array<Languages>>([]);
    this.fetchData();
  }
  
  // method for fetch all data from collection "Languages"
  fetchData(): void {
    this.http.get("https://pipe-without.pockethost.io/api/collections/languages/records?filter=(enabled=true)").pipe(
      map((x: any) => ({
        items: x.items.map((item: Languages) => ({
          ...item,
          image: "https://pipe-without.pockethost.io/api/files/languages/" + item.id + "/" + item.image
        }))
      }))
    ).subscribe(
      (res: ResponseLanguages) => {
        this.arrLanguages$.next(res.items);
      }
    );
  }
  
  getData(): BehaviorSubject<Array<Languages>> {
    return this.arrLanguages$;
  }
}
