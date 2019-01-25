import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from '../http.service'



@Component({
  selector: 'app-nester',
  templateUrl: './nester.component.html',
  styleUrls: ['./nester.component.css']
})
export class NesterComponent implements OnInit {
  @Input() shown_task;
  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
  }

  editTask(id) {
    this._httpservice.editTask(id,this.shown_task).subscribe((data: any) => {
      console.log('Editing Data',data);
      this.shown_task= data;
      console.log("Edit Complete");
    });
  }

}