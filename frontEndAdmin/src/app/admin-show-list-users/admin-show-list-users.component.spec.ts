import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowListUsersComponent } from './admin-show-list-users.component';

describe('AdminShowListUsersComponent', () => {
  let component: AdminShowListUsersComponent;
  let fixture: ComponentFixture<AdminShowListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminShowListUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
