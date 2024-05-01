import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-pageParent',
  templateUrl: './pageParent.component.html'
})
export class PageParentComponent {

  title = 'Parent';

  dataForm: FormGroup = new FormGroup({
    "formName": new FormControl('', [Validators.required, Validators.pattern(/^[A-ZА-Я]{1}[a-zа-я]+$/)]),
    "formEmail": new FormControl('', [Validators.required, Validators.email]),
    "formAge": new FormControl(0, [Validators.required, this.ageValidator]),
  });

  ageValidator(control: FormControl): ValidationErrors | null {
    if (Number.isFinite(control.value) && Number(control.value) >= 0) {
      return null; // null когда все ок
    }
    return { "formAge": true }; // все не ок
  }

  users: User[] = [];

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(["/"]); // переход на корень приложения
  }

  addUserInfo() {
    let data = this.dataForm.getRawValue();
    this.users.push(new User(data.formName, data.formAge, data.formEmail));
  }

}

export class User {
  constructor(public name: string, public age: number, public email: string) { }
}