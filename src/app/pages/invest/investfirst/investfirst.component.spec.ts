import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestfirstComponent } from './investfirst.component';

describe('InvestfirstComponent', () => {
  let component: InvestfirstComponent;
  let fixture: ComponentFixture<InvestfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestfirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
