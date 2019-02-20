// import { Injectable } from '@angular/core';
// import {Observable, of} from 'rxjs';
// import {rating} from './app.component';
// import {catchError} from 'rxjs/operators';
// import {HttpClient} from '@angular/common/http';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class RatingService {
//
//   constructor(private http: HttpClient) { }
//
//   sendRating(newRating: rating){
//     return this.http.post('http://localhost:8080/rating', newRating).pipe(
//       catchError(this.handleError<rating>(`saveUser`))
//     );
//   }
//
//   getRating(): Observable<rating[]>  {
//     return this.http.get<any>('http://localhost:8080/rating').pipe(
//       catchError(this.handleError<rating>(`findAll`))
//     );
//   }
//
//   private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error);
//       return of(result as T);
//     };
//   }
// }
