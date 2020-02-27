import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-login-form-modal',
  templateUrl: './login-form-modal.component.html',
  styleUrls: ['./login-form-modal.component.scss']
})
export class LoginFormModalComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  isLoading: boolean;
  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoading = false;
        this.closeBtn.nativeElement.click();
      },
      reject => {
        console.log(reject);
        this.isLoading = false;
        // todo handle error on ui
      }
    );
  }
}
