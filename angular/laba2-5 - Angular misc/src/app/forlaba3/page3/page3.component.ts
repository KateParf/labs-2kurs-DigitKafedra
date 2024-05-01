import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html'
})
export class Page3Component {
  constructor(private router: Router) {

  }
  goHome() {
    this.router.navigate(["/"]); // переход на корень приложения
  }
}
