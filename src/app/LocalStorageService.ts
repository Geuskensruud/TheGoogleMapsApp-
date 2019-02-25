import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {User} from "./User";
import {Marker} from './Marker';
import {MarkerService} from './marker.service';

@Injectable()
export class LocalStorageService {

  signedInUser: User;
  marker: Marker;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeUser(user: User): void {
    this.storage.set('signedInUser', user);
  }

  public getStoredUser(): User {
    return this.storage.get('signedInUser');
  }

  public storeMarker(marker: Marker): void {
    this.storage.set('marker', marker);
  }

  public getStoredMarker(): Marker {
    return this.storage.get('marker');
  }

}
