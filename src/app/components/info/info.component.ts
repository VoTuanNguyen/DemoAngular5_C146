import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  person:any = [];

  constructor(private myservice: MyServiceService) { }

  ngOnInit() {
    this.myservice.getInfo().subscribe( rs =>{
      this.person = rs;
    });
  }

}
