import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Marker} from './Marker';
import {GoogleMapsComponent} from './google-maps/google-maps.component';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient) { }

  sendMarker(newMarker: Marker){
    return this.http.post('http://localhost:8080/marker', newMarker).pipe(
      catchError(this.handleError<Marker>(`saveUser`))
    );
  }
  getMarker(): Observable<Marker[]>  {
    return this.http.get<any>('http://localhost:8080/marker').pipe(
      catchError(this.handleError<Marker>(`findAll`))
    );
  }
  getOneMarker(id) {
    return this.http.get('http://localhost:8080/marker/' + id).pipe(
      catchError(this.handleError<Marker>(`findOne`))
    );
  }
  deleteMarker(id) {
    return this.http.delete('http://localhost:8080/marker/' + id).pipe(
      catchError(this.handleError<Marker>(`delete`))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
