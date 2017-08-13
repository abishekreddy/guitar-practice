import { Component } from '@angular/core';

import { FeatureTimer } from './../shared/app-timer/feature-timer';
import { Strum } from './strum';

@Component({
  templateUrl: './strumming.component.html',
  styleUrls: ['./strumming.component.scss']
})
export class StrummingComponent {
  featureDefaults: FeatureTimer = {
    default: 10,
    max: 20,
    min: 0,
    step: 1
  };
  strumPattern: Strum[];

  displayStrumPattern() {
    this.strumPattern = new Array<Strum>();
    let strum: Strum = null;
    for (let i = 0; i < 8; i++) {
      const number = Math.floor(Math.random() * 2);
      const direction = number === 0 ? 'down' : 'up';
      if (i !== 0 && direction === this.strumPattern[i - 1].direction) {
        strum = { direction: '', isEmptyNote: true };
      } else {
        strum = { direction: direction, isEmptyNote: false };
      }
      this.strumPattern.push(strum);
    }
  }
}
