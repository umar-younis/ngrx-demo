import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// @ngrx libraries
import { StoreModule } from '@ngrx/store';
import { DBModule } from '@ngrx/db';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';
// import { NOTIFY_PROVIDERS, NOTIFY_GLOBAL_OPTIONS } from '@ngrx/notify';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AddBookComponent } from './books/add/add.book';
import { ViewBooksComponent } from './books/view/view.books';
import { BookComponent } from './books/book/book.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject.component';
import { SubjectComponent } from './subjects/subject.component';
import { MdlModule } from "angular2-mdl";
import { AppService } from "./app.service";
import { booksReducer, CustomRouter, categoryReducer } from "./reducers";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddBookComponent,
    ViewBooksComponent,
    BookComponent,
    SubjectComponent,
    BehaviorSubjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DBModule,
    MdlModule,
    RouterModule.forRoot([
      { path: '', component: ViewBooksComponent },
      { path: 'addBook', component: AddBookComponent },
      { path: 'book/:id', component: BookComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'behaviorsubject', component: BehaviorSubjectComponent },
    ]),
    StoreModule.provideStore({ books: booksReducer, router: routerReducer, category: categoryReducer }),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [
    CustomRouter,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
