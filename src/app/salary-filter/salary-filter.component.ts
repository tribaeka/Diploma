import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-salary-filter',
  templateUrl: './salary-filter.component.html',
  styleUrls: ['./salary-filter.component.scss']
})
export class SalaryFilterComponent implements OnInit {
  @Output() onApplySalaryFilter = new EventEmitter();
  salaryFilterList: number[] = [];
  selectedFilterValue: number;

  constructor() {
    this.initSalaryFilterList(0, 2000);
  }

  ngOnInit() {
  }

  applySalaryFilter(salary: any) {
    this.selectedFilterValue = salary;
    this.onApplySalaryFilter.emit(salary);
  }

  initSalaryFilterList(from: number, to: number) {
    while (from < to) {
      from += 250;
      this.salaryFilterList.push(from);
    }
  }
}
