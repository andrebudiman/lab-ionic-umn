import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // getPlace(arg0: string): Place {
  //   throw new Error("Method not implemented.");
  // }

  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'https://rentpath-res.cloudinary.com/w_318,h_187,t_rp,cs_tinysrgb,fl_force_strip,c_fill/e_unsharp_mask:50,q_auto/3e551a5c0debe557c97e6ed46c5eb54f',
      100000000
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'https://i2.au.reastatic.net/1110x535/c93989d1c261b40e1397a9ea791ad48691ab08e98b0274d7d689a68137de394f/image.jpg',
      1250000000
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartemen Murah',
      'https://resources.stuff.co.nz/content/dam/images/1/s/g/8/v/x/image.related.StuffLandscapeSixteenByNine.710x400.1sg0o9.png/1540950857184.jpg',
      5000000000
    )
  ];

get places() {
  return [...this._places];
}

  constructor() { }

  getPlace(id: string){
    return {...this._places.find(p => p.id === id)};
  }
}
