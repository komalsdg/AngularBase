import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public submitForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    verifyPassword: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    this.submitForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      verifyPassword: ['', Validators.compose([Validators.required, this.verifyPassword])],
    });
  }

  get submitFormControl() {
    return this.submitForm.controls;
  }

  verifyPassword(control : AbstractControl): ValidationErrors | null{
      const verifyPasswordValue = control.value;
      const passwordValue = control.get(['passwords'])?.value;
      if (verifyPasswordValue !== passwordValue) {
        return { invalidVerifyPassword: true };
      }
      return null;
  }

  onSubmit(): void {
    if (this.submitForm.valid) {
      console.error('submit Form', this.submitForm);
    }
  }
}
