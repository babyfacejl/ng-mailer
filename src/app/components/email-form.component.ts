import { Component } from '@angular/core';
import { Email } from '../models/email';
import {EmailService} from '../services/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {

  constructor(private emailService: EmailService) {}

  model = new Email();
  statusMsg = "";
  submitted: boolean = false;
  btnClick : boolean = false;

  onSubmit() {
    this.btnClick = true;
    this.emailService.sendEmail(this.model).subscribe(
      res => {
        console.log(res);
        if (res.json().sendStatus == 'OK') {
          this.statusMsg = "Mail sent."
          this.submitted = true;
        }
        else {
          this.statusMsg = res.json().body;
          this.submitted = false;
          this.btnClick = false;
        }
      },
      error => {
        console.log(error);
        this.statusMsg = error.message;
        this.submitted = false;
        this.btnClick = false;
      }
    );
  }

}
