import {Component, OnInit} from '@angular/core';
import { EmailService} from './services/email.service';
import {Email} from './models/email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // email: Email;
  // errorMessage: String;

  constructor() {

  }

  public ngOnInit(): void {
    // this.email = new Email();
  }
}


