import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptominerssecondComponent } from './cryptominerssecond.component';

describe('CryptominerssecondComponent', () => {
  let component: CryptominerssecondComponent;
  let fixture: ComponentFixture<CryptominerssecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptominerssecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptominerssecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
