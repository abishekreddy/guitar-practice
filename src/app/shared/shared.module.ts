import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppSpinnerComponent } from './app-spinner/app-spinner.component';
import { AppTimerComponent } from './app-timer/app-timer.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AppSpinnerComponent, AppTimerComponent],
  exports: [AppSpinnerComponent, AppTimerComponent]
})
export class SharedModule { }
