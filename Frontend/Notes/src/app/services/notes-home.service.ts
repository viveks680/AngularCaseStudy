import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesHomeService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  getImpNotes(): Observable<any>{
    return this.http.get('http://localhost:3000/api/notes/important', {withCredentials:true})
  }

  getRecentNotes(): Observable<any>{
    return this.http.get('http://localhost:3000/api/notes/recent', {withCredentials:true})
  }

  getAllNotes(user_id: any): Observable<any>{
    console.log("potato is in the oven service")
    return this.http.get('http://localhost:3000/api/notes', {withCredentials:true} )
  }

}
