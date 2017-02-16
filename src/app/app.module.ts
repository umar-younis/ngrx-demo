import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// @ngrx libraries
import { StoreModule } from '@ngrx/store';
import { DBModule } from '@ngrx/db';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AddBookComponent } from './books/add/add.book';
import { ViewBooksComponent } from './books/view/view.books';
import { BookComponent } from './books/book/book.component';

import { booksReducer, CustomRouter } from "./reducers";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddBookComponent,
    ViewBooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DBModule,
    RouterModule.forRoot([
      { path: '', component: ViewBooksComponent },
      { path: 'addBook', component: AddBookComponent },
      { path: 'book/:id', component: BookComponent },
    ]),
    StoreModule.provideStore({ books: booksReducer, router: routerReducer }),
    RouterStoreModule.connectRouter()
  ],
  providers: [ CustomRouter ],
  bootstrap: [AppComponent]
})
export class AppModule { }
