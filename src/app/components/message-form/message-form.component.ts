import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  message : any = {};
  msg: string;
 // @Input('messages')
  messages : any = [];

  ngOnInit() {
  }

  public sendMessage(): void {
  console.log(this.msg);
    //this.message.timestamp = new Date();
//    console.log(this.message);
//    this.message.content = this.msg;
      var d:any = {};
      d.content = this.msg;
      d.timestamp = new Date();
      console.log(d);
    this.messages.push(d);

//    this.message = new Message('', 'assets/images/user.png');
  }

}