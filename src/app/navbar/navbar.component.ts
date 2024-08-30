import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesService } from '../services/languages.service';
import { BehaviorSubject } from 'rxjs';
import { Languages } from '../types/Languages';

@Component({
  selector: 'ols-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('menuFlags') menuFlags!: ElementRef;
  
  arrLanguages$: BehaviorSubject<Array<Languages>>;
  currentLang!: Languages;

  constructor(private renderer: Renderer2, private translateService: TranslateService, private menuService: MenuService, private languagesService: LanguagesService) {
    this.arrLanguages$ = new BehaviorSubject<Array<Languages>>([]);
    this.currentLang = {
      id: "",
      language: "",
      code: "",
      enabled: false,
      image: "",
    };
  }
  
  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((event: any) => {
      this.languagesService.getData().subscribe((el) => {{
        el.forEach((x: Languages) => {
          if (x.code == this.translateService.currentLang) {
            this.currentLang = x
          }
        })
      }})
      
      this.arrLanguages$ = this.languagesService.getData();
    });
  }

  openMenu(): void {
    // console.log(this.menu.nativeElement.classList.contains('open'))
    this.renderer.addClass(this.menu.nativeElement, 'open');
    // this.renderer.setStyle(this.menu.nativeElement, "transition", "transform 0.7s ease-in-out")
    // console.log(this.menu.nativeElement.classList.contains('open'))
  }
  
  
  openMenuFlags(): void {
    this.renderer.addClass(this.menuFlags.nativeElement, 'openMenuFlag');
  }
  
  closeMenuFlags(): void {
    this.renderer.removeClass(this.menuFlags.nativeElement, 'openMenuFlag');
  }

  closeMenu(): void {
    this.renderer.removeClass(this.menu.nativeElement, 'open');
  }
  
  changesLang(lang: string): void {
    this.translateService.use(lang);
  }
}
