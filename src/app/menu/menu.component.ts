import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ols-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
}
