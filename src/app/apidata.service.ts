import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(public _HttpClient:HttpClient) {

    
    }

   getData():Observable<any>
    {
      return this._HttpClient.get("https://jsonplaceholder.typicode.com/posts"); //This is the Api to get data from it 
    }

    getEmail():Observable<any>
    {
      return this._HttpClient.get("https://jsonplaceholder.typicode.com/comments"); //This is anothrt Api to get different data from it 
    }



    
}
