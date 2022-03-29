import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodstoreComponent } from './foodstore.component';

describe('FoodstoreComponent', () => {
  let component: FoodstoreComponent;
  let fixture: ComponentFixture<FoodstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
