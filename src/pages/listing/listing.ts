import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FoodProvider } from '../../providers/food/food';
import { FoodDetailPage } from '../food-detail/food-detail';

/**
 * Generated class for the ListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listing',
  templateUrl: 'listing.html',
})
export class ListingPage {

  list:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public foodProvider: FoodProvider, public modalCtrl: ModalController) {
    this.list = [];
  }

  ionViewDidLoad() {
    this.list = this.foodProvider.getAll();
  }

  detail(item) {
    this.modalCtrl.create(FoodDetailPage, {item: item}).present();
  }

}
