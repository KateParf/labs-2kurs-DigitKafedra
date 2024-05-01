import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Vehicle } from '../../core/services/dataJson.service';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html'
})
export class Page1Component {
  vehicles: Vehicle[] = [];

  constructor(private DataService: DataService, private router: Router) {}

  goHome() {
    this.router.navigate(["/"]); // переход на корень приложения
  }
  
  getJson() {
    this.DataService.getVehicles()
    .pipe(
      filter(data => data != null),
      map((data => (data.map(vehicles => ({...vehicles, brand: 'Марка ' + vehicles.brand})))))
    )
    .subscribe((vehicles) => {
        this.vehicles = vehicles;
    });
  }

}
