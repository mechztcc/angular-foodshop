import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFoodstoresComponent } from './list-foodstores.component';

describe('ListFoodstoresComponent', () => {
  let component: ListFoodstoresComponent;
  let fixture: ComponentFixture<ListFoodstoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFoodstoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFoodstoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
