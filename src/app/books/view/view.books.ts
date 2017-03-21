import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Book, RESET, ADD_BOOK, REMOVE_BOOK } from "../../reducers";
import { Observable, Subscription, BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-view-books',
  templateUrl: './view.books.html'
})
export class ViewBooksComponent {
  books: Observable<Book[]>;
  constructor(private _store: Store<any>) {
    this.books = this._store.select("books");
  }
}
