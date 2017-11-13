import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ChatService {

  socket = null;
  chatSubject: Subject<any> = new Subject();

  constructor() { }

  connect() {
    this.socket = io("ws://localhost:3100");
    this.socket.on("serverMessage", (data) => {
      data = JSON.parse(data);
      console.log(data);
      this.chatSubject.next(data);
    });
  }

  send(data) {
    if (this.socket == null) {
      this.connect();
    }

    this.socket.emit("message", JSON.stringify(data));
  }

}
