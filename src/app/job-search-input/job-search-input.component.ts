import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-job-search-input',
  templateUrl: './job-search-input.component.html',
  styleUrls: ['./job-search-input.component.scss']
})
export class JobSearchInputComponent implements OnInit {
  searchForm: FormGroup;
  query: string;
  private xIconPath: string;
  private xFilledIconPath: string;
  activePath: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder
  ) {
    this.searchForm = builder.group({
      query: ''
    });
  }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
    this.xIconPath = '../../assets/icons/x-circle.svg';
    this.xFilledIconPath = '../../assets/icons/x-circle-fill.svg';
    this.activePath = this.xIconPath;
  }

  onInputChangeHandler(inputValue: string) {
    this.query = inputValue;
  }
  startSearch(searchForm) {
    this.router.navigate(['search/job/', searchForm.query]);
  }

  mouseEnterHandler() {
    this.activePath = this.xFilledIconPath;
  }

  mouseLeaveHandler() {
    this.activePath = this.xIconPath;
  }

  clickHandler() {
    this.query = '';
  }
}
