import { Component, OnInit } from '@angular/core';
import contacts from '../models/contacts.json';
import contactsCode from '../models/contacts_code.json';

@Component({
  selector: 'app-send-messages',
  templateUrl: './send-messages.component.html',
  styleUrls: ['./send-messages.component.css']
})
export class SendMessagesComponent implements OnInit {

  videoLink: string = '';
  sharedLink: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  submit() {
    alert('Video link added, you can send messages now');
    this.sharedLink = this.videoLink;
    this.videoLink = '';
  }

  sendMessage(contact: string, input: any) {
    let url = this.whatsappUrl + contact + '?text=' + this.sharedLink;
    console.log('url', url)
    window.open(url, '_blank', 'location=yes');
  }


  whatsappUrl: string = 'https://api.whatsapp.com/send?phone=';

  loadData() {
    let self = this;
    contacts.forEach((contact: string) => {
      let button = document.createElement("input");
      button.type = 'button';
      button.value = contact;
      button.style.setProperty('margin-left', '15px');
      button.setAttribute('class', 'primary_button');
      button.style.setProperty('margin-top', '15px');
      button.onclick = function () {
        if (self.sharedLink === '') {
          alert("Please add video link");
          return;
        }
        let url = self.whatsappUrl + contact + '&text=' + self.sharedLink;
        console.log('url:', url)
        window.open(url, '_blank', 'location=yes');
        button.setAttribute('class', 'positive_button')
      };
      document.getElementById('load-contacts').appendChild(button);
    });
  }

}
