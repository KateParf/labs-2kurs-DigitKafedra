import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html'
})
export class Page2Component {
  constructor(private router: Router) {

  }
  goHome() {
    this.router.navigate(["/"]); // переход на корень приложения
  }
}
