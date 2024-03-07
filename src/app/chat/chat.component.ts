import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [];
  username: string = '';

  constructor(public chatService: ChatService, private router: Router) { }

  ngOnInit(): void {
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage(): void {
    if (this.username.trim() !== '') {
      // Emit a join message
      const joinMessage: Message = {
        author: 'user',
        content: `${this.username} joined`
      };
      this.chatService.conversation.next([joinMessage]);

      // Navigate to the sign-in page
      this.router.navigate(['/signin', { username: this.username }]);
    }
  }
}
  

