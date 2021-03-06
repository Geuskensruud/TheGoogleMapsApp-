import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import {NgModel} from '@angular/forms';

declare var google: any;



@Directive({
  selector: '[googleplace]',
  providers: [NgModel],
  host: {
    '(input)' : 'onInputChange()'
  }
})
export class GoogleplaceDirective  {
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  modelValue: any;
  @Output() autocomplete: any;
  private readonly _el: HTMLElement;


  constructor(el: ElementRef, private model: NgModel) {
    this._el = el.nativeElement;
    this.modelValue = this.model;
    var input = this._el;
    this.autocomplete = new google.maps.places.Autocomplete(input, {});
    google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
      var place = this.autocomplete.getPlace();
      // var lat = location.lat();
      // var lng = location.lng();

      this.invokeEvent(place);
    });
  }


  invokeEvent(place: Object) {
    this.setAddress.emit(place);
    // let s = JSON.stringify(place);
    // localStorage.setItem("place", s);

  }
  onInputChange() {
  }


}
