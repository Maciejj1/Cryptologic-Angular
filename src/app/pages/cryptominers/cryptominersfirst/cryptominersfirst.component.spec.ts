import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptominersfirstComponent } from './cryptominersfirst.component';

describe('CryptominersfirstComponent', () => {
  let component: CryptominersfirstComponent;
  let fixture: ComponentFixture<CryptominersfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptominersfirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptominersfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
