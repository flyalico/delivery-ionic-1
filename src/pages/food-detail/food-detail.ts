import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FoodDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-detail',
  templateUrl: 'food-detail.html',
})
export class FoodDetailPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
