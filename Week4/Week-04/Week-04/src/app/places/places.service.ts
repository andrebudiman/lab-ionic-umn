import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'https://image.shutterstock.com/image-photo/modern-luxury-apartment-building-600w-617466701.jpg',
      100000000
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'https://image.shutterstock.com/image-photo/multistory-new-modern-apartment-building-260nw-1424760191.jpg',
      1250000000
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartemen Murah',
      'https://image.shutterstock.com/image-photo/new-residential-area-brasov-romania-600w-1445031194.jpg',
      5000000000
    )
  ];

get places() {
  return [...this._places];
}

  constructor() { }
}
