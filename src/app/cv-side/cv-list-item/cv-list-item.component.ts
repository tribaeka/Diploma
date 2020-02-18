import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from '../../model/cv';
import {CvService} from '../../services/cv.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cv-list-item',
  templateUrl: './cv-list-item.component.html',
  styleUrls: ['./cv-list-item.component.scss']
})
export class CvListItemComponent implements OnInit {
  @Input() cv: Cv;
  @Output() cvIsDeleted = new EventEmitter();
  constructor(private cvService: CvService) { }

  ngOnInit() {
  }

  downloadCv() {
    this.cvService.downloadCv(this.cv);
  }

  deleteCv() {
    this.cvService.deleteCv(this.cv).subscribe(response => this.cvIsDeleted.emit(this.cv));
  }
}
