import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlochainfirstComponent } from './blochainfirst.component';

describe('BlochainfirstComponent', () => {
  let component: BlochainfirstComponent;
  let fixture: ComponentFixture<BlochainfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlochainfirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlochainfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
