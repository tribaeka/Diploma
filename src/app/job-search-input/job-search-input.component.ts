import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ResourceService} from '../services/resource.service';
import {log} from 'util';

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
  options: string[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder,
    private resourceService: ResourceService
  ) {
    this.searchForm = builder.group({
      query: ''
    });
    this.xIconPath = '../../assets/icons/x-circle.svg';
    this.xFilledIconPath = '../../assets/icons/x-circle-fill.svg';
    resourceService.getAutocompleteDictionary().subscribe(data => this.options = data);
  }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
    this.activePath = this.xIconPath;
  }

  updateQueryOnChange(inputValue: string) {
    this.query = inputValue;
  }

  updateQueryOnSelectOption(option: string) {
    if (this.query === null || !this.query.includes(' ')) {
      this.query = option + ' ';
    } else {
      const queryArray = this.query.split(' ');
      queryArray[queryArray.length - 1] = option;
      console.log(queryArray.join(' '));
      this.query = queryArray.join(' ') + ' ';
    }
  }

  startSearch() {
    this.router.navigate(['search/job/', this.query]);
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
