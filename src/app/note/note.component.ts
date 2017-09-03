import { Component, ElementRef, ViewChild } from '@angular/core';

import { FeatureTimer } from './../shared/app-timer/feature-timer';
import { Note } from './note';
import { Notes } from './notes';

@Component({
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  /*-----Public variables-----*/

  featureDefaults: FeatureTimer = {
    default: 30,
    format: 'bpm',
    max: 120,
    min: 10,
    step: 5
  };
  notes: Note[];

  /*-----Private variables-----*/

  @ViewChild('scrollContainer') private scrollContainer: ElementRef;

  /*-----Public methods-----*/

  constructor() {
    this.clearContainer();
  }

  clearContainer() {
    this.notes = new Array<Note>();
    this.notes.push({
      name: 'Treble',
      image: './../../assets/notes/treble.png'
    });
  }

  displayNote() {
    const number = Math.floor(Math.random() * (Notes.length));
    this.notes.push(Notes[number]);
    this.scrollToBottom();
  }

  /*-----Private methods-----*/

  private scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
