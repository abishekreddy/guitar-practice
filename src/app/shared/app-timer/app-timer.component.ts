import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './app-timer.component.html',
  styleUrls: ['./app-timer.component.scss']
})
export class AppTimerComponent {
  @Input() default: number;
  @Input() max: number;
  @Input() min: number;
  @Input() step: number;
  value: number;
}
