import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountService} from '../../services/account.service';

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
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.accountService.login(this.loginForm.value).subscribe(
      response => {
        this.accountService.setCurrentUser(response);
        this.closeBtn.nativeElement.click();
      },
      reject => console.log(reject)
    );
  }
}
