import { Injectable } from '@angular/core';
import {catchError} from "rxjs/operators";
import {MarkerRating} from './MarkerRating';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "./LocalStorageService";

@Injectable({
  providedIn: 'root'
})
export class MarkerRatingService {

  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  saveMarkerRating(model: MarkerRating){
    return this.http.post('http://localhost:8080/rating', model).pipe(
      catchError(this.handleError<MarkerRating>(`saveRating`))
    );
  }

  getAllRatingsFromUser(id: Number): Observable<MarkerRating[]> {
    return this.http.get<any>('http://localhost:8080/historyQry?user=' + id).pipe(
      catchError(this.handleError<MarkerRating>(`query user id ratings`))
    );
  }
}
