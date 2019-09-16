import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

//angular material module import
import {AccordionModule} from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import {EditorModule} from 'primeng/editor';
//Alternatively, you can disable animations by importing NoopAnimationsModule.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRootComponent } from './components/app-root/app-root.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PeopleAuthComponent } from './components/people-auth/people-auth.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component';

//must start with '/'
const baseUrl = '/';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: Page404Component },
];
const materialModules = [
  AccordionModule, InputTextModule, EditorModule
];

@NgModule({
  providers: [{
    provide: APP_BASE_HREF,
    useValue: baseUrl
  }],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ...materialModules
  ],
  declarations: [
    AppRootComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailComponent,
    PeopleAuthComponent,
    Page404Component,
    LoginComponent
  ],
  bootstrap: [AppRootComponent],
  exports: []
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/