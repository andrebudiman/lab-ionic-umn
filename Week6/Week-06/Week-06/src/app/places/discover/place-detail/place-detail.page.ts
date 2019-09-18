import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private router: Router, 
    private navCtrl: NavController, 
    private route: ActivatedRoute, 
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  
  }

  goBack(){
    // this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('places/tabs/discover');
  }

  onBookPlace(){
    this.modalCtrl
    .create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place }
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if(resultData.role ==='confirm'){
        console.log('BOOKED');
      }
    })
  }

  bookThisPlace(){
    //this.isLoading = true;
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Booking the place ...'
    })
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss;
        this.modalCtrl.dismiss({
          message: 'booked'
        }, 'confirm');
      });
    })
  }

}
