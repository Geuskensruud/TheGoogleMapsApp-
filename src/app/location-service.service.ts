import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  latitude: string;
  longitude: string;
  latitudeOrigin: string;
  longitudeOrigin: string;
  latitudeDest: string;
  longitudeDest: string;
  constructor() { }
}
