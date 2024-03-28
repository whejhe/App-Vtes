import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }

  getBloodCostImage(bloodCost: string | undefined): string {
    if(bloodCost){
      switch (bloodCost) {
        case '1':
          return '/assets/img/icons-vtes/others/costBlood-1.png';
        case '2':
          return '/assets/img/icons-vtes/others/costBlood-2.png';
        case '3':
          return '/assets/img/icons-vtes/others/costBlood-3.png';
        case '4':
          return '/assets/img/icons-vtes/others/costBlood-4.png';
        default:
          return '';
      }
    }else{
      return '';
    }
  }

  getPoolCostImage(poolCost: string | undefined): string {
    if(poolCost){
      switch (poolCost) {
        case '1':
          return 'https://static.krcg.org/svg/icon/pool1.svg';
        case '2':
          return 'https://static.krcg.org/svg/icon/pool2.svg';
        case '3':
          return 'https://static.krcg.org/svg/icon/pool3.svg';
        case '4':
          return 'https://static.krcg.org/svg/icon/pool4.svg';
        case '5':
          return 'https://static.krcg.org/svg/icon/pool5.svg';
        case '6':
            return 'https://static.krcg.org/svg/icon/pool6.svg';
        default:
          return '';
      }
    }else{
      return '';
    }
  }
}
