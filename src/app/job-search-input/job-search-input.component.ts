import {Component, OnInit} from '@angular/core';
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
  private readonly xIconPath: string;
  private readonly xFilledIconPath: string;
  activePath: string;
  showDropDown: boolean;
  activeOption: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder
  ) {
    this.searchForm = builder.group({
      query: ''
    });
    this.xIconPath = '../../assets/icons/x-circle.svg';
    this.xFilledIconPath = '../../assets/icons/x-circle-fill.svg';
  }
  options = ['Java', 'JavaScript', 'Docker', 'Angular', 'AngularJS'];
  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
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

  clearInput() {
    this.query = '';
  }

  openDropDown() {
    this.showDropDown = true;
  }

  closeDropDown() {
    this.showDropDown = false;
  }

  setActiveOption(option: string) {
    this.activeOption = option;
  }
}
