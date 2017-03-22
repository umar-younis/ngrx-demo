import { ActionReducer, Action } from "@ngrx/store";
import { Database } from "@ngrx/db";

export const ADD_CATEGORY = "ADD_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";

export interface Category {
  _id: string;
  name: string;
}

export function categoryReducer(state: Category[] = [], action: Action): any {
  switch (action.type) {
    case ADD_CATEGORY:
      state.push(action.payload);
      return state;

    case "RESET":
      return [];

    default:
      return state;
  }
}