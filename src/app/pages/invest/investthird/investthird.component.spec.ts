import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestthirdComponent } from './investthird.component';

describe('InvestthirdComponent', () => {
  let component: InvestthirdComponent;
  let fixture: ComponentFixture<InvestthirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestthirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
