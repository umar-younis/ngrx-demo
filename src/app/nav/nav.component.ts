import { Component } from '@angular/core';
import { CustomRouter } from "../reducers";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html'
})
export class NavComponent {

  constructor(private router: CustomRouter) { }

  navigate(path): void {
    this.router.navigate(path);
  }
}
