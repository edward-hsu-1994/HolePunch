import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ServiceAllowRule, ServiceForwardTarget, ServiceService, User, UserGroup } from 'src/sdk';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {
  validateForm!: FormGroup;
  validateTargetForm!: FormGroup;
  isNew = false;
  allowRules:ServiceAllowRule[] = [];

  users: User[] = [];
  groups: UserGroup[] = [];



  showNewUserGroupRule=false;
  createUserGroupRuleValidateForm!:FormGroup;

  showNewUserRule=false;
  createUserRuleValidateForm!:FormGroup;

  showNewCidrRule=false;
  createCidrRuleValidateForm!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _serviceService:ServiceService,
    private _modal: NzModalService,
    private _message: NzMessageService,
    ) {
    this.isNew = _route.snapshot.data.isNew;
    this.users = _route.snapshot.data.users;
    this.groups = _route.snapshot.data.userGroups;
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      port: [0, [Validators.required]],
      logoUrl: [null],
      enabled: [false],
      realPort:[null],
      protocol:['TCP'],
      status:[null]
    });

    this.validateTargetForm = this.fb.group({
      id: [null],
      serviceId:[null],
      priority:[0, [Validators.required]],
      name: ['default', [Validators.required]],
      ipAddress: [null, [Validators.required]],
      port: [0, [Validators.required]],
      enabled: [true]
    });

    this.validateTargetForm.get('name')?.disable();

    this.createUserGroupRuleValidateForm = this.fb.group({
      id: [null],
      serviceId:[null],
      type: ['USER_GROUP', [Validators.required]],
      userGroupId: [null, [Validators.required]]
    });
    this.createUserRuleValidateForm = this.fb.group({
      id: [null],
      serviceId:[null],
      type: ['USER', [Validators.required]],
      userId: [null, [Validators.required]]
    });
    this.createCidrRuleValidateForm = this.fb.group({
      id: [null],
      serviceId:[null],
      type: ['CIDR', [Validators.required]],
      cidr: [null, [Validators.required]]
    });

    if(!this.isNew){
      this.validateForm.setValue(this._route.snapshot.data.service);

      console.log(this.validateForm.value)
      this.allowRules = this._route.snapshot.data.allowRules;
      var target = this._route.snapshot.data.targets[0] || {};

      if(this._route.snapshot.data.targets.length){
        this.validateTargetForm.setValue(target);
      }else{
        this.validateTargetForm.patchValue({serviceId: this.validateForm.value.id})
      }
    }else{
    }
  }


  createUserGroupRule(){
    this.createUserGroupRuleValidateForm.patchValue({serviceId: this.validateForm.value.id})
    this.createUserGroupRuleValidateForm.patchValue({type: 'USER_GROUP'})

    console.log(this.createUserGroupRuleValidateForm.value)
    for (const i in this.createUserGroupRuleValidateForm.controls) {
      this.createUserGroupRuleValidateForm.controls[i].markAsDirty();
      this.createUserGroupRuleValidateForm.controls[i].updateValueAndValidity();
    }

    if(this.createUserGroupRuleValidateForm.invalid){
      return;
    }

    const id = this._message.loading('Creating Allow Rule...', { nzDuration: 0 }).messageId;
    delete this.createUserGroupRuleValidateForm.value.id;
    this._serviceService.createServiceAllowRule(this.validateForm.value.id, this.createUserGroupRuleValidateForm.value).subscribe(created=>{
      this.showNewUserGroupRule=false;
      this.createUserGroupRuleValidateForm.reset();
      this._message.remove(id);
      this._message.success('Allow Rule Created');

      this.allowRules.push(created);
    });
  }

  createUserRule(){
    this.createUserRuleValidateForm.patchValue({serviceId: this.validateForm.value.id})
    this.createUserRuleValidateForm.patchValue({type: 'USER'})

    console.log(this.createUserRuleValidateForm.value)
    for (const i in this.createUserRuleValidateForm.controls) {
      this.createUserRuleValidateForm.controls[i].markAsDirty();
      this.createUserRuleValidateForm.controls[i].updateValueAndValidity();
    }

    if(this.createUserRuleValidateForm.invalid){
      return;
    }

    const id = this._message.loading('Creating Allow Rule...', { nzDuration: 0 }).messageId;
    delete this.createUserRuleValidateForm.value.id;
    this._serviceService.createServiceAllowRule(this.validateForm.value.id, this.createUserRuleValidateForm.value).subscribe(created=>{
      this.showNewUserRule=false;
      this.createUserRuleValidateForm.reset();
      this._message.remove(id);
      this._message.success('Allow Rule Created');

      this.allowRules.push(created);
    });
  }

  createCidrRule(){
    this.createCidrRuleValidateForm.patchValue({serviceId: this.validateForm.value.id})
    this.createCidrRuleValidateForm.patchValue({type: 'CIDR'})

    console.log(this.createCidrRuleValidateForm.value)
    for (const i in this.createCidrRuleValidateForm.controls) {
      this.createCidrRuleValidateForm.controls[i].markAsDirty();
      this.createCidrRuleValidateForm.controls[i].updateValueAndValidity();
    }

    if(this.createCidrRuleValidateForm.invalid){
      return;
    }

    const id = this._message.loading('Creating Allow Rule...', { nzDuration: 0 }).messageId;
    delete this.createCidrRuleValidateForm.value.id;
    this._serviceService.createServiceAllowRule(this.validateForm.value.id, this.createCidrRuleValidateForm.value).subscribe(created=>{
      this.showNewCidrRule=false;
      this.createCidrRuleValidateForm.reset();
      this._message.remove(id);
      this._message.success('Allow Rule Created');

      this.allowRules.push(created);
    });
  }

  submitForm(): void {
    console.log(this.validateForm.value)
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if(this.validateForm.invalid){
      return;
    }

    delete this.validateForm.value.realPort;
    delete this.validateForm.value.status;
    if(this.isNew){
      const id = this._message.loading('Creating Service...', { nzDuration: 0 }).messageId;
      delete this.validateForm.value.id;
      this._serviceService.createService(this.validateForm.value).subscribe(created=>{
        this._message.remove(id);
        this._message.success('Service Created');

        this._router.navigateByUrl('/dashboard/services/edit-service/' + created.id);
      });
    }else{
      const id = this._message.loading('Updating Service...', { nzDuration: 0 }).messageId;
      this._serviceService.updateService(this.validateForm.value).subscribe(async edited=>{
        this._message.remove(id);
        this._message.success('Service Updated');

        await this._router.navigateByUrl('/dashboard/services/list');
        this._router.navigateByUrl('/dashboard/services/edit-service/' + edited.id);
      })
    }
  }

  submitTargetForm(): void {
    console.log(this.validateTargetForm.value)
    for (const i in this.validateTargetForm.controls) {
      this.validateTargetForm.controls[i].markAsDirty();
      this.validateTargetForm.controls[i].updateValueAndValidity();
    }

    if(this.validateTargetForm.invalid){
      return;
    }

    if(!this.validateTargetForm.value.id){
      const id = this._message.loading('Updating Service...', { nzDuration: 0 }).messageId;
      this.validateTargetForm.get('name')?.enable();
      delete this.validateTargetForm.value.id;
      this._serviceService.createServiceForwardTarget(this.validateForm.value.id,this.validateTargetForm.value ).subscribe(async created=>{
        this.validateTargetForm.get('name')?.disable();
        this._message.remove(id);
        this._message.success('Service Updated');

        await this._router.navigateByUrl('/dashboard/services/list');
        this._router.navigateByUrl('/dashboard/services/edit-service/' + created.serviceId);
      });
    }else{

      const id = this._message.loading('Updating Service...', { nzDuration: 0 }).messageId;
      this.validateTargetForm.get('name')?.enable();
      this._serviceService.updateServiceForwardTarget(this.validateForm.value.id,this.validateTargetForm.value).subscribe(async edited=>{
        this.validateTargetForm.get('name')?.disable();
        this._message.remove(id);
        this._message.success('Service Updated');

        await this._router.navigateByUrl('/dashboard/services/list');
        this._router.navigateByUrl('/dashboard/services/edit-service/' + edited.serviceId);
      })
    }
  }

  deleteAllowRule(rule:ServiceAllowRule){
    this._modal.confirm({
      nzTitle: `Do you Want to delete this allow rule?`,
      nzContent: 'When clicked the OK button, this allow rule will be deleted.',
      nzOnOk: () =>{
        const id = this._message.loading('Deleting Allow Rule...', { nzDuration: 0 }).messageId;
        this._serviceService.deleteServiceAllowRule(this.validateForm.value.id,<number>rule.id).subscribe(()=>{
          this.allowRules = this.allowRules.filter(x=>x.id !== rule.id);
          this._message.remove(id);
          this._message.success('Allow Rule Deleted');
        });
      }
    });
  }
}
