import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formGroup!: FormGroup;
  titleAlert: string = 'Field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.email], this.checkInUseEmail],
      'name': [null, Validators.required],
      'password': [null, [Validators.required, this.checkPassword]],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }

  setChangeValidate() {
    const validateControl = this.formGroup.get('validate');

    if (validateControl !== null) {
      this?.formGroup?.get('validate')?.valueChanges.subscribe(
        (validate) => {
          if (validate == '1') {
            this?.formGroup?.get('name')?.setValidators([Validators.required, Validators.minLength(3)]);
            this.titleAlert = "You need to specify at least 3 characters";
          } else {
            this?.formGroup?.get('name')?.setValidators(Validators.required);
          }
          this?.formGroup?.get('name')?.updateValueAndValidity();
        }
      )
    }
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  checkPassword(control: any) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseEmail(control: any) {
    // mimic http database access
    let db = ['jack@torchwood.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }

  getErrorEmail() {
    return this?.formGroup?.get('email')?.hasError('required') ? 'Field is required' :
      this?.formGroup?.get('email')?.hasError('pattern') ? 'Not a valid email address' :
        this?.formGroup?.get('email')?.hasError('alreadyInUse') ? 'This email address is already in use' : '';
  }

  getErrorPassword() {
    return this?.formGroup?.get('password')?.hasError('required') ? 'Field is required' :
      this?.formGroup?.get('password')?.hasError('requirements') ? 'Password needs to be at least six characters, one uppercase letter and one number' : '';
  }

  onSubmit(post: any) {
    this.post = post;
  }
}
