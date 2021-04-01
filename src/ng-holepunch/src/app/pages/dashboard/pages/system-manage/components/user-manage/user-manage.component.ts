import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { User, UserService,UserGroup } from 'src/sdk';
import { map, pluck, take, mapTo, tap,mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {
  showChangePassword = false;
  passwordVisible=false;
  newPassword = '';
  changePasswordTargetUser:any=null;

  loading=false;

  showNewUser= false;
  showEditUser= false;
  createUserValidateForm!: FormGroup;
  editUserValidateForm!: FormGroup;




  users: User[]=[];
  userGroups:UserGroup[]=[];
  selectedUserGroups:number[]=[];

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.createUserValidateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  constructor(
    private _userService: UserService,
    private _modal: NzModalService,
    private _message: NzMessageService,
    private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.loadUsers();
    this.loadGroups();
    this.createUserValidateForm = this.fb.group({
      account: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      enabled: [false]
    });
    this.editUserValidateForm = this.fb.group({
      id: [null, [Validators.required]],
      account: [null, [Validators.required]],
      name: [null, [Validators.required]],
      enabled: [null],
      groups: [null],
      currentIP:[null]
    });
  }

  loadUsers(){
    this.loading=true;
    this._userService.listUser().subscribe(users=>{
      this.users = users;
      this.loading = false;
    });
  }
  loadGroups(){
    this._userService.listUserGroup().subscribe(groups=>{
      this.userGroups = groups;
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

    const id = this._message.loading('Creating User...', { nzDuration: 0 }).messageId;
    var createdUser:any=null;
    this._userService.createUser(this.createUserValidateForm.value)
      .pipe(mergeMap((newUser:User)=>{
        createdUser = newUser;
        return this._userService.changePassword(<number>newUser.id , {password: this.createUserValidateForm.value.password})
      }))
      .pipe(mergeMap(()=>this._userService.updateWhereUserGroup(createdUser.id, this.selectedUserGroups)))
      .subscribe(()=>{
        this._message.remove(id);
        this.loadUsers();
        this.showNewUser = false;
        this.createUserValidateForm.reset();
        this.selectedUserGroups = [];
        this._message.success('User Created');
      });
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.createUserValidateForm.controls.checkPassword.updateValueAndValidity());
  }



  selectUserToEdit(user:User){
    this.editUserValidateForm.setValue(user);
    this.editUserValidateForm.get('account')?.disable();
    this.selectedUserGroups = user.groups?.map(x=><number>x.id) || [];
  }

  editUser(){
    for (const i in this.editUserValidateForm.controls) {
      this.editUserValidateForm.controls[i].markAsDirty();
      this.editUserValidateForm.controls[i].updateValueAndValidity();
    }

    if(this.editUserValidateForm.invalid){
      return;
    }

    const id = this._message.loading('Updating User...', { nzDuration: 0 }).messageId;
    this.editUserValidateForm.get('account')?.enable();

    this._userService.updateUser(this.editUserValidateForm.value)
      .pipe(mergeMap(()=>this._userService.updateWhereUserGroup(this.editUserValidateForm.value.id, this.selectedUserGroups)))
      .subscribe(()=>{
      this.loadUsers();
      this.showEditUser = false;
      this.editUserValidateForm.reset();
      this.selectedUserGroups=[];
      this._message.remove(id);
      this._message.create('success', `Updated User`);
    })
  }


  changeUserPassword(){
    if(!this.changePasswordTargetUser)return;
    const id = this._message.loading('Changing Psassword...', { nzDuration: 0 }).messageId;
      this._userService.changePassword(this.changePasswordTargetUser.id,{password: this.newPassword}).subscribe(()=>{
        this._message.remove(id);
        this._message.create('success', `Changed Password`);
        this.newPassword = '';
        this.showChangePassword = false;
    });
  }

  deleteUser(user:User){
    this._modal.confirm({
      nzTitle: `Do you Want to delete this user (${user.name})?`,
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
