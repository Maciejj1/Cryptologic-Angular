import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestsecondComponent } from './investsecond.component';

describe('InvestsecondComponent', () => {
  let component: InvestsecondComponent;
  let fixture: ComponentFixture<InvestsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestsecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
