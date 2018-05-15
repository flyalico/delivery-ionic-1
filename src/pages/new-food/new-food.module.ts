import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewFoodPage } from './new-food';

@NgModule({
  declarations: [
    NewFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(NewFoodPage),
  ],
})
export class NewFoodPageModule {}
