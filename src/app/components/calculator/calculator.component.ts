import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  bill = '';
  people = '';

  percents = [5, 10, 15, 25, 50];
  percent: number | string = '';

  constructor() {}

  ngOnInit(): void {}

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

  resetClick() {
    this.bill = '';
    this.people = '';
    this.percent = '';
  }
}
