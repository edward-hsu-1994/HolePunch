import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { User, UserService } from 'src/sdk';
import { map, pluck, take, mapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {
  loading=false;

  showNewUser= false;
  createUserValidateForm!: FormGroup;


  users: User[]=[];



  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.createUserValidateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  constructor(private _userService: UserService, private _modal: NzModalService,private _message: NzMessageService,private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.loadUsers();

    this.createUserValidateForm = this.fb.group({
      account: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]]
    });
  }

  loadUsers(){
    this.loading=true;
    this._userService.listUser().subscribe(users=>{
      this.users = users;
      this.loading = false;
    });
  }

  createUser(){
    for (const i in this.createUserValidateForm.controls) {
      this.createUserValidateForm.controls[i].markAsDirty();
      this.createUserValidateForm.controls[i].updateValueAndValidity();
    }

    if(this.createUserValidateForm.invalid){
      return;
    }

    this._userService.createUser(this.createUserValidateForm.value)
      .pipe(mapTo((newUser:User)=>this._userService.changePassword(<number>newUser.id , {password: this.createUserValidateForm.value.password})))
      .subscribe(newUser=>{
        this.loadUsers();
        this.showNewUser = false;
        this.createUserValidateForm.reset();
        this._message.success('User Created');
      });
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.createUserValidateForm.controls.checkPassword.updateValueAndValidity());
  }





  editUser(user:User){

  }

  deleteUser(user:User){
    this._modal.confirm({
      nzTitle: `Do you Want to delete this user (${user.name}))?`,
      nzContent: 'When clicked the OK button, this user will be deleted.',
      nzOnOk: () =>{
        this._userService.deleteUser(<number>user.id).subscribe(()=>{
          this.loadUsers();
          this._message.success('User Deleted');
        });
      }
    });
  }

}
