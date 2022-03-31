import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreateFoodstoreComponent } from './card-create-foodstore.component';

describe('CardCreateFoodstoreComponent', () => {
  let component: CardCreateFoodstoreComponent;
  let fixture: ComponentFixture<CardCreateFoodstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCreateFoodstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreateFoodstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
