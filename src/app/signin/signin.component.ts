import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
  username: string = ''; 
  messages:Message[]=[];
  value:string | undefined
  dialogInfo: boolean = false;
  nameField: string = '';
  

  constructor(public chatService:ChatService) { }
  
  ngOnInit():void{
    this.chatService.conversation.subscribe((val)=>{
      this.messages=this.messages.concat(val);
    });

  }

  sendMessage() {
     this.chatService.getBotAnswer(this.value);
     this.value=''
  }

}
