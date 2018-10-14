import { Component, OnInit, OnChanges, Input, AfterContentChecked, 
  AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childs',
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.scss']
})
export class ChildsComponent implements OnInit, OnChanges, AfterContentChecked, 
AfterContentInit, AfterViewChecked, AfterViewInit {
  index: number = 1;
  indexOnChange: number = 1;
  @Input() value: string;

  constructor() {
    console.log('Constructor component called!');
   }

  ngOnChanges(changes: SimpleChanges): void {
    this.indexOnChange === 1 ? console.log('ngOnchanges component called!') : console.log('ngOnchanges component called again! Times: ' + this.index);
    this.indexOnChange ++;
  }

  ngOnInit() {
    console.log('ngOnInit component called!');
  }
  ngDoCheck() {
    this.index === 1 ? console.log('ngDoCheck called!') : console.log('ngDoCheck called again! Times: ' + this.index);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    this.index === 1 ? console.log('ngAfterContentChecked called!') : console.log('ngAfterContentChecked called again! Times: ' + this.index);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked() {
    this.index === 1 ? console.log('ngAfterViewChecked called!') : console.log('ngAfterViewChecked called again! Times: ' + this.index);
    this.index++;
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
