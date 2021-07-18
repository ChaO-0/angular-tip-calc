import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-output',
  templateUrl: './calculator-output.component.html',
  styleUrls: ['./calculator-output.component.css'],
})
export class CalculatorOutputComponent implements OnInit {
  @Input() tip: string = '';
  @Input() total: string = '';
  @Input() disableReset: boolean = false;

  @Output() resetClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.resetClick.emit();
  }
}
