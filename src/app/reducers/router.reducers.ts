import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { go, replace, show, search, back, forward } from "@ngrx/router-store";

@Injectable()
export class CustomRouter {
  constructor(private store: Store<any>) {}

    // Navigation with a new state into history
  navigate(path): void {
    this.store.dispatch(go(path));
  }

  // Navigation with replacing the current state in history
  navigateAndReplace(path): void {
    this.store.dispatch(replace(path));
  }

  // Navigation without pushing a new state into history
  navigateWithoutPush(path): void {
    this.store.dispatch(show(path));
  }

  // Navigation with only changing query parameters
  addQuery(query): void {
    this.store.dispatch(search({ query : query}));
  }

  // Navigation back
  navigateBack(): void {
    this.store.dispatch(back());
  }

  // Navigation forward
  navigateForward(): void {
    this.store.dispatch(forward());
  }
}