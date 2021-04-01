import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ServiceService } from 'src/sdk';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {
  validateForm!: FormGroup;
  isNew = false;
  constructor(
    private fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _serviceService:ServiceService,
    private _message: NzMessageService,
    ) {
    this.isNew = _route.snapshot.data.isNew;


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

    if(!this.isNew){
      this.validateForm.setValue(this._route.snapshot.data.service);
      console.log(this.validateForm.value)
    }
  }


  submitForm(): void {
    console.log(this.validateForm.value)
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
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
}
