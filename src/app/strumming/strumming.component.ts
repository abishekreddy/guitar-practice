import { Component } from '@angular/core';

import { FeatureTimer } from './../shared/app-timer/feature-timer';

@Component({
  templateUrl: './strumming.component.html',
  styleUrls: ['./strumming.component.scss']
})
export class StrummingComponent {
  featureDefaults: FeatureTimer = {
    default: 30,
    format: 'seconds',
    max: 120,
    min: 5,
    step: 1
  };
  strumPattern: string[];

  displayStrumPattern() {
    this.strumPattern = new Array<string>();
    for (let i = 0; i < 8; i++) {
      const number = Math.floor(Math.random() * 2);
      const direction = number === 0 ? 'down' : 'up';
      if (i !== 0 && direction === this.strumPattern[i - 1]) {
        this.strumPattern.push('');
      } else {
        this.strumPattern.push(direction);
      }
    }
  }
}
