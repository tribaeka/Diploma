import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-salary-filter',
  templateUrl: './salary-filter.component.html',
  styleUrls: ['./salary-filter.component.scss']
})
export class SalaryFilterComponent implements OnInit {
  @Output() onApplySalaryFilter = new EventEmitter();
  @Output() onResetSalaryFilter = new EventEmitter();
  salaryFilterList: number[] = [];
  selectedFilterValue: number;

  constructor() {
    this.initSalaryFilterList(0, 2000);
  }

  ngOnInit() {
  }

  applySalaryFilter(salary: number) {
    this.selectedFilterValue = salary;
    salary === 0 ?
      this.onResetSalaryFilter.emit() :
      this.onApplySalaryFilter.emit(salary);
  }

  initSalaryFilterList(from: number, to: number) {
    while (from <= to) {
      this.salaryFilterList.push(from);
      from += 250;
    }
  }
}
