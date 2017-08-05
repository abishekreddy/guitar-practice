import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppSpinnerComponent } from './app-spinner/app-spinner.component';
import { AppTimerComponent } from './app-timer/app-timer.component';

@NgModule({
  imports: [FormsModule],
  declarations: [AppSpinnerComponent, AppTimerComponent],
  exports: [AppSpinnerComponent, AppTimerComponent]
})
export class SharedModule { }
