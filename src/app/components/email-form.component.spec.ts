import { TestBed, async } from '@angular/core/testing';
import { EmailFormComponent } from './email-form.component';
import { FormsModule } from '@angular/forms';
import {EmailService} from '../services/email.service';
import {Http, HttpModule} from '@angular/http';
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";
import {ComponentFixture, ComponentFixtureAutoDetect} from "@angular/core/testing";

describe('EmailFormComponent', () => {
  let component: EmailFormComponent;
  let fixture: ComponentFixture<EmailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmailFormComponent
      ],
      providers:[EmailService],
      imports: [FormsModule, HttpModule]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormComponent);
    component = fixture.componentInstance;
  });

  it('should render email form', async(() => {
    const fixture = TestBed.createComponent(EmailFormComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Email Form');
    expect(compiled.querySelector('input#from').name).toContain('from');
    expect(compiled.querySelector('input#to').name).toContain('to');
    expect(compiled.querySelector('input#bcc').name).toContain('bcc');
    expect(compiled.querySelector('input#cc').name).toContain('cc');
    expect(compiled.querySelector('input#subject').name).toContain('subject');
    expect(compiled.querySelector('textarea#text').name).toContain('text');
  }));

  it('should validate required fields', async(() => {
    const fixture = TestBed.createComponent(EmailFormComponent);
    const component = fixture.componentInstance;

    component.model.from = '';
    component.model.to = '';
    component.model.bcc = '';
    component.model.bcc = '';
    component.model.cc = '';
    component.model.subject = '';
    component.model.text = '';

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let from = fixture.debugElement.query(By.css('input[name=from]')).references['from'];
      let to = fixture.debugElement.query(By.css('input[name=to]')).references['to'];
      let bcc = fixture.debugElement.query(By.css('input[name=bcc]')).references['bcc'];
      let cc = fixture.debugElement.query(By.css('input[name=cc]')).references['cc'];
      let subject = fixture.debugElement.query(By.css('input[name=subject]')).references['subject'];
      let text = fixture.debugElement.query(By.css('textarea[name=text]')).references['text'];

      expect(from.valid).toBe(false);
      expect(to.valid).toBe(false);
      expect(bcc.valid).toBe(true);
      expect(cc.valid).toBe(true);
      expect(subject.valid).toBe(false);
      expect(text.valid).toBe(false);
    });

  }));
});
