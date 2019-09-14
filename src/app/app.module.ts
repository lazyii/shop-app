import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRootComponent } from './components/app-root/app-root.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PeopleAuthComponent } from './components/people-auth/people-auth.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', component: PeopleAuthComponent },
  { path: '**', component: ProductDetailComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, /* { enableTracing: !environment.production } */)
  ],
  declarations: [
    AppRootComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailComponent,
    PeopleAuthComponent
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