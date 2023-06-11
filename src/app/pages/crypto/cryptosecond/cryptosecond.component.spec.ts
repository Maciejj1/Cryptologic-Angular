import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptosecondComponent } from './cryptosecond.component';

describe('CryptosecondComponent', () => {
  let component: CryptosecondComponent;
  let fixture: ComponentFixture<CryptosecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptosecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptosecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
