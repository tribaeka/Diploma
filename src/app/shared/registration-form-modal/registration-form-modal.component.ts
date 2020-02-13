import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-registration-form-modal',
  templateUrl: './registration-form-modal.component.html',
  styleUrls: ['./registration-form-modal.component.scss']
})
export class RegistrationFormModalComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private accountService: AccountService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', [ Validators.required, Validators.minLength(4) ] ],
      email: ['', [ Validators.email, Validators.minLength(4) ] ],
      password: ['', [ Validators.maxLength(20), Validators.minLength(6) ] ]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.accountService.registration(this.registrationForm.value).subscribe(response => console.log(response));
    // todo on success close modal
  }
}
