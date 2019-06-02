import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


const apiUrl = 'https://todoserv.herokuapp.com';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsersFromServer() {
    return this.http.get(`${apiUrl}/users`);
  }

  createPost(post) {
    return this.http.post(`${apiUrl}/users`, post)
  }

}


