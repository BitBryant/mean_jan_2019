import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }
  
  getCakes(){
    return this._http.get('/all');
  }
  
  showCake(id){
    return this._http.get('/cake/'+id);
  }

  createCake(new_cake){
    return this._http.post('/new', new_cake);
  }

  rateCake(id, review){
    return this._http.post('/rate/' +id, review);
  }
  
}
