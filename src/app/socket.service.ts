import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as io from "socket.io-client";

@Injectable()
export class SocketService {
  private name: string;
  private host: string = "http://localhost:3000";
  socket: SocketIOClient.Socket;

  constructor() { }

  connect(): void {
    this.socket = io.connect(this.host);
    this.socket.on("connect", () => this.connected());
    this.socket.on("disconnect", () => this.disconnected());
    this.socket.on("error", this.onError);
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  emit(key: string, msg: Object): void {
    this.socket.emit(key, msg);
  }

  on(key: string): Observable<any> {
    return Observable.create(observer => {
      this.socket.on(key, (data) => {
        observer.next(data);
      });
    });
  }

  private connected() {
    this.socket.emit("user", {
      name: this.name
    });
  }

  private disconnected() {
    console.log(`Socket disconnected!!!`);
  }

  private onError(error: string): void {
    console.log(`ERROR: "${error}" (${this.host})`);
  }
}