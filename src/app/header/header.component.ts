import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../services/data-transfer.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  side: string;
  isLoggedIn: boolean;
  constructor(private route: Router,
              private dataTransferService: DataTransferService,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService
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
