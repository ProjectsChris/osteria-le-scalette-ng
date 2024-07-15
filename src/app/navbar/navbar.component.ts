import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'ols-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('menu') menu!: ElementRef;

  constructor(private renderer: Renderer2) { }

  openMenu(): void {
    // console.log(this.menu.nativeElement.classList.contains('open'))
    this.renderer.addClass(this.menu.nativeElement, 'open');
    // this.renderer.setStyle(this.menu.nativeElement, "transition", "transform 0.7s ease-in-out")
    // console.log(this.menu.nativeElement.classList.contains('open'))
  }

  closeMenu(): void {
    this.renderer.removeClass(this.menu.nativeElement, 'open');
  }
}
