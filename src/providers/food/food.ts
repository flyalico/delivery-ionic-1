import { Injectable } from '@angular/core';

/*
  Generated class for the FoodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodProvider {

  list:any;

  constructor() {
    this.list = this.getList();;
  }

  getAll() {
    return this.list;
  }

  addToList(food) {
    this.list.push(food);
  }

  private getList() {
    return [
      {
        image: 'https://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png',
        name: 'Pizza Grande',
        price: 25.0,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae a nam voluptatum, enim facere odio illo cupiditate inventore deserunt'
      },
      {
        image: 'https://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png',
        name: 'Pizza Média',
        price: 20.0,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae a nam voluptatum, enim facere odio illo cupiditate inventore deserunt'
      },
      {
        image: 'https://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png',
        name: 'Pizza Pequena',
        price: 15.0,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae a nam voluptatum, enim facere odio illo cupiditate inventore deserunt'
      }
    ];
  }

}
