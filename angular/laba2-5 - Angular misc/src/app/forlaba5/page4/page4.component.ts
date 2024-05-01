import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html'
})
export class Page4Component {
  data: any;
  constructor(private router: Router) {}
  
  goHome() {
    this.router.navigate(["/"]); // переход на корень приложения
  }

}
