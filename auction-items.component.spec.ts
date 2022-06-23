import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionItemsComponent } from './auction-items.component';

describe('AuctionItemsComponent', () => {
  let component: AuctionItemsComponent;
  let fixture: ComponentFixture<AuctionItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
