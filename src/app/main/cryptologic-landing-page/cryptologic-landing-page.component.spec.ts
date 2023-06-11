import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptologicLandingPageComponent } from './cryptologic-landing-page.component';

describe('CryptologicLandingPageComponent', () => {
  let component: CryptologicLandingPageComponent;
  let fixture: ComponentFixture<CryptologicLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptologicLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptologicLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
