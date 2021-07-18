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

  onClick(percent: number) {
    this.percent = percent;
    this.percentChange.emit(percent);
  }

  onBillChange(e: any) {
    this.billChange.emit(e);
  }

  onPeopleChange(e: any) {
    this.peopleChange.emit(e);
  }

  calculateTip() {
    return Number(this.bill) > 0 && Number(this.people) > 0 && this.percent > 0
      ? (
          (Number(this.bill) / Number(this.people)) *
          (Number(this.percent) / 100)
        ).toFixed(2)
      : '0.00';
  }

  calculateTotal() {
    const tip = this.calculateTip();

    return Number(this.bill) > 0 && Number(this.people) > 0 && this.percent > 0
      ? ((Number(this.bill) / Number(this.people) || 0) + Number(tip)).toFixed(
          2
        )
      : '0.00';
  }
}
