import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainthirdComponent } from './blockchainthird.component';

describe('BlockchainthirdComponent', () => {
  let component: BlockchainthirdComponent;
  let fixture: ComponentFixture<BlockchainthirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainthirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockchainthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
