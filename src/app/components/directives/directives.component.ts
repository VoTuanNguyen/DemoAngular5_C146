import { Component, OnInit } from '@angular/core';
import { Hero, heroes } from '../../model/hero.model';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  heroes = heroes;
  hero = this.heroes[0];
  hidden = true;
  change = true;
  myColor = 'black';
  highlight = '';

  constructor() { }

  ngOnInit() {
  }
  show(){
    this.hidden = !this.hidden;
  }
  changeTextColor(){
    this.change = !this.change;
    this.change ? this.myColor = 'black' : this.myColor = 'red';
  }
  changeHighlight(){
    this.highlight = 'red';
  }
}
