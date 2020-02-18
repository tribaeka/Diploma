import { Component, OnInit } from '@angular/core';
import {CvService} from '../../services/cv.service';
import {Cv} from '../../model/cv';

@Component({
  selector: 'app-user-cv',
  templateUrl: './user-cv.component.html',
  styleUrls: ['./user-cv.component.scss']
})
export class UserCvComponent implements OnInit {
  cvList: Cv[];
  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService.gerUsersCv().subscribe(data => this.cvList = data);
  }

}
