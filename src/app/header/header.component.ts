import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUrl: string;
  constructor(private route: Router) { }

  ngOnInit() {
    this.route.events.subscribe((value: NavigationEnd) => this.currentUrl = value.url);
  }

  isJobSide() {
    return this.currentUrl.includes('home/job');
  }

  isCvSide() {
    return this.currentUrl.includes('home/cv');
  }
}
