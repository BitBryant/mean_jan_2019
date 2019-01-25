import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  all_cakes: any;
  my_cake: any;
  new_cake: any;
  avg: number;
  review: any;


  constructor(private _httpservice: HttpService) {
  }

  ngOnInit(){
    this.getCakes();
    this.new_cake = { baker: "", imgurl: ""};
  }

  getCakes(){
    this._httpservice.getCakes().subscribe((data: any) =>{
      console.log("Got our cakes!", data);
      this.all_cakes = data.data;
      console.log(this.all_cakes); 
  	});
  }

  showCake(id){
    this._httpservice.showCake(id).subscribe((data:any) =>{
      console.log('Got our cake', data);
      this.my_cake = data.data;
    });
  }

  onCreate(){
    this._httpservice.createCake(this.new_cake).subscribe(data => {
      console.log('Got data from post', data);
      this.new_cake = { baker: "", imgurl: ""};
      this.getCakes();
    });
  }

  rateCake( review){
    this._httpservice.rateCake(this.review).subscribe(data => {
      console.log('Rating cake', data);
      
    });
  }



}
