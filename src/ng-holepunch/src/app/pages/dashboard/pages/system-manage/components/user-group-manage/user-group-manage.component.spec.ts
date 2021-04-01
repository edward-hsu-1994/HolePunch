import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupManageComponent } from './user-group-manage.component';

describe('UserManageComponent', () => {
  let component: UserGroupManageComponent;
  let fixture: ComponentFixture<UserGroupManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGroupManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
