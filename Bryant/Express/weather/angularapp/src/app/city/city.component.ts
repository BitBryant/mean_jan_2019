import { Component, OnInit, Input} from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params , Router } from '@angular/router';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input() cityToShow: any;
  city: any;
  data= {};
  imgurls = {
    Dallas: "https://visitdallas.imgix.net/media_gallery/skyline-and-downtown/skyline/Dallas_Night_Skyline_Credit_Matt_Pasant_4.jpg",
    Houston: "https://static.greatbigcanvas.com/images/singlecanvas_thick_none/getty-images/houston-skyline-at-night-texas,2082352.jpg?max=1000",
    Miami: "https://images.fineartamerica.com/images-medium-large-5/miami-skyline-domenik-studer.jpg",
    Chicago: "https://ih0.redbubble.net/image.9011339.6129/flat,550x550,075,f.jpg",
    Nashville:"https://images.discerningassets.com/image/upload/c_fit,h_1000,w_1000/c_fit,fl_relative,h_1.0,o_100,w_1.0/v1547837755/skyline-new_mjhpwn.jpg",
    Seattle: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/06/20/104540684-GettyImages-530874379.1910x1000.jpg",
  };
  url: String;

  constructor(private _httpservice: HttpService,
              private _route: ActivatedRoute,
              private _router: Router
              ) { 

  }
    

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.city = params['city'];
      this.getWeather(params);
    });
  }
  getWeather(city){

      this._httpservice.getWeather(this.city).subscribe((data: any) =>{
        console.log("Got our city!", data);
        this.cityToShow = data;
        this.url=this.imgurls[`${data.name}`];
        
        console.log("City Stats", this.cityToShow); 
      });
    
  }
}