import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {User} from '../../model/user';
import {ResourceService} from '../../services/resource.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  defaultUserImagePath: string;
  constructor(private tokenStorageService: TokenStorageService, private resources: ResourceService) {
    this.user = tokenStorageService.getUser();
    if (this.user.imageName === null) {
      this.defaultUserImagePath = this.resources.getDefaultUserImagePath();
    } else {
      this.defaultUserImagePath = this.resources.getUserImagePath(this.user.imageName);
    }
  }

  ngOnInit() {
  }

  userImageIsExist(): boolean {
    return !!this.tokenStorageService.getUser().imageName;
  }

  getUserImageSource(): string {
    const user = this.tokenStorageService.getUser();
    return this.resources.getUserImagePath(user.imageName);
  }
}
