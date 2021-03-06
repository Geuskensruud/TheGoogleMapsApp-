import { Injectable } from '@angular/core';
import {marker} from './app.component';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient) { }


  sendMarker(newMarker: marker){
    return this.http.post('http://localhost:8080/marker', newMarker).pipe(
      catchError(this.handleError<marker>(`saveUser`))
    );
  }
  getMarker(): Observable<marker[]>  {
    return this.http.get<any>('http://localhost:8080/marker').pipe(
      catchError(this.handleError<marker>(`findAll`))
    );
  }
  deleteMarker(id) {
    return this.http.delete('http://localhost:8080/marker/' + id).pipe(
      catchError(this.handleError<marker>(`delete`))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
