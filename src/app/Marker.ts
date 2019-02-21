export class Marker {
  public id: Number;
  public address: Object;
  public lat: Number;
  public lng: Number;
  public draggable: Boolean;

  constructor(id: Number, address: Object, lat: Number, lng: Number, draggable: Boolean) {
    this.id = id;
    this.address =address;
    this.lat = lat;
    this.lng = lng;
    this.draggable = draggable;
  }
}
