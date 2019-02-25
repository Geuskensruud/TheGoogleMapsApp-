import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocationService} from '../location-service.service';
import {MarkerService} from '../marker.service';
import {Marker} from '../Marker';
import {MarkerRating} from '../MarkerRating';
import {MarkerRatingService} from '../marker-rating.service';
import {LocalStorageService} from '../LocalStorageService';



// import {RatingService} from './rating.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})
export class GoogleMapsComponent implements OnInit{
  title = 'ShitAdvisor';
  zoom = 10;
  lat = 52.509317;
  lng = 6.065663;
  markerId: number;
  markerDraggable: string;
  origin: any;
  addressOrigin: string;
  addressDest: string;
  destination: any;
  address: Object;
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  ratingName: string;
  model: MarkerRating = new MarkerRating(0,this.storage.getStoredUser(),this.storage.getStoredMarker(),1,'');
  submitted = false;
  invalid = false;

  markers: Marker[] = [
    {id: 0, address: this.address, lat: 52.509317, lng: 6.065663, draggable: true},
    {id: 0, address: this.address, lat: 52.509317, lng: 8.065663, draggable: true}
  ];
  // ratings: rating [] = [
  //   {  ratingName: this.ratingName, rating: this.rating, itemId: this.itemId}
  // ];
  location: Location[] = [
  ];
  constructor(private markerService: MarkerService, private locationService: LocationService, private markerRatingService: MarkerRatingService, private storage: LocalStorageService) {
  }
  ngOnInit() {
    this.markerService.getMarker().subscribe(
      marker => {
        this.markers = marker;
      },
      err => {
        console.log(err);
      }
    );
    // this.ratingService.getRating().subscribe(
    //   rating => {
    //     this.ratings = rating;
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
    this.getDirection(
    );
  }
  // onClick(rating: number): void {
  //   this.ratingName = this.itemId + '_rating';
  //   this.rating = rating;
  //   this.ratingClick.emit({
  //     itemId: this.itemId,
  //     rating: rating
  //   });
  // }
  clickedMarker(marker: Marker, index: number) {
    console.log('Clicked Marker:' + marker.address + 'Index:' + index);
  }
  // mapClicked($event: any) {
  //   const newMarker = {
  //     id: 1,
  //     name: this.address,
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: false
  //   };
  //   this.markers.push(newMarker);
  // }
  // markerDragEnd(marker: any, $event: any) {
  //   console.log('dragEnd', marker, $event);
  //
  //   const updatedMarker = {
  //     name: marker.address,
  //     lat: parseFloat(marker.lat),
  //     lng: parseFloat(marker.lng),
  //     draggable: false
  //   };
  // }

  addMarker() {
    console.log('adding marker to david his head!');
    let isdraggable = true;
    if (this.markerDraggable == 'Yes') {
      isdraggable = true;
    } else {
      isdraggable = false;
    }
    const newMarker = {
      id: this.markerId,
      address: this.address,
      lat: parseFloat(this.locationService.latitude),
      lng: parseFloat(this.locationService.longitude),
      draggable: isdraggable,
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
  submit(){
    this.submitted = true;
    this.invalid = false;
  }
  saveMarkerRating(m){
    this.model.review = m.review;
    // this.model.rating = rating;
    // this.model.photo = photo;
    this.model.user = this.storage.getStoredUser();
    console.log(this.model.user);
    this.model.marker = m;
    if (this.model.user.id > 0 && m > 0){
      console.log(m);
      this.markerRatingService.saveMarkerRating(m).subscribe();
      this.submit();
    }else{
      this.invalid = true;
    }
  }
  deleteMarker(id: any) {
    console.log('deleted marker from david his head!');
    this.markerService.deleteMarker(id).subscribe(
      () => this.markerService.getMarker()
    );
  }
  // addRating(){
  //   const newRating = {
  //     ratingName: this.ratingName,
  //     rating: this.rating,
  //     itemId: this.itemId
  //   };
  //   this.ratings.push(newRating);
  //   this.ratingService.sendRating(newRating).subscribe();
  // }
  getDirection() {
    console.log('jeeh routes');
    this.origin = {lat: parseFloat(this.locationService.latitudeOrigin), lng: parseFloat(this.locationService.longitudeOrigin)};
    this.destination = {lat: parseFloat(this.locationService.latitudeDest), lng: parseFloat(this.locationService.latitudeDest)};
  }
  getAddress(place: any) {
    this.address = place['formatted_address'];
    this.locationService.latitude = place.geometry.location.lat();
    this.locationService.longitude = place.geometry.location.lng();
  }
  getAddressOrigin(place: any) {
    this.origin = place['formatted_address'];
    this.locationService.latitudeOrigin = place.geometry.location.lat();
    this.locationService.longitudeOrigin = place.geometry.location.lng();
  }
  getAddressDest(place: any) {
    this.destination = place['formatted_address'];
    this.locationService.latitudeDest = place.geometry.location.lat();
    this.locationService.longitudeDest = place.geometry.location.lng();
  }
}
// export interface rating {
//   itemId: number;
//   ratingName: string;
//   rating: number;
// }
