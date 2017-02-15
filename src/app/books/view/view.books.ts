import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Book, RESET, ADD_BOOK, REMOVE_BOOK } from "../../reducers";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-view-books',
  templateUrl: './view.books.html'
})
export class ViewBooksComponent implements OnInit, OnDestroy {
  booksSource: Observable<Book[]>;
  books: Book[];
  booksSubscription: Subscription;
  constructor(private _store: Store<any>) {
    this.booksSource = this._store.select("books");
    this.subscribeBooks();
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.booksSubscription) {
      this.booksSubscription.unsubscribe();
      this.booksSubscription = null;
    }
  }

  private subscribeBooks(): void {
    if (!this.booksSubscription) {
      this.booksSubscription = this.booksSource.subscribe(b => {
        this.books = b;
      });
    }
  }
}
