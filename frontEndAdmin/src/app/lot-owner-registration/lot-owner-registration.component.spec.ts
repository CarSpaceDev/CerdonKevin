import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotOwnerRegistrationComponent } from './lot-owner-registration.component';

describe('LotOwnerRegistrationComponent', () => {
  let component: LotOwnerRegistrationComponent;
  let fixture: ComponentFixture<LotOwnerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotOwnerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotOwnerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
