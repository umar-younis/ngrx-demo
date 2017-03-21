import { Component } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Component({
  selector: "app-behavior-subject",
  template: `
  <div class="container">
    <h3> Subscriptions </h3>
    <h5 *ngFor="let s of executions">{{s.title}} : {{s.data}}</h5>
  </div>
  `
})

export class BehaviorSubjectComponent {
  subject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  executions: any[] = [];
  constructor() {
    this.subject.asObservable().subscribe(d => {
      this.executions.push({
        title: "One",
        data: d
      });
      console.log("Subscription One: ", d);
    });

    this.subject.next(1);

    this.subject.asObservable().subscribe(d => {
      this.executions.push({
        title: "Two",
        data: d
      });
      console.log("Subscription Two: ", d);
    });

    this.subject.next(2);

    this.subject.asObservable().subscribe(d => {
      this.executions.push({
        title: "Three",
        data: d
      });
      console.log("Subscription Three: ", d);
    });

    // this.subject.next(3);

    this.subject.asObservable().subscribe(d => {
      this.executions.push({
        title: "Four",
        data: d
      });
      console.log("Subscription Four: ", d);
    });
  }
}