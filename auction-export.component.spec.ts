import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionExportComponent } from './auction-export.component';

describe('AuctionExportComponent', () => {
  let component: AuctionExportComponent;
  let fixture: ComponentFixture<AuctionExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
