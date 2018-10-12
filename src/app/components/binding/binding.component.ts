import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  en: string = "Hello World!";
  vi: string = "Chào thế giới!";
  flag: boolean = false;
  myColor: string = 'red';
  textInput: string = 'Xin chào các bạn!';
  color: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  changeColor() {
    this.color = !this.color;
    this.myColor = this.color ? 'red' : 'lightblue';
    this.flag = !this.flag;
  }
  isShow: boolean = false;
  hidden() {
    this.isShow = !this.isShow;
  }
}
