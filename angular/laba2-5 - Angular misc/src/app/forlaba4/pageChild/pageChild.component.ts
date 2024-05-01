import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pageChild',
  templateUrl: './pageChild.component.html'
})
export class PageChildComponent {

  title = 'Child';
  users: User[] = [];

  name = '';
  email = '';
  age = 0;

  nameError = false;
  emailError = false;

  constructor(private router: Router) {
  }
  goHome() {
    this.router.navigate(["/"]); // переход на корень приложения
  }

  addUser() {
    if (this.name !== '' && this.email !== '' && this.age > 0) {
        this.users.push(new User(this.name, this.email, this.age));
        this.name = '';
        this.email = '';
        this.age = 0;
        this.nameError = false;
        this.emailError = false;
    }
  }

  onNameChange(): void {
    let nameRegexp: RegExp = /^[A-ZА-Я]{1}[a-zа-я]+$/;
    if (!nameRegexp.test(this.name)) {
      this.nameError = true;
    }
  }
  onEmailChange(): void {
    let emailRegexp: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegexp.test(this.email)) {
      this.emailError = true;
    }
  }

}

export class User {

  constructor(
    public name: string,
    public email: string,
    public age: number
  ) { }

}