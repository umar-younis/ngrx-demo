import { ActionReducer, Action } from "@ngrx/store";

export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const RESET = "RESET";

export interface Book {
  name: string;
  author: string;
  type: string;
}

const initialState: Book[] = []

export function booksReducer(state = initialState, action: Action): any {
  switch (action.type) {
    case ADD_BOOK:
      state.push(action.payload);
      return state;
    
    case REMOVE_BOOK:
      state.splice(action.payload.index);
      return state;

    case RESET:
      return [];

    default:
      return state;
  }
}