import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageList: Array<any> = [];
  message: object = {};

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.connect();
    this.chat.chatSubject.subscribe( value => {
      this.messageList.push(value);
    });
  }

  sendMessage() {
    this.chat.send(this.message);
  }

}
