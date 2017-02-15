import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book, ADD_BOOK } from "../../reducers";

@Component({
  selector: 'app-add-book',
  templateUrl: './add.book.html'
})
export class AddBookComponent {
  book: any = {
    name: "",
    author: "",
    type: ""
  };
  constructor(private store: Store<any>) { }

  addBook(): void {
    let book = {
      name: this.book.name,
      author: this.book.author,
      type: this.book.type
    };
    this.store.dispatch({
      type: ADD_BOOK,
      payload: book
    });
    this.resetBook();
  }

  resetBook(): void {
    this.book.name = "";
    this.book.author = "";
    this.book.type = "";
  }
}
