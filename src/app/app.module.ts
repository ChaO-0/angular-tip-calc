import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorOutputComponent } from './components/calculator-output/calculator-output.component';
import { CalculatorInputComponent } from './components/calculator-input/calculator-input.component';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, CalculatorOutputComponent, CalculatorInputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
