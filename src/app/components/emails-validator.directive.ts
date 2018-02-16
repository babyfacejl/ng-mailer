import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS,Validator,
  Validators,AbstractControl,ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[emails][formControlName],[emails][formControl],[emails][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EmailsValidator, multi: true }
  ]
})
export class EmailsValidator implements Validator {
  // constructor( @Attribute('valid') public valid: string) {}

  validate(c: AbstractControl): { [key: string]: any } {
    let emails = c.value;
    let allGood = true;
    if (emails) {
      for (let email of emails.split(",")) {
        console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
        if (email.trim() !== '' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          console.log("valid=false");
          return {'valid' : false};
        }
      }
      return null;
    }
  }
}
