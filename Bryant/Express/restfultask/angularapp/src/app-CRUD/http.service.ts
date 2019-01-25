import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {



  constructor(private _http: HttpClient) {
  }
  
  getTasks(){
    return this._http.get('/all');
  }
  
  showTask(id){
    return this._http.get('/task/'+id);
  }

  createTask(newtask){
    return this._http.post('/new', newtask);
  }

  editTask(id, edittask){
    return this._http.put('/edit/'+id, edittask );
  }

  deleteTask(id){
    return this._http.delete('/destroy/'+id);
  }
}
