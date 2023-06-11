import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainsecondComponent } from './blockchainsecond.component';

describe('BlockchainsecondComponent', () => {
  let component: BlockchainsecondComponent;
  let fixture: ComponentFixture<BlockchainsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainsecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockchainsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
