import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesHomeService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  getImpNotes(user_id: any): Observable<any>{
    return this.http.get('http://localhost:3000/api/'+user_id+'/notes/important', {withCredentials:true})
  }

  getRecentNotes(user_id: any): Observable<any>{
    return this.http.get('http://localhost:3000/api/'+user_id+'/notes/recent', {withCredentials:true})
  }

  getAllNotes(user_id: any): Observable<any>{
    console.log("potato is in the oven service")
    return this.http.get('http://localhost:3000/api/'+user_id+'/notes', {withCredentials:true} )
  }

}
