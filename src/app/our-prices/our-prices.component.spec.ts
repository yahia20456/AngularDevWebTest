import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPricesComponent } from './our-prices.component';

describe('OurPricesComponent', () => {
  let component: OurPricesComponent;
  let fixture: ComponentFixture<OurPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
