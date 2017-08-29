import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FeatureTimer } from './feature-timer';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-timer',
  templateUrl: './app-timer.component.html',
  styleUrls: ['./app-timer.component.scss']
})
export class AppTimerComponent implements OnDestroy, OnInit {
  /*-----Public variables-----*/
  @Output() clear = new EventEmitter();
  isPlaying: boolean;
  @Input() timer: FeatureTimer;
  @Output() trigger = new EventEmitter();
  value: number;
  wasStarted: boolean;

  /*-----Private variables-----*/
  private timerSubscription;
  private userSelection: FeatureTimer;

  /*-----Public methods-----*/
  ngOnInit() {
    this.value = this.timer.default;
  }

  pause() {
    this.isPlaying = false;
  }

  play() {
    if (!this.wasStarted) {
      this.setupTimer();
    }
    this.isPlaying = true;
  }

  reset() {
    if (this.timer.format !== 'bpm') {
      this.trigger.emit();
      this.value = this.timer.max;
    } else {
      this.clear.emit();
    }
  }

  stop() {
    this.stopTimer();
    if (this.timer.format !== 'bpm') {
      this.timer = Object.assign({}, this.userSelection);
    } else {
      this.clear.emit();
    }
    this.value = this.timer.default;
    this.isPlaying = false;
    this.wasStarted = false;
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  /*-----Private methods-----*/
  private setupTimer() {
    let timerInterval = 1000;
    if (this.timer.format !== 'bpm') {
      this.userSelection = Object.assign({}, this.timer);
      this.timer.min = 0;
      this.timer.max = this.value;
      this.timer.step = 1;
      if (this.timer.format === 'minutes') {
        this.value *= 60;
      }
    } else {
      timerInterval /= (this.value / 60);
    }
    this.wasStarted = true;
    this.trigger.emit();
    this.timerSubscription = Observable.interval(timerInterval).subscribe(t => {
      if (!this.isPlaying) {
        return;
      }
      if (this.timer.format !== 'bpm') {
        this.value -= 1;
        if (this.value === 0) {
          this.reset();
        }
      } else {
        this.trigger.emit();
      }
    });
  }

  private stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }
}
