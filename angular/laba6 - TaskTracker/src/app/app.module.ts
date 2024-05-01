import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TaskFormComponent } from './task/taskForm.component';
import { TasksComponent } from './tasks/tasks.component';

import { RedDirective } from './core/directive/red.directive';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'taskForm/:id', component: TaskFormComponent },
  { path: 'tasks', component: TasksComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TasksComponent,
    TaskFormComponent,
    RedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'ru'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
