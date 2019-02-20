import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {User} from "./User";
// import {Bier} from "./Bier";

@Injectable()
export class LocalStorageService {

  signedInUser: User;
  // bier: Bier;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeUser(user: User): void {
    this.storage.set('signedInUser', user);
  }

  public getStoredUser(): User {
    return this.storage.get('signedInUser');
  }

  // public storeBier(bier: Bier): void {
  //   this.storage.set('bier', bier);
  // }

  // public getStoredBier(): Bier {
  //   return this.storage.get('bier');
  // }

}
