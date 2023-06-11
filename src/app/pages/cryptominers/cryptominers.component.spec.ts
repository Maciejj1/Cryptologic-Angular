import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptominersComponent } from './cryptominers.component';

describe('CryptominersComponent', () => {
  let component: CryptominersComponent;
  let fixture: ComponentFixture<CryptominersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptominersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptominersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
