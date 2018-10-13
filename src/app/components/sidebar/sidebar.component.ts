import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/binding', title: 'Binding',  icon: 'pe-7s-link', class: '' },
    { path: '/directive', title: 'Directive',  icon:'pe-7s-right-arrow', class: '' },
    { path: '/form', title: 'Form',  icon:'pe-7s-news-paper', class: '' },
    { path: '/service', title: 'Info',  icon:'pe-7s-server', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
