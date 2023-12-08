import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  getuserData(username: string,password: string){
  return this.http.get('http://localhost:4200/'+username +'/'+password)
  }
}
