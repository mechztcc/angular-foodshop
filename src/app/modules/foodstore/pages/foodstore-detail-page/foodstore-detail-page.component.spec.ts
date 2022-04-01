import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodstoreDetailPageComponent } from './foodstore-detail-page.component';

describe('FoodstoreDetailPageComponent', () => {
  let component: FoodstoreDetailPageComponent;
  let fixture: ComponentFixture<FoodstoreDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodstoreDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodstoreDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
