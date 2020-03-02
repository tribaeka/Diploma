import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from '../../model/cv';
import {CvService} from '../../services/cv.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-cv-list-item',
  templateUrl: './cv-list-item.component.html',
  styleUrls: ['./cv-list-item.component.scss'],
  animations: [
    trigger('showItem', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('800ms ease-out')),
      transition(':leave', animate('800ms ease-in')),
    ]),
    trigger('hideItem', [
      state('exist', style({ opacity: 1 })),
      state('removed', style({ opacity: 0 })),
      transition('exist=>removed', animate('400ms ease-in')),
    ])
  ],
})
export class CvListItemComponent implements OnInit {
  isRemoved = false;
  animationDurationOnHide = 400;
  @Input() cv: Cv;
  @Output() cvIsDeleted = new EventEmitter();
  constructor(private cvService: CvService) { }

  ngOnInit() {
  }

  downloadCv() {
    this.cvService.downloadCv(this.cv);
  }

  deleteCv() {
    this.isRemoved = true;
    setTimeout(() => {
      this.cvService.deleteCv(this.cv)
        .subscribe(response => this.cvIsDeleted.emit(this.cv));
    }, this.animationDurationOnHide);
  }
}
