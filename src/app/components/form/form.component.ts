import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  address = '';
  notSubmit = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(ngForm) {
    this.notSubmit = true;
    if (ngForm.invalid) {
      console.log("Fail!");
    } else {
      console.log(ngForm.value);
    }
  }
}
