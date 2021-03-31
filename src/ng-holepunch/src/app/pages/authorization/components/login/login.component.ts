import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserService } from 'src/sdk';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _message: NzMessageService,
    private _modal: NzModalService,
    private _router:Router) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if(this.validateForm.invalid){
      return;
    }

    const id = this._message.loading('Login...', { nzDuration: 0 }).messageId;
    this._userService.login({ account: this.validateForm.value.account, password:  this.validateForm.value.password})
      .subscribe(token=>{
        this._message.remove(id);
        if(token){
          sessionStorage.setItem('token',token);
          this._router.navigateByUrl('/connect');
        }else{
          this._modal.error({
            nzTitle: 'Authorization Failed',
            nzContent: 'Account or Password incorrect.'
          })
        }
      });
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      account: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
