import {Component, Input, OnInit} from '@angular/core';
import {MarkerRatingService} from '../marker-rating.service';
import {MarkerRating} from '../MarkerRating';
import {LocalStorageService} from '../LocalStorageService';
import {MarkerService} from '../marker.service';
import {User} from '../User';

@Component({
  selector: 'app-marker-rating',
  templateUrl: './marker-rating.component.html',
  styleUrls: ['./marker-rating.component.css']
})
export class MarkerRatingComponent implements OnInit {

  @Input() rating: number;
  address: String;
  model: MarkerRating = new MarkerRating(0,this.storage.getStoredUser(),this.storage.getStoredMarker(),1,'');
  submitted = false;
  invalid = false;

  constructor(private markerRatingService: MarkerRatingService, private storage: LocalStorageService) { }

  submit(){
    this.submitted = true;
    this.invalid = false;
  }
  saveMarkerRating(model){
    console.log(model);
    this.model.review = model.review;
    // this.model.rating = rating;
    // this.model.photo = photo;
    // this.model.User = this.storage.getStoredUser();
    console.log(this.model.user);
    this.model.marker = this.storage.getStoredMarker();
    console.log(this.model.marker);
    if (this.model.user.id = 0 && this.model.marker.id > 0){
      console.log(this.model);
      this.markerRatingService.saveMarkerRating(this.model).subscribe();
      this.submit();
    }else{
          this.invalid = true;
        }
  }

  ngOnInit(): void{
  }

}
