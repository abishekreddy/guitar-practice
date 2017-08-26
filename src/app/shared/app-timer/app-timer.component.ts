import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FeatureTimer } from './feature-timer';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-timer',
  templateUrl: './app-timer.component.html',
  styleUrls: ['./app-timer.component.scss']
})
export class AppTimerComponent implements OnDestroy, OnInit {
  /*Public variables*/
  isPlaying: boolean;
  @Input() timer: FeatureTimer;
  @Output() trigger = new EventEmitter();
  value: number;
  wasStarted: boolean;
  /*Private variables*/
  private timerSubscription;
  private userSelection: FeatureTimer;

  /*Public methods*/
  ngOnInit() {
    this.value = this.timer.default;
  }
  pause() {
    this.stopTimer();
    this.isPlaying = false;
  }
  play() {
    if (!this.wasStarted) {
      this.userSelection = Object.assign({}, this.timer);
      if (this.timer.format === 'minutes') {
        this.value *= 60;
      }
      this.timer.min = 0;
      this.timer.max = this.value;
      this.timer.step = 1;
      this.wasStarted = true;
      this.trigger.emit();
    }
    this.timerSubscription = Observable.interval(1000).subscribe(t => {
      this.value -= 1;
      if (this.value === 0) {
        this.reset();
      }
    });
    this.isPlaying = true;
  }
  reset() {
    this.stopTimer();
    this.trigger.emit();
    this.value = this.timer.max;
    if (this.isPlaying) {
      this.play();
    }
  }
  stop() {
    this.stopTimer();
    this.timer = Object.assign({}, this.userSelection);
    this.value = this.timer.default;
    this.isPlaying = false;
    this.wasStarted = false;
  }
  ngOnDestroy() {
    this.stopTimer();
  }
  /*Private methods*/
  private stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }
}
