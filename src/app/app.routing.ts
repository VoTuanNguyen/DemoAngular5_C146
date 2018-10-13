import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'binding',
    pathMatch: 'full',
  }, {
    path: '',
    component: LayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './components/layout/layout.module#LayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'binding'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
