import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  all_task: any;
  show_task: any;
  new_task: any;
  edit_task: any;
  delete_task: any;
  edit_taskT = {};


  constructor(private _httpservice: HttpService) {
    console.log("ComponentAPPPP");
    

  }
  ngOnInit(){
    this.new_task = { title: "", description: "" }
    this.getTasks();
  }
  


   getTasks() {
    this._httpservice.getTasks().subscribe((data: any) =>{
      console.log("Got our tasks!", data);
      this.all_task = data.data;
      console.log(this.all_task); 

  	});
  }

  showTask(id) {
  	this._httpservice.showTask(id).subscribe((data:any) => {
      console.log("Displaying the task!", data);
  	  this.show_task =data.data;
      console.log('show task', data);
  	});
  }

  onCreate(){
    this._httpservice.createTask(this.new_task).subscribe(data => {
      console.log('Got data from post', data);
      this.new_task = { title: "", description: "" }
      this.getTasks();
    });
  }
  onEdit(id){
    this._httpservice.showTask(id).subscribe((data:any) => {
      this.edit_taskT = data.data;

    });
  }
  editTask(id) {
    this._httpservice.editTask(id, this.edit_taskT).subscribe((data:any) => {
      console.log("Editing the task!", data);
      this.edit_task = data;
      this.show_task = data;
      console.log('editted task' ,data)
      this.getTasks();
    });
  }

  deleteTask(id) {
    this._httpservice.deleteTask(id).subscribe((data:any) => {
      console.log("Deleting Task", data);
      this.deleteTask =data;
      this.getTasks();
    });
  }

}
