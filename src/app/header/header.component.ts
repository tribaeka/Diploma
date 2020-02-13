import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../services/data-transfer.service';
import {Router} from '@angular/router';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  side: string;
  constructor(private route: Router,
              private dataTransferService: DataTransferService,
              private accountService: AccountService
  ) { }

  ngOnInit() {
    this.dataTransferService.currentSide.subscribe(currentSide => this.side = currentSide);
  }

  isCvSide() {
    return this.side === 'cv';
  }

  isJobSide() {
    return this.side === 'job';
  }
}
