import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {User} from '../../model/user';
import {ResourceService} from '../../services/resource.service';
import {HistoryService} from '../../services/history.service';
import {Job} from '../../model/job';
import {JobHistory} from '../../model/job-history';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  defaultUserImagePath: string;
  activeTab: string;
  tabMap = {
    cvList: 'cvList',
    history: 'history'
  };
  jobsFromHistory: JobHistory[];
  constructor(private tokenStorageService: TokenStorageService,
              private resources: ResourceService,
              private historyService: HistoryService) {
    this.user = tokenStorageService.getUser();
  }

  ngOnInit() {
    this.activeTab = this.tabMap.cvList;
    if (this.user.imageName === null) {
      this.defaultUserImagePath = this.resources.getDefaultUserImagePath();
    } else {
      this.defaultUserImagePath = this.resources.getUserImagePath(this.user.imageName);
    }
    this.historyService.getHistoryByUserId(this.user.userId).subscribe(jobs => {
      this.jobsFromHistory = jobs;
    });
  }

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  isActive(tabName: string): boolean {
    return this.activeTab === tabName;
  }

  userImageIsExist(): boolean {
    return !!this.tokenStorageService.getUser().imageName;
  }

  getUserImageSource(): string {
    const user = this.tokenStorageService.getUser();
    return this.resources.getUserImagePath(user.imageName);
  }
}
