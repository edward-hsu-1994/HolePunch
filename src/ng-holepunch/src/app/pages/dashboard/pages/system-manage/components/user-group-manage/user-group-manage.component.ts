import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { User, UserService,UserGroup } from 'src/sdk';
import { map, pluck, take, mapTo, tap,mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-group-manage',
  templateUrl: './user-group-manage.component.html',
  styleUrls: ['./user-group-manage.component.scss']
})
export class UserGroupManageComponent implements OnInit {
    loading=false;

  showNewUserGroup= false;
  showEditUserGroup= false;
  createUserGroupValidateForm!: FormGroup;
  editUserGroupValidateForm!: FormGroup;

  userGroups:UserGroup[]=[];

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.createUserGroupValidateForm.controls.password.value) {
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
    this.loadGroups();
    this.createUserGroupValidateForm = this.fb.group({
      name: [null, [Validators.required]],
      isAdmin: [false]
    });
    this.editUserGroupValidateForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      isAdmin: [false]
    });
  }

  loadGroups(){
    this.loading=true;
    this._userService.listUserGroup().subscribe(groups=>{
      this.userGroups = groups;
      this.loading = false;

    });
  }

  createUserGroup(){
    for (const i in this.createUserGroupValidateForm.controls) {
      this.createUserGroupValidateForm.controls[i].markAsDirty();
      this.createUserGroupValidateForm.controls[i].updateValueAndValidity();
    }

    if(this.createUserGroupValidateForm.invalid){
      return;
    }

    const id = this._message.loading('Creating User Group...', { nzDuration: 0 }).messageId;

    this._userService.createUserGroup(this.createUserGroupValidateForm.value)
      .subscribe(()=>{
        this._message.remove(id);
        this.loadGroups();
        this.showNewUserGroup = false;
        this.createUserGroupValidateForm.reset();
        this._message.success('User Group Created');
      });
  }




  selectUserGroupToEdit(userGroup:UserGroup){
    this.editUserGroupValidateForm.setValue(userGroup);
  }

  editUserGroup(){
    for (const i in this.editUserGroupValidateForm.controls) {
      this.editUserGroupValidateForm.controls[i].markAsDirty();
      this.editUserGroupValidateForm.controls[i].updateValueAndValidity();
    }

    if(this.editUserGroupValidateForm.invalid){
      return;
    }

    const id = this._message.loading('Updating User Group...', { nzDuration: 0 }).messageId;

    this._userService.updateUserGroup(this.editUserGroupValidateForm.value)
      .subscribe(()=>{
      this.loadGroups();
      this.showEditUserGroup = false;
      this.editUserGroupValidateForm.reset();
      this._message.remove(id);
      this._message.create('success', `Updated User Group`);
    })
  }


  deleteUserGroup(userGroup:UserGroup){
    this._modal.confirm({
      nzTitle: `Do you Want to delete this user group (${userGroup.name})?`,
      nzContent: 'When clicked the OK button, this user group will be deleted.',
      nzOnOk: () =>{
        const id = this._message.loading('Deleting User Group...', { nzDuration: 0 }).messageId;
        this._userService.deleteUserGroup(<number>userGroup.id).subscribe(()=>{
          this.loadGroups();
          this._message.remove(id);
          this._message.success('User Group Deleted');
        });
      }
    });
  }

}
