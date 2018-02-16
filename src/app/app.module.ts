import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmailFormComponent } from './components/email-form.component';
import {HttpModule} from '@angular/http';
import {EmailService} from './services/email.service';
import {EmailsValidator} from './components/emails-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
    EmailsValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
