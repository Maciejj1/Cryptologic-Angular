import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptominersthirdComponent } from './cryptominersthird.component';

describe('CryptominersthirdComponent', () => {
  let component: CryptominersthirdComponent;
  let fixture: ComponentFixture<CryptominersthirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptominersthirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptominersthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
