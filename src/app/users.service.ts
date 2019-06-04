import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


const apiUrl = 'https://todoserv.herokuapp.com';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users;

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.users = this.getUsersFromServer();
  }

  addUsers(newData){
    this.users.push(newData);
  }

  getUsersFromServer() {
    return this.http.get(`${apiUrl}/users`).subscribe((posts) => {
      this.users = posts;
    });
  }

  createPost(post) {
    return this.http.post(`${apiUrl}/users`, post)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err) {
    console.log('caught mapping error and rethrowing', err);
    return throwError(err);
  }

}


