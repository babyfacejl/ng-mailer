import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {EmailFormComponent} from './components/email-form.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {EmailService} from './services/email.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EmailFormComponent
      ],
      imports: [FormsModule, HttpModule],
      providers: [EmailService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
