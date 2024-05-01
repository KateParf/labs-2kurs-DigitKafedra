import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './forlaba3/home/home.component';
import { ShowNameComponent } from './forlaba2/laba2.component';
import { Page1Component } from './forlaba3/page1/page1.component';
import { Page2Component } from './forlaba3/page2/page2.component';
import { Page3Component } from './forlaba3/page3/page3.component';
import { Page4Component } from './forlaba5/page4/page4.component';
import { PageParentComponent } from './forlaba4/pageParent/pageParent.component';
import { PageChildComponent } from './forlaba4/pageChild/pageChild.component';

import { confirmInGuard } from './core/guards/confirm-in.guard';
import { confirmOutGuard } from './core/guards/confirm-out.guard';
import { DataService } from './core/services/dataJson.service';
import { ItalicDirective } from './core/directive/italic.directive';

import { PowerPipe } from './core/pipes/power.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component, canActivate: [confirmInGuard]},
  { path: 'page3', component: Page3Component, canActivate: [confirmOutGuard]},
  { path: 'forlaba2/:name', component: ShowNameComponent },
  { path: 'pageParent', component: PageParentComponent },
  { path: 'pageChild', component: PageChildComponent },
  { path: 'page4', component: Page4Component }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    PageParentComponent,
    PageChildComponent,
    ShowNameComponent,
    ItalicDirective,
    Page4Component,
    PowerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
