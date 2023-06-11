import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptofirstComponent } from './cryptofirst.component';

describe('CryptofirstComponent', () => {
  let component: CryptofirstComponent;
  let fixture: ComponentFixture<CryptofirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptofirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptofirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
