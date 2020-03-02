import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../model/cv';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent implements OnInit {
  @Input() cvList: Cv[];
  constructor() { }

  ngOnInit() {
  }

  removeDeletedCv(deletedCv: Cv) {
    this.cvList = this.cvList.filter(item => item !== deletedCv);
  }
}
