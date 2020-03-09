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
  userImagePath: string;
  constructor(private tokenStorageService: TokenStorageService, private resources: ResourceService) {
    this.user = tokenStorageService.getUser();
    if (this.user.imageName === null) {
      this.userImagePath = this.resources.getDefaultUserImagePath();
    } else {
      this.userImagePath = this.resources.getUserImagePath(this.user.imageName);
    }
  }

  ngOnInit() {
  }

}
