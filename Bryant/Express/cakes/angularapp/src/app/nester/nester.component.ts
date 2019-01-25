import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nester',
  templateUrl: './nester.component.html',
  styleUrls: ['./nester.component.css']
})
export class NesterComponent implements OnInit {
  @Input () show_cake={}
  @Input () avg= 0;
   
  constructor() { }

  ngOnInit() {
  }

}
