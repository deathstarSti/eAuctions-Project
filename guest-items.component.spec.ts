import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestItemsComponent } from './guest-items.component';

describe('GuestItemsComponent', () => {
  let component: GuestItemsComponent;
  let fixture: ComponentFixture<GuestItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
