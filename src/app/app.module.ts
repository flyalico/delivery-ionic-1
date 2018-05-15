import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListingPage } from '../pages/listing/listing';
import { FoodProvider } from '../providers/food/food';
import { FoodDetailPage } from '../pages/food-detail/food-detail';
import { CartPage } from '../pages/cart/cart';
import { NewFoodPage } from '../pages/new-food/new-food';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListingPage,
    FoodDetailPage,
    CartPage,
    NewFoodPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListingPage,
    FoodDetailPage,
    CartPage,
    NewFoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodProvider
  ]
})
export class AppModule {}
