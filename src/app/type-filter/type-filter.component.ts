import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss']
})
export class TypeFilterComponent implements OnInit {
  @Output() onApplyTypeFilter = new EventEmitter();
  @Output() onResetTypeFilter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  applyTypeFilter(isRemote: boolean) {
    this.onApplyTypeFilter.emit(isRemote);
  }

  reset() {
    this.onResetTypeFilter.emit();
  }
}
