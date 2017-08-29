import { Component } from '@angular/core';

import { FeatureTimer } from './../shared/app-timer/feature-timer';
import { Note } from './note';
import { Notes } from './notes';

@Component({
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  featureDefaults: FeatureTimer = {
    default: 30,
    format: 'bpm',
    max: 120,
    min: 10,
    step: 5
  };
  notes: Note[];

  constructor() {
    this.notes = new Array<Note>();
  }

  clearContainer() {
    this.notes = new Array<Note>();
  }

  displayNote() {
    const number = Math.floor(Math.random() * (Notes.length));
    this.notes.push(Notes[number]);
  }
}
