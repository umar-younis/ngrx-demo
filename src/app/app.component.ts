import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private service: AppService, private store: Store<any>) { }
}
