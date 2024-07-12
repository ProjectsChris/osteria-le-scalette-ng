import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images: string[] = ["https://pipe-without.pockethost.io/api/files/dch2mql50yitdmc/1379hqhemzj7s2u/photo0jpg_cn6ZL86A9Q.jpg", "https://pipe-without.pockethost.io/api/files/8ivefog6sm5n1ku/sqy6bgrasazpal7/0ddcd76d_e98e_412a_bc39_3b0cbd1a8e73_azIoJfYnya.JPG"]
  constructor() {
  }
}
