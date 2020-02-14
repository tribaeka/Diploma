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
  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.closeBtn.nativeElement.click();
      },
      reject => console.log(reject)
    );
  }
}
