import {Marker} from './Marker';
import {User} from './User';

export class MarkerRating {
  public id: Number = 0;
  public user: User;
  public marker: Marker;
  public rating: Number;
  public review: String;
  // public photo: Object;

  constructor(id: Number, user: User, marker: Marker, rating: Number, review: String){
    this.id = id;
    this.user = user;
    this.marker = marker;
    this.rating = rating;
    this.review = review;
    // this.photo = photo;
  }
}
