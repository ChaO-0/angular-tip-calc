import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.css'],
})
export class CalculatorInputComponent implements OnInit {
  @Input() bill = '';
  @Input() people = '';

  @Output() billChange = new EventEmitter();
  @Output() peopleChange = new EventEmitter();
  @Output() percentChange = new EventEmitter();

  percents = [5, 10, 15, 25, 50];
  percent: number | string = '';

  constructor() {}

  ngOnInit(): void {}

  checkPeople() {
    if (typeof this.people === 'number') {
      return +this.people === 0;
    }
    return false;
  }

  onClick(percent: number) {
    this.percent = percent;
    this.percentChange.emit(percent);
  }

  onPercentChange(percent: number) {
    this.percent = percent;
    this.percentChange.emit(percent);
  }

  onBillChange(e: string) {
    this.billChange.emit(e);
  }

  onPeopleChange(e: string) {
    this.peopleChange.emit(e);
  }
}
