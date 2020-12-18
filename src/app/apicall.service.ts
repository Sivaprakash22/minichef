import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }
   getData ()
   {
     return this.http.get('http://localhost:5000/random');
   }
   setData ()
   {
     return this.http.get('http://localhost:5000/random');
   }
}
