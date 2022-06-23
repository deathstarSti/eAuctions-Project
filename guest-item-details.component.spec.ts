import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestItemDetailsComponent } from './guest-item-details.component';

describe('GuestItemDetailsComponent', () => {
  let component: GuestItemDetailsComponent;
  let fixture: ComponentFixture<GuestItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
