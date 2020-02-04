import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../services/data-transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  side: string;
  constructor(private route: Router, private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.dataTransferService.currentSide.subscribe(currentSide => this.side = currentSide);
  }
}
