import {
  Component, OnInit, AfterViewInit, AfterViewChecked,
  AfterContentChecked, AfterContentInit, OnChanges, OnDestroy, DoCheck, Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {
  value: string = '';

  constructor() {
  }

  ngOnInit() {
  }
}
