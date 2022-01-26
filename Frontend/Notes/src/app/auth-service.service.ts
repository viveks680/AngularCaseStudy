import { baseUrl } from "./../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  valid: any;

  constructor(private http:HttpClient) { }
  login(data: any):Observable<any>{
    return this.http.post(`${baseUrl}api/user/login`,data);
  }

}
