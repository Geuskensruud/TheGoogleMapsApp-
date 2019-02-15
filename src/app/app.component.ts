import { Component, OnInit } from '@angular/core';
import {MarkerService} from './marker.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'ShitAdvisor';
  zoom = 10;
  lat = 52.509317;
  lng = 6.065663;
  markerId: number;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;
  originLat: string;
  originLng: string;
  destLat: string;
  destLng: string;
  origin: any;
  originName: string;
  destName: string;
  destination: any;
  address: Object;
  location: Object;

  markers: marker[] = [
    {id: 0, name: this.address, lat: 52.509317, lng: 6.065663, draggable: true},
    {id: 0, name: this.address, lat: 52.509317, lng: 8.065663, draggable: true}
  ];

  directions: directions[] = [

  ];

  constructor(private markerService: MarkerService) {

  }

  ngOnInit(){
    this.markerService.getLocation().subscribe(
      data => {
        console.log(data);
        this.lat = data.markerLat;
        this.lng = data.markerLng;
      }
    );
    this.markerService.getMarker().subscribe(
      markers => {
        this.markers = markers;
      },
      err => {
        console.log(err);
      }
    );
    this.getDirection();
  }

  clickedMarker(marker: marker, index: number) {
    console.log('Clicked Marker:' + marker.name + 'Index:' + index);
  }
  mapClicked($event: any) {
    const newMarker = {
      id: 1,
      name: this.address,
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    };
    this.markers.push(newMarker);
  }
  markerDragEnd(marker: any, $event: any) {
    console.log('dragEnd', marker, $event);

    const updatedMarker = {
      name: marker.address,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    };
  }

  addMarker() {
    console.log('adding marker to david his head!');

    let isdraggbale = true;
    if (this.markerDraggable == 'Yes') {
      isdraggbale = true;
    } else {
      isdraggbale = false;
    }

    const newMarker = {
      id: this.markerId,
      name: this.address,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isdraggbale
    };

    this.markers.push(newMarker);
    // to backend
    this.markerService.sendMarker(newMarker).subscribe();

    this.markerService.getMarker().subscribe(
      markers => {
        this.markers = markers;
      },
      err => {
        console.log(err);
      }
    );
  }
  // updateMarker(id: any) {
  //
  // }
  deleteMarker(id: any) {
    console.log('deleted marker from david his head!');
    this.markerService.deleteMarker(id).subscribe(
      () => this.markerService.getMarker()
    );
  }
  getDirection() {
    console.log('jeeh routes');
    this.origin = {lat: parseFloat(this.originLat), lng: parseFloat(this.originLng)}
    this.destination = {lat: parseFloat(this.destLat), lng: parseFloat(this.destLng)}
  }
  getAddress(place: Object) {
    this.address = place['formatted_address'];
  }

  // locationChosen = false;
  //
  // onChooseLocation(event) {
  //   this.latitude = event.coords.lat;
  //   this.longitude = event.coords.lng;
  //   this.locationChosen = true;
  // }
}
export interface marker {
  id: number;
  name: object;
  lat: number;
  lng: number;
  draggable: boolean;
}

export interface directions {
  oName: string;
  lat: number;
  lng: number;
  dName: string;
}
