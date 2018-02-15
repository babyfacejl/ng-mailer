import { Component } from '@angular/core';

import { Email } from '../models/email';
import {EmailService} from '../services/email.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {

  constructor(private emailService: EmailService) {}

  model = new Email();
  status = "";
  submitted = false;

  onSubmit() {
    this.emailService.sendEmail(this.model).subscribe(
      res => {
        console.log(res);
        this.model.id = res.json().body;
        this.status = res.json().sendStatus;
        this.submitted = true;
      },
      error => {
        console.log(error);
        this.status = error.message;
        this.submitted = false;
      }
    );
  }

}
