import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forlaba2',
  templateUrl: './laba2.component.html'
})
export class ShowNameComponent implements OnInit {

  userName: string = '';

  constructor(private activateRouter: ActivatedRoute,
    private router: Router) {
    this.userName = activateRouter.snapshot.params['name'];
  }

  goHome() {
    this.router.navigate(["/"]); // переход на корень приложения
  }
  
  showName(): void {
    if (this.userName != '')
      alert("Привет, " + this.userName);
    else
      alert("Введите имя");

  }

  onChange(event: Event) {
    // получаем значение из инпута
    const name = (event.target as HTMLInputElement).value;
    this.userName = name;
  }

  ngOnInit(): void {
    console.log('Страница готова');
  }
  ngDoCheck(): void {
    console.log('Изменения свойств');
  }
  ngAfterContentInit(): void {
    console.log('Содержимое вставлено');
  }
  ngAfterContentChecked(): void {
    console.log('Проверка изменений всавляемого содержимого');
  }
  ngAfterViewInit(): void {
    console.log('Произошла инициализация представления компонента');
  }
  ngAfterViewChecked(): void {
    console.log('Проверка изменения представления компонента');
  }
  ngOnDestroy(): void {
    console.log('Сейчас удалим компонент');
  }

}
