import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  item:any;
  amount = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public alertCtrl: AlertController) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  checkout() {
    this.navCtrl.pop();
    this.alertCtrl.create({
      title: 'Compra realizada',
      subTitle: 'Compra realizada com sucesso. Volte sempre!',
      buttons: ['OK']
    }).present();
  }

}
