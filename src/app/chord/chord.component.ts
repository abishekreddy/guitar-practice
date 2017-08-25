import { Component } from '@angular/core';

import { Chords } from './chords';
import { FeatureTimer } from './../shared/app-timer/feature-timer';

@Component({
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.scss']
})
export class ChordComponent {
  featureDefaults: FeatureTimer = {
    default: 30,
    format: 'seconds',
    max: 120,
    min: 5,
    step: 1
  };
  chord: string;

  constructor() {
    this.chord = '';
  }

  displayChord() {
    const number = Math.floor(Math.random() * (Chords.length));
    this.chord = Chords[number];
  }
}
