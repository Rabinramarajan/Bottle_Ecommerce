import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  firestore = inject(Firestore);
  personList = collection(this.firestore, 'person_detail')

  constructor() { }


  getPerson() {
    return collectionData(this.personList, {
      idField: 'id'
    })
  }
}
