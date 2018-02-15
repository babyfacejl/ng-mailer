import { HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Email} from '../models/email';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmailService {

  // headers = new Headers({ 'Content-Type': 'application/json' });
  // options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
  }

  sendEmail(email: Email) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url : string = "/api/send";
    return this.http.post(url, JSON.stringify(email), options);
  }

}
