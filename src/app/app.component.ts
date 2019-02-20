import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'beerAGood';

  ngOnInit(): void {
  }
}
export interface marker {
  id: number;
  name: object;
  lat: number;
  lng: number;
  draggable: boolean;
}
