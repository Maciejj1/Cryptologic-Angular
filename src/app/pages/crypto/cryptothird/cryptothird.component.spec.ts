import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptothirdComponent } from './cryptothird.component';

describe('CryptothirdComponent', () => {
  let component: CryptothirdComponent;
  let fixture: ComponentFixture<CryptothirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptothirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptothirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
