import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AppService {
  private api: string = "http://localhost:3000";
  constructor(private http: Http) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.api}/categories`).map(res => res.json());
  }
}