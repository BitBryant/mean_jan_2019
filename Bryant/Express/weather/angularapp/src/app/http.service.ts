import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) {

  }

  getWeather(city){
    return this._http.get(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22`);
    
  }

}
