import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldMineHomeComponent } from './gold-mine-home.component';

describe('GoldMineHomeComponent', () => {
  let component: GoldMineHomeComponent;
  let fixture: ComponentFixture<GoldMineHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldMineHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldMineHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
