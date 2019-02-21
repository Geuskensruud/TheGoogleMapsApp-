import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, filter, first} from "rxjs/operators";
import {User} from "./User";
import {findAll} from "@angular/compiler-cli/src/ngcc/src/utils";
import {LocalStorageService} from "./LocalStorageService";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  findAll(): Observable<User[]>  {
    return this.http.get<any>('http://localhost:8080/user').pipe(
      catchError(this.handleError<User>(`findAll`))
    );
  }

  findUser(username: String, password: String): Observable<User>{
    return this.http.post<any>('http://localhost:8080/authenticate', new User(0,'',0,username,password));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  saveUser(model: User){
    return this.http.post('http://localhost:8080/user', model).pipe(
      catchError(this.handleError<User>(`saveuser`))
    );
  }

  getUserById(id: number) {
    return this.http.get('http://localhost:8080/user/'+id).pipe(
      catchError(this.handleError<User>(`getUserById`))
    );
  }

  findUserByUserName(username: String): Observable<User> {
    return this.http.post<any>('http://localhost:8080/verify', new User(0, '', 0, username, '')).pipe(
      catchError(this.handleError<User>(`verify`))
    );
  }
}
